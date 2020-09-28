import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPoll from "./components/pages/AddPoll";
import Polls from "./components/pages/Polls";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

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
