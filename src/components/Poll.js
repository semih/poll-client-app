import React, { useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

export default function Poll(props) {
  console.log({ props });

  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

  return (
    <Card className="mt-5">
      <Card.Body className="mx-2">
        <Table>
          <Row>{props.question}</Row>
          <Col className="mt-4">
            {props.choices.map((p) => (
              <div className="radio-buttons">
                <label>
                  <input
                    name={props.id}
                    key={p.id}
                    type="radio"
                    onChange={handleChange}
                  />
                  <span className="ml-3">{p.text}</span>
                </label>
              </div>
            ))}
          </Col>
        </Table>
      </Card.Body>
    </Card>
  );
}
