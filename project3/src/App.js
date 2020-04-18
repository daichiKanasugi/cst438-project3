import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from './components/create.component.js';
import Navbar from './components/navbar.component.js';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div className="container">
        <Route path="/" component={Create} />
      </div>
    </Router>
  );
}

export default App;
