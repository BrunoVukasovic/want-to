import { LandingPage, Register, Login, Alert } from "./components";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Alert></Alert>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
