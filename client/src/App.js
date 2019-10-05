import { LandingPage, Register, Login } from "./components";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default App;
