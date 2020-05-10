import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div class="showcase">
        <div class="showcase-top">
            {/* <a class="btn btn-rounded">Sign In</a> */}
            <Link to="login">
                <Button class="btn btn-rounded">
                    <p>Sign In</p>
                </Button>
            </Link>
        </div>  
        <div class="showcase-content">
            <h1>OtterFeed</h1>
            <p>Kick Back. Relax. Have a blast.</p>
        </div>    
      </div>
      
    );
  }
}

export default Landing;