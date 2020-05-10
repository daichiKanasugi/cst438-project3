import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from 'firebase';
import { Link } from "react-router-dom";
import {auth, db} from "../firebase";
import { firebaseApp } from "../firebase";

class Account extends Component {

constructor() {
    super()

    this.app = firebaseApp;
    const userId = firebase.auth().currentUser.uid;
    this.database = this.app.database().ref('/users/'+userId).child('firstName');

    this.state = {
        firstName: ''
    }
}

componentDidMount() {
    this.database.on('value', snap=> {
        this.setState({
            firstName: snap.val()
        });
    });
}

    render() {   
        
        return (
        <div>
            <h1>Account Info</h1>
            <p>Welcome</p>
            <p>the first name is {this.state.firstName}</p>
            <p><Link to="edit">Edit Account</Link></p>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Account);