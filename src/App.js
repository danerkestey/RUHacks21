import React from "react";
import "./App.css";
import Navbar from "./sidebar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
