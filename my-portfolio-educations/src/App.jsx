import React from "react";
import ReactDOM from "react-dom";
import Menu from "home/Menu";
import Educations from "./Educations";

import "./styles/index.css";

const App = () => (
  <div className="container">
    <Menu />
    <Educations />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
