import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../redux/actions/getPolls";
import { selectPolls } from "../redux/accessors";
import Button from "react-bootstrap/Button";

const Polls = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPolls());
    return () => {};
  }, [dispatch]);

  const polls = useSelector(selectPolls);

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
