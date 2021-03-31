import "./App.css";
import React from "react";
import Register from "./component/Register";
import Loginpage from "./component/Loginpage";
import Dashboard from "./component/Dashboard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Loginpage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
