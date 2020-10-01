import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "../redux/accessors";
import { castVote } from "../redux/actions/vote";

export default function Poll(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const pollId = props.id;

  const [chosenOption, setChosenOption] = useState();

  const handleChange = (e, choiceId) => {
    if (e.target.checked) {
      setChosenOption(choiceId);
    }
    const request = {
      choiceId,
    };

    dispatch(castVote(accessToken, request, pollId));
  };

  return (
    <Card className="mt-2">
      <Card.Body className="mx-2">
        {props.question}
        {props.choices.map((choice) => (
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
  );
}
