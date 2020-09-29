import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPoll from "./pages/AddPoll";
import Polls from "./pages/Polls";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/polls">
          <Polls />
        </Route>
        <Route path="/addpoll">
          <AddPoll />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
