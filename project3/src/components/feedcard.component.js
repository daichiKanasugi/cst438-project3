import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component{    
    render() {
        return (
            <div className="n-card">
            <div className="story-list-item">
              <div className="image-thumbnail">
                <div className="user-image">
                <img src="#" alt="" className="icon-img"></img>
                </div>
              </div>
              <div className="user-title">
                <div>
                  Test
                </div>
                <div>
                  Time
                </div>
              </div>
            </div>
            <div>My new profile picture</div>
            <img className="n-card-img" alt=""></img>
            <div className="n-actions">
              <div>
                <div className="glyphicon glyphicon-thumbs-up" style={{marginRight:'10px'}}></div>Like
              </div>
              <div>
                <div className="glyphicon glyphicon-comment" style={{marginRight:'10px'}}></div>Comment
              </div>
              <div>
                <div className="glyphicon glyphicon-share-alt" style={{marginRight:'10px'}}></div>Share
              </div>
            </div>
        </div>
        );
    }

}