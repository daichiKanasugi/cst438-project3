import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from './components/create.component.js'
import Create from './components/home.component.js'

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Create} />
      </div>
    </Router>
  );
}

export default App;
