import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../../redux/actions/getPolls";
import { selectPolls } from "../../redux/accessors";
import Pagination from "react-bootstrap/Pagination";
import Poll from "../Poll";
import usePagination from "../../pagination/usePagination";
import Button from "react-bootstrap/Button";

const Polls = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  let itemsPerPage = 100;

  useEffect(() => {
    dispatch(getPolls());
    return () => {};
  }, [dispatch]);

  const polls = useSelector(selectPolls);
  const pagination = usePagination(polls, itemsPerPage);

  let items = [];
  for (let number = 1; number <= pagination.maxPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
    );
  }

  const handlePageChange = (event) => {
    const pageNumber = parseInt(event.target.text);
    setActivePage(pageNumber);
    pagination.jump(pageNumber);
  };

  return (
    <Container className="my-5">
      <div className="my-2">
        <Button href="/addPoll" variant="primary" size="lg">
          Yeni Ekle
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>İngilizce Söz</th>
            <th>Türkçe Karşılığı</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pagination.currentData().map((poll) => (
            <Poll key={poll.proverbsId} {...poll} />
          ))}
        </tbody>
      </Table>

      <Pagination size="sm" onClick={handlePageChange}>
        {items}
      </Pagination>
    </Container>
  );
};

export default Polls;
