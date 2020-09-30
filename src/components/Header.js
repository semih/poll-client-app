import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUsernameOrEmail } from "../redux/accessors";

export default function Header() {
  const usernameOrEmail = useSelector(selectUsernameOrEmail);
  const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

  console.log({ loggedInUserEmail });

  return (
    <Navbar>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Hoşgeldiniz: <b>{usernameOrEmail}</b>
        </Navbar.Text>
        <Nav.Item>
          <Nav.Link href="/login">Çıkış</Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
}
