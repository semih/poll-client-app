import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectIsUserLoggedIn } from "../redux/accessors";
import Login from "./Login";

export default function Home() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  if (!isUserLoggedIn) {
    return <Redirect to="/login" components={Login} />;
  }

  return <div>deneme</div>;
}
