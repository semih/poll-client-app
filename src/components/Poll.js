import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, selectUserAuthority } from "../redux/accessors";
import { castVote } from "../redux/actions/vote";
import ChoiceList from "./ChoiceList";
import uuid from "uuid";
import ChoiceInput from "./ChoiceInput";
import { updatePoll } from "../redux/actions/updatePoll";
import { deletePoll } from "../redux/actions/deletePoll";

export default function Poll({ id, question, choices }) {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const userAuthority = useSelector(selectUserAuthority);
  const pollId = id;

  const [chosenOption, setChosenOption] = useState();
  const [updatedQuestion, setQuestion] = useState(question);
  const [updatedChoices, setChoices] = useState(choices);
  const [choiceId, setChoiceId] = useState(uuid());
  const [choice, setChoice] = useState("");
  const [editChoice, setEditChoice] = useState(false);

  const handleChange = (e, choiceId) => {
    console.log({ choiceId });
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
      id: choiceId,
      text: choice,
    };

    updatedChoices.push(newChoice);

    setChoices(updatedChoices);
    setChoice("");
    setChoiceId(uuid());
    setEditChoice(false);
    console.log({ updatedChoices });
  };

  const clearList = () => {
    setChoices([]);
  };

  const handleDelete = (choiceId) => {
    const filteredChoices = updatedChoices.filter(
      (choice) => choice.id !== choiceId
    );
    setChoices(filteredChoices);
  };

  const handleEdit = (choiceId) => {
    const filteredItems = updatedChoices.filter(
      (choice) => choice.id !== choiceId
    );
    const selectedItem = updatedChoices.find(
      (choice) => choice.id === choiceId
    );
    setChoices(filteredItems);
    setChoice(selectedItem.text);
    setChoiceId(choiceId);
    setEditChoice(true);
  };

  const handleChangeChoice = (e) => {
    setChoice(e.target.value);
  };

  const handleSubmitUpdatePoll = (e) => {
    e.preventDefault();
    console.log("update");
    const request = {
      question,
      choices: updatedChoices.map((choice) => ({ text: choice.text })),
    };

    console.log({ request });
    dispatch(updatePoll(accessToken, pollId, request));
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    dispatch(deletePoll(accessToken, pollId));
  };

  const questionNumberTag = pollId + "     ";

  return (
    <React.Fragment>
      {userAuthority === "ROLE_USER" && (
        <Card className="mt-2">
          <Card.Body className="mx-2">
            <b>{questionNumberTag}. </b>
            {question}
            {updatedChoices.map((choice) => (
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
                  <Form.Label column sm={2} className="text-right">
                    <b>Soru {questionNumberTag}</b>
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={updatedQuestion}
                      className="form-control text-capitalize"
                      placeholder="Bir Soru Yaz"
                      onChange={handleChangeQuestion}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} className="text-right">
                    <b>Seçenekler</b>
                  </Form.Label>

                  <Col sm={8}>
                    <ChoiceInput
                      item={choice}
                      handleChange={handleChangeChoice}
                      handleSubmit={handleSubmit}
                      editItem={editChoice}
                    />

                    <ChoiceList
                      items={updatedChoices}
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
                      onClick={handleClickDelete}
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
