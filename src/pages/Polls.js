import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectPolls,
  selectAccessToken,
  selectIsUserLoggedIn,
} from "../redux/accessors";
import Header from "../components/Header";
import { Col, Form, Row } from "react-bootstrap";

import Poll from "../components/Poll";
import Login from "./Login";
import { Redirect } from "react-router-dom";

export const Polls = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    dispatch(getPolls(accessToken));
  }, [dispatch, accessToken]);
  const polls = useSelector(selectPolls);

  if (!isUserLoggedIn) {
    return <Redirect component={Login} to="/login" />;
  }

  return (
    <React.Fragment>
      <Container className="my-2">
        <Header />
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Form>
              <Col>
                {polls.map((poll) => (
                  <Poll key={poll.id} {...poll} />
                ))}
              </Col>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Polls;
