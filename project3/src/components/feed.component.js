import React, { Component } from 'react';
import axios from 'axios';
import FeedCard from './feedcard.component'

export default class Create extends Component{    
    render() {
        return (
            <div className="content-timeline">
                <div className="n-post-card">
                <span>Compose Post</span>
                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <button className="btn btn-primary" type="button">
                    Post 
                </button>
            </div>

            <FeedCard/>
            <FeedCard/>
            <FeedCard/>

            </div>
        );
    }

}