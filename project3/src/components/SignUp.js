import React, { Component } from "react";
import {firebaseApp} from "../firebase";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

const signup = (email, password) => {
    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Added to Database");
            return true;
        })
        .catch(err => {
            console.log(err);
            return err;
    });
};

class SignUp extends Component {
    
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const result = signup(email, password);
    console.log(result);
  };

  render() {
      const {isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <Redirect to="/" />;
      } 
      else {
        return (
          <div>
              
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleEmailChange}
            >
            </TextField>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            >
            </TextField>
            
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
        </div>
      );
    }
    }
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

export default withStyles(styles)(connect(mapStateToProps)(SignUp));
