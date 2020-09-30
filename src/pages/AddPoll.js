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
import OptionControl from "../components/OptionControl";

const AddPoll = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  console.log("AddPoll");
  console.log({ accessToken });

  const [englishPoll, setEnglishPoll] = useState("");
  const [turkishPoll, setTurkishPoll] = useState("");

  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  // if (!isUserLoggedIn) {
  //   return <Redirect to="/login" components={Login} />;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addPoll({
        englishMean: englishPoll.toString(),
        turkishMean: turkishPoll.toString(),
      })
    );
  };

  const handleQuestionChange = (e) => {
    e.preventDefault();
  };

  const isFormInvalid = () => {};

  const handleClickAddChoice = () => {};

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
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Seçenekler
                </Form.Label>
                <Col sm={10}>
                  <OptionControl />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Gönder</Button>
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
