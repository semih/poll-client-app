import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsUserLoggedIn,
  selectUserAuthorities,
} from "../redux/accessors";
import { userLoggedIn } from "../redux/actions/login";
import { getData, postData } from "../utils/helpers";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginButton from "../components/LoginButton";
import LoginErrorBar from "../components/LoginErrorBar";
import { Redirect, Route } from "react-router-dom";
import AddPoll from "./AddPoll";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isErred, setErred] = useState(false);

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userAuthorities = useSelector(selectUserAuthorities);

  async function handleSubmitLogin(e) {
    e.preventDefault();
    setErred(false);
    setLoading(true);

    const response = await postData("http://localhost:8181/api/auth/signin", {
      usernameOrEmail,
      password,
    });

    if (response.accessToken) {
      let accessToken = response.accessToken;
      await getData(
        "http://localhost:8181/api/user/me",
        accessToken
      ).then((data) =>
        dispatch(userLoggedIn(usernameOrEmail, data.authorities))
      );
      setLoading(false);
      if (response) {
        setErred(true);
      }
    }
  }

  if (isUserLoggedIn && userAuthorities[0].authority === "ROLE_USER") {
    return <Redirect to="/polls" />;
  } else if (isUserLoggedIn && userAuthorities[0].authority === "ROLE_ADMIN") {
    return <Redirect to="/addPoll" />;
  }

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmitLogin}>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <Form.Group controlId="formBasicUserName">
              <Form.Label>
                <b>Kullanıcı Adı</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Kullanıcı Adı"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <b>Parola</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Parola"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2 mb-4">
          <Col xs={12} md={4} className="mx-auto">
            <LoginButton
              disabled={isLoading || usernameOrEmail === "" || password === ""}
            >
              Giriş Yap
            </LoginButton>
          </Col>
        </Row>
      </Form>
      <Container>{isErred && <LoginErrorBar />}</Container>
    </Container>
  );
}
