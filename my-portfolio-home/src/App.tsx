import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Menu from 'modules/Menu';
import Home from 'modules/Home';
import { ErrorBoundary } from 'common';

import Projects from "modules/Projects";
import Educations from "modules/Educations";

import './styles/index.css';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Menu useAbsolutePath={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary >
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
