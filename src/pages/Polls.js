import React, { useEffect, useState } from "react";
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

const Polls = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);
  const userAuthorities = useSelector(selectUserAuthorities);
  const polls = useSelector(selectPolls);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  //const usernameorEmail = useSelector(selectUsernameOrEmail);

  console.log("Polls");
  console.log({ userAuthorities });
  console.log({ accessToken });

  return (
    <React.Fragment>
      <Container className="my-2">
        <Header />
      </Container>
      <Container>
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
