import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
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
  const welcomeText = "Hoşgeldiniz";
  const isAdmin = userAuthority === "ROLE_ADMIN";

  const adminMenu = isAdmin && (
    <Nav.Item>
      <Link to="/addPoll">Yeni Soru Ekle</Link>
    </Nav.Item>
  );

  console.log({ isAdmin });
  console.log({ isUserLoggedIn });
  console.log({ userAuthority });

  useEffect(() => {
    return adminMenu;
  }, [isAdmin]);

  return (
    <Navbar>
      {isUserLoggedIn && (
        <Navbar.Collapse className="justify-content-end">
          {adminMenu}
          <Navbar.Text>
            {welcomeText} <b>{usernameOrEmail}</b>
          </Navbar.Text>
          <Nav.Item>
            <Link to="/login"> Çıkış</Link>
          </Nav.Item>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
