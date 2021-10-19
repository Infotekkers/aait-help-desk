import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import Curriculum from "./pages/Curriculum";
import "./App.css";

const App = () => (
  <BrowserRouter>
    // TODO: NavBar
    <Switch>
      <Route path="/">
        <h1>TODO: Landing Page</h1>
      </Route>
  <Route path="/curriculum">
      <Curriculum />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
