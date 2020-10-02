import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, selectUserAuthority } from "../redux/accessors";
import { castVote } from "../redux/actions/vote";
import ChoiceList from "./ChoiceList";
import uuid from "uuid";
import ChoiceInput from "./ChoiceInput";
import { updatePoll } from "../redux/actions/updatePoll";

export default function Poll({ id, question, choices }) {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const userAuthority = useSelector(selectUserAuthority);
  const pollId = id;

  const [chosenOption, setChosenOption] = useState();
  const [updatedQuestion, setQuestion] = useState();
  const [updatedChoices, setChoices] = useState([]);
  const [updatedId, setId] = useState(uuid());
  const [choice, setChoice] = useState("");
  const [editChoice, setEditChoice] = useState(false);

  const handleChange = (e, choiceId) => {
    if (e.target.checked) {
      setChosenOption(choiceId);
    }

    const request = { choiceId };
    dispatch(castVote(accessToken, request, pollId));
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChoice = {
      id,
      text: chosenOption,
    };

    const updatedChoices = [...updatedChoices, newChoice];
    setChoices(updatedChoices);
    setChoice("");
    setId(uuid());
    setEditChoice(false);
  };

  const clearList = () => {
    setChoices([]);
  };

  const handleDelete = (id) => {
    const filteredChoices = updatedChoices.filter(
      (choice) => choice.updatedId !== id
    );
    setChoices(filteredChoices);
  };

  const handleEdit = (id) => {
    const filteredItems = updatedChoices.filter((choice) => choice.id !== id);
    const selectedItem = updatedChoices.find((choice) => choice.id === id);
    setChoices(filteredItems);
    setChoice(selectedItem.text);
    setId(id);
    setEditChoice(true);
  };

  const handleSubmitUpdatePoll = (e) => {
    e.preventDefault();

    const request = {
      question,
      choices: updatedChoices.map((choice) => ({ text: choice.text })),
    };

    dispatch(updatePoll(accessToken, id, request));
  };

  return (
    <React.Fragment>
      {userAuthority === "ROLE_USER" && (
        <Card className="mt-2">
          <Card.Body className="mx-2">
            {question}
            {choices.map((choice) => (
              <Row key={choice.id} className="ml-2 mt-3">
                <label>
                  <input
                    name={pollId}
                    key={choice.id}
                    onChange={(e) => handleChange(e, choice.id)}
                    checked={chosenOption === choice.id}
                    type="radio"
                  />
                  <span className="ml-3">{choice.text}</span>
                </label>
              </Row>
            ))}
          </Card.Body>
        </Card>
      )}
      {userAuthority === "ROLE_ADMIN" && (
        <Container>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Form onSubmit={handleSubmitUpdatePoll}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Soru
                  </Form.Label>
                  <Col sm={8}>
                    {pollId}
                    <Form.Control
                      className="form-control text-capitalize"
                      as="textarea"
                      rows={3}
                      placeholder="Bir Soru Yaz"
                      //onChange={handleChangeQuestion}
                      value={question}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Seçenekler
                  </Form.Label>

                  <Col sm={8}>
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
                      className="btn-dark btn-md mr-2"
                      type="submit"
                      disabled={question === "" || choices.length === 0}
                    >
                      Kaydet
                    </button>
                    <button
                      className="btn-dark btn-md"
                      type="submit"
                      disabled={question === "" && choices.length === 0}
                    >
                      Sil
                    </button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
}
