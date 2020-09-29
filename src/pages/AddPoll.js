import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addPoll } from "../redux/actions/addPoll";

const AddPoll = () => {
  const dispatch = useDispatch();

  const [englishPoll, setEnglishPoll] = useState("");
  const [turkishPoll, setTurkishPoll] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addPoll({
        englishMean: englishPoll.toString(),
        turkishMean: turkishPoll.toString(),
      })
    );
  }

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="İngilizce Söz"
                onChange={(e) => setEnglishPoll(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Türkçe Karşılığı"
                onChange={(e) => setTurkishPoll(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mx-auto my-2">
            <Button variant="primary" size="lg" block type="submit">
              Kaydet
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddPoll;
