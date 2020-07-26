import React from "react";
import Main from "./components/Main";
import Employees from "./components/Employees";
import Header from "./components/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (

    <main className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/" >
            <Main />
          </Route>
        </Switch>
      </Router>
    </main>

  );
}