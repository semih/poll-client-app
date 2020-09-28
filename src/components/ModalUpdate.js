import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateWord } from "../redux/actions/updateWord";

export default function ModalUpdate(props) {
  const dispatch = useDispatch();
  const [englishWord, setEnglishWord] = useState(props.englishmean);
  const [turkishWord, setTurkishWord] = useState(props.turkishmean);
  const [modalShowUpdate, setModalShowUpdate] = useState(props.show);

  function handleUpdate() {
    console.log(props.id + " \n " + englishWord + " \n " + turkishWord);
    dispatch(
      updateWord({
        proverbsId: props.id,
        englishMean: englishWord,
        turkishMean: turkishWord,
      })
    );
    setModalShowUpdate(false);
  }

  return (
    <Modal
      show={modalShowUpdate}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Güncelleme İşlemi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    value={props.id}
                    type="text"
                    onChange={(e) => setTurkishWord(e.target.value)}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>İngilizce Söz</Form.Label>
                  <Form.Control
                    value={englishWord}
                    as="textarea"
                    rows="3"
                    onChange={(e) => setEnglishWord(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>Türkçe Karşılığı</Form.Label>
                  <Form.Control
                    value={turkishWord}
                    as="textarea"
                    rows="3"
                    onChange={(e) => setTurkishWord(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {props.children}
        <Button onClick={handleUpdate}>Güncelle</Button>
      </Modal.Footer>
    </Modal>
  );
}
