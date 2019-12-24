import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './common/app-navbar';
import Timeline from './timeline';
import Cart from './cart/index'
import "../utility/api"
import './index.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <AppNavbar></AppNavbar>
                    </div>
                    <Switch>
                        <Route exact path='/timeline' component={Timeline} />
                        <Route path='/cart' component={Cart} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;