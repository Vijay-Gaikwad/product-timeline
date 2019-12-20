import React, { Component } from 'react';
import AppNavbar from './app-navbar/app-navbar';
import Timeline from './timeline/timeline';
import './app.css';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <AppNavbar></AppNavbar>
                </div>
                <div class="timeline">
                    <Timeline></Timeline>
                </div>
            </div>
        );
    }
}

export default App;