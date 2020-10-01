import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";

export default function Poll(props) {
  console.log({ props });
  const [chosenOption, setChosenOption] = useState();

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setChosenOption(id);
    }
  };

  return (
    <Card className="mt-2">
      <Card.Body className="mx-2">
        {props.question}
        {props.choices.map((c) => (
          <Row key={c.id} className="ml-2 mt-3">
            <label>
              <input
                name={props.id}
                key={c.id}
                onChange={(e) => handleChange(e, c.id)}
                checked={chosenOption === c.id}
                type="radio"
              />
              <span className="ml-3">{c.text}</span>
            </label>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}
