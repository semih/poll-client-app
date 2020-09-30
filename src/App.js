import React from "react";
import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPersister from "./components/LoginPersister";

function App() {
  return (
    <Provider store={store}>
      <LoginPersister />
      <Routes />
    </Provider>
  );
}

export default App;
