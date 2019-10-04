import { LandingPage } from "./components";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LandingPage}></Route>
    </Fragment>
  </Router>
);

export default App;
