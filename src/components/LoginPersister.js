import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/actions/login";

const LoginPersister = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUserToken = localStorage.getItem("loggedInUserToken");
    const loggedInUserEmail = localStorage.getItem("loggedInUsernameOrEmail");
    console.log({ loggedInUserEmail });

    if (loggedInUserToken && loggedInUserEmail) {
      dispatch(userLoggedIn(loggedInUserEmail));
    }
  }, [dispatch]);

  return null;
};

export default LoginPersister;
