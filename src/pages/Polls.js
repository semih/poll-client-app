import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import {
  selectIsUserLoggedIn,
  selectPolls,
  selectAccessToken,
} from "../redux/accessors";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import Login from "./Login";

const Polls = () => {
  const dispatch = useDispatch();

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  useEffect(() => {
    dispatch(getPolls());
    return () => {};
  }, [dispatch]);

  const polls = useSelector(selectPolls);
  const accessToken = useSelector(selectAccessToken);

  console.log({ accessToken });

  if (!isUserLoggedIn) {
    return <Redirect to="/login" components={Login} />;
  }

  return (
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
  );
};

export default Polls;
