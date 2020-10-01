import React, { /*useEffect,*/ useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectUserAuthorities,
  selectPolls,
  selectAccessToken,
  selectIsUserLoggedIn,
  selectUsernameOrEmail,
} from "../redux/accessors";
import Button from "react-bootstrap/Button";
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

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Container className="my-2">
        <Header />
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Col>
                {polls.map((p) => (
                  <Poll key={p.id} {...p} />
                ))}
                <Button className="mt-4" onClick={handleClick} type="submit">
                  Gönder
                </Button>
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
