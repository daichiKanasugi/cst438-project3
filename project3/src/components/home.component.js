import React, { Component } from 'react';
import axios from 'axios';
import Feed from './feed.component'

export default class Create extends Component{    
    render() {
        return (
            <div className="body-container">
          
            <div className="content">
              <Feed/>
            </div>
            
          </div>
        );
    }

}