import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './common/app-navbar';
import Timeline from './timeline';
import Cart from './cart/index'
import "../utility/api"
import './index.css';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity:0
        }
    }
    getProducts = () => {
        const products = JSON.parse(localStorage.getItem("products"));
        const quantity =  _.totalQuantity(products)
        this.setState({quantity});
    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <AppNavbar quantity={this.state.quantity}></AppNavbar>
                    </div>
                    <Switch>
                        <Route exact path='/timeline' component={() => <Timeline getProducts={this.getProducts}/>} />
                        <Route path='/cart' component={Cart} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;