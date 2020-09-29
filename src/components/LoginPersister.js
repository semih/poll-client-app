import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/actions/login";

const LoginPersister = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUserToken = localStorage.getItem("loggedInUserToken");
    const loggedInUserName = localStorage.getItem("loggedInUsernameOrEmail");

    if (loggedInUserToken && loggedInUserName) {
      dispatch(userLoggedIn(loggedInUserName));
    }
  }, [dispatch]);

  return null;
};

export default LoginPersister;
