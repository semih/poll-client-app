import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectUserAuthority,
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
  const userAuthority = useSelector(selectUserAuthority);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    dispatch(getPolls(accessToken));
  }, [dispatch, accessToken]);

  const polls = useSelector(selectPolls);
  console.log({ isUserLoggedIn });

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
              {isUserLoggedIn && userAuthority === "ROLE_USER" && (
                <Col>
                  {polls.map((poll) => (
                    <Poll key={poll.id} {...poll} />
                  ))}
                </Col>
              )}
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Polls;
