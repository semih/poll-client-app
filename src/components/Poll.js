import React, { useState } from "react";
import { Card, Row, Table } from "react-bootstrap";

export default function Poll(props) {
  console.log({ props });

  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

  return (
    <Card className="mt-5">
      <Card.Body>
        <Table>
          <Row className="mx-2">{props.question}</Row>
          {props.choices.map((p) => (
            <div className="radio-buttons mt-2">
              <label>
                <input
                  name="name"
                  key={p.id}
                  type="radio"
                  onChange={handleChange}
                />
                <span className="ml-4">{p.text}</span>
              </label>
            </div>
          ))}
        </Table>
      </Card.Body>
    </Card>
  );
}
