import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteWord } from "../redux/actions/deleteWord";

export default function ModalDelete(props) {
  const dispatch = useDispatch();
  const [modalShowDelete, setModalShowDelete] = useState(props.show);

  function handleDelete() {
    console.log(props.id);
    dispatch(deleteWord(props.id));
    setModalShowDelete(false);
  }

  return (
    <Modal
      show={modalShowDelete}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kaydı Silmek İstediğinizden Emin Misiniz?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>Id</Form.Label>
                  <Form.Control value={props.id} type="text" readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>İngilizce Söz</Form.Label>
                  <Form.Control
                    value={props.englishmean}
                    as="textarea"
                    rows="3"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto">
                <Form.Group>
                  <Form.Label>Türkçe Karşılığı</Form.Label>
                  <Form.Control
                    value={props.turkishmean}
                    as="textarea"
                    rows="3"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {props.children}
        <Button onClick={handleDelete}>Sil</Button>
      </Modal.Footer>
    </Modal>
  );
}
