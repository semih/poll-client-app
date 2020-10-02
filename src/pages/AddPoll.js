import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addPoll } from "../redux/actions/addPoll";
import {
  selectAccessToken,
  selectAddPoll,
  selectIsUserLoggedIn,
} from "../redux/accessors";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import Header from "../components/Header";
import ChoiceInput from "../components/ChoiceInput";
import ChoiceList from "../components/ChoiceList";
import uuid from "uuid";

const AddPoll = () => {
  const dispatch = useDispatch();

  const [choices, setChoices] = useState([]);
  const [id, setId] = useState(uuid());
  const [choice, setChoice] = useState("");
  const [editChoice, setEditChoice] = useState(false);
  const [question, setQuestion] = useState(false);

  const accessToken = useSelector(selectAccessToken);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const addPollSelector = useSelector(selectAddPoll);

  if (!isUserLoggedIn) {
    return <Redirect to="/login" components={Login} />;
  }

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChoice = {
      id,
      text: choice,
    };

    const updatedChoices = [...choices, newChoice];
    setChoices(updatedChoices);
    setChoice("");
    setId(uuid());
    setEditChoice(false);
  };

  const clearList = () => {
    setChoices([]);
  };

  const handleDelete = (id) => {
    const filteredChoices = choices.filter((choice) => choice.id !== id);
    setChoices(filteredChoices);
  };

  const handleEdit = (id) => {
    const filteredItems = choices.filter((choice) => choice.id !== id);
    const selectedItem = choices.find((choice) => choice.id === id);
    setChoices(filteredItems);
    setChoice(selectedItem.text);
    setId(id);
    setEditChoice(true);
  };

  const handleSubmitAddPoll = (e) => {
    e.preventDefault();

    const request = {
      question,
      choices: choices.map((choice) => ({ text: choice.text })),
    };

    dispatch(addPoll(accessToken, request));
  };

  return (
    <React.Fragment>
      <Container className="my-2">
        <Header />
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmitAddPoll}>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Soru
                </Form.Label>
                <Col sm={10}>
                  <input
                    type="textarea"
                    className="form-control text-capitalize"
                    placeholder="Bir Soru Yaz"
                    onChange={handleChangeQuestion}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Seçenekler
                </Form.Label>
                <Col sm={10}>
                  <ChoiceInput
                    item={choice}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    editItem={editChoice}
                  />
                  <ChoiceList
                    items={choices}
                    clearList={clearList}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <button
                    className="btn-dark btn-md"
                    type="submit"
                    disabled={question === "" || choices.length === 0}
                  >
                    Kaydet
                  </button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AddPoll;
