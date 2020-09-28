import React from "react";
import "./App.css";
import Routes from "./Routes";
import LoginPersister from "./components/LoginPersister";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <LoginPersister />
      <Routes />
    </Provider>
  );
}

export default App;
