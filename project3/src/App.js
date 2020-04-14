import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from 'createaccount.component.js'

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Create} />
      </div>
    </Router>
  );
}

export default App;
