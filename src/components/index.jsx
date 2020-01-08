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
            quantity:0,cart:{}
        }
    }

    getProducts = async (flag=false) => {
        let quantity = 0;
        const products = JSON.parse(localStorage.getItem("products"));
        const cart = JSON.parse(localStorage.getItem("cart"));
        if(flag){
             quantity = await _.totalQuantity(cart);
        }else{
             quantity = await _.totalQuantity(products);
        }
        this.setState({quantity, cart});
    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <AppNavbar quantity={this.state.quantity} cart={this.state.cart}></AppNavbar>
                    </div>
                    <Switch>
                        <Route exact path='/timeline' component={() => <Timeline getProducts={this.getProducts}/>} />
                        <Route path='/cart' component={()=><Cart getProducts={this.getProducts}></Cart>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;