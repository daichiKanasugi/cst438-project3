import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

<<<<<<< HEAD
import Create from './components/create.component.js'
import Create from './components/home.component.js'
=======
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
>>>>>>> ba75bf0157dc517421f8bac88d5b1cf089d44277

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);