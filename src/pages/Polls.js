import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectUserAuthorities,
  selectPolls,
  selectAccessToken,
  selectIsUserLoggedIn,
  selectUsernameOrEmail,
} from "../redux/accessors";
import Header from "../components/Header";
import { Col, Form, Row } from "react-bootstrap";

import Poll from "../components/Poll";

const Polls = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);
  const userAuthorities = useSelector(selectUserAuthorities);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const usernameorEmail = useSelector(selectUsernameOrEmail);

  useEffect(() => {
    dispatch(getPolls(accessToken));
  }, [dispatch, accessToken]);

  const polls = useSelector(selectPolls);

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
                {polls.map((p) => (
                  <Poll key={p.id} {...p} />
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
