import React from "react";
import ReactDOM from "react-dom";
import Projects from "./Projects";
import Menu from "home/Menu";

import "./styles/index.css";

const App = () => (
  <div className="container">
    <Menu useAbsolutePath />
    <Projects />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
