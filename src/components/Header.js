import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  selectIsUserLoggedIn,
  selectUsernameOrEmail,
} from "../redux/accessors";
import { selectUserAuthority } from "../redux/accessors";

export default function Header() {
  const usernameOrEmail = useSelector(selectUsernameOrEmail);
  const userAuthority = useSelector(selectUserAuthority);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const welcome = "Hoşgeldiniz";
  console.log({ userAuthority });

  return (
    <Navbar>
      {isUserLoggedIn && (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {welcome} <b>{usernameOrEmail}</b>
          </Navbar.Text>
          <Nav.Item>
            <Nav.Link href="/login">Çıkış</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
