import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addPoll } from "../redux/actions/addPoll";
import { selectAccessToken, selectIsUserLoggedIn } from "../redux/accessors";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import Header from "../components/Header";
import OptionInput from "../components/OptionInput";
import OptionList from "../components/OptionList";
import uuid from "uuid";

const AddPoll = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);
  const [question, setQuestion] = useState(false);

  console.log("AddPoll");

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  if (!isUserLoggedIn) {
    return <Redirect to="/login" components={Login} />;
  }

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id,
      text: item,
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem("");
    setId(uuid());
    setEditItem(false);
  };

  const clearList = () => {
    setItems([]);
  };
  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.text);
    setId(id);
    setEditItem(true);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const request = {
      question,
      choices: items.map((item) => ({ text: item.text })),
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
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Soru
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
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
                  <OptionInput
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    editItem={editItem}
                  />
                  <OptionList
                    items={items}
                    clearList={clearList}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button onClick={handleSend} type="submit">
                    Gönder
                  </Button>
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
