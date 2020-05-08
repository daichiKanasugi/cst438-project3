import React, { Component } from "react";
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div class="showcase">
        <div class="showcase-top">
            <img src="./csumb_logo.png" alt="Otter"></img>
            <a class="btn btn-rounded">Sign In</a>
        </div>  
        <div class="showcase-content">
            <h1>OtterFeed</h1>
            <p>Kick Back. Relax. Grab a Six Pack.</p>
        </div>    
      </div>

      
    );
  }
}

export default Landing;