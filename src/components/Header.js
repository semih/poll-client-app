import React from "react";
import { Col, Nav, Navbar, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectIsUserLoggedIn,
  selectUsernameOrEmail,
} from "../redux/accessors";
import { selectUserAuthority } from "../redux/accessors";

export default function Header() {
  const usernameOrEmail = useSelector(selectUsernameOrEmail);
  const userAuthority = useSelector(selectUserAuthority);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const welcomeText = "kullanıcısı ile giriş yapıldı.";
  const isAdmin = userAuthority === "ROLE_ADMIN";

  const adminMenu = isAdmin && (
    <Nav className="mr-auto" as="ul">
      <Link className="ml-1 mr-4" as="li" to="/addPoll">
        Yeni Soru Ekle
      </Link>
      <Link as="li" className="nav-item" to="/polls">
        Soruları Düzenle
      </Link>
    </Nav>
  );

  return (
    <Table>
      <Row>
        <Col></Col>
        <Col sm={10}>
          <Navbar>
            {isUserLoggedIn && (
              <Navbar.Collapse className="justify-content-end">
                {adminMenu}
                <Navbar.Text>
                  <b>{usernameOrEmail}</b> {welcomeText}
                </Navbar.Text>
                <Nav.Item>
                  <Nav.Link href="/login">Çıkış</Nav.Link>
                </Nav.Item>
              </Navbar.Collapse>
            )}
          </Navbar>
        </Col>
        <Col></Col>
      </Row>
    </Table>
  );
}
