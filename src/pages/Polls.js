import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectUserAuthorities,
  selectPolls,
  selectAccessToken,
  selectUsernameOrEmail,
  selectIsUserLoggedIn,
} from "../redux/accessors";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import { Redirect } from "react-router-dom";
import Login from "./Login";

const Polls = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPolls());
    return () => {};
  }, [dispatch]);

  const usernameOrEmail = useSelector(selectUsernameOrEmail);
  const accessToken = useSelector(selectAccessToken);
  const userAuthorities = useSelector(selectUserAuthorities);
  const polls = useSelector(selectPolls);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  console.log("Polls");
  console.log({ userAuthorities });
  console.log({ accessToken });

  if (!isUserLoggedIn) {
    return <Redirect to="/login" components={Login} />;
  }

  return (
    <React.Fragment>
      <Container className="my-5">
        <Header usernameOrEmail={usernameOrEmail} />
      </Container>
      <Container className="my-5">
        <div className="my-2">
          <Button href="/addPoll" variant="primary" size="lg">
            Yeni Ekle
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>{polls}</tr>
          </thead>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Polls;
