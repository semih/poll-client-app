import React from "react";
import { Nav } from "react-bootstrap";

export default function Header(props) {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Hoşgeldiniz <b>{props.usernameOrEmail}</b>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/login">Çıkış</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
