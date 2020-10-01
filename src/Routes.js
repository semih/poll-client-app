import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPoll from "./pages/AddPoll";
import Polls from "./pages/Polls";
import Login from "./pages/Login";
import Error from "./pages/Error";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Polls} exact>
          <Polls />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addpoll">
          <AddPoll />
        </Route>
        <Route path="/polls">
          <Polls />
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
