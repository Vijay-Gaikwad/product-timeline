import React, { Component } from 'react';
import './timeline.css'

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
            <div class="timeline-container left">
                <div class="content">
                    <h2>2017</h2>
                    <p>Products</p>
                </div>
            </div>
            <div class="timeline-container right">
                <div class="content">
                    <h2>2016</h2>
                    <p>Products</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Timeline;