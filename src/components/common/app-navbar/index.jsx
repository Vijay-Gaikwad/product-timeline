import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import cart from "../../../assets/images/cart.png"; // Tell Webpack this JS file uses this image
import logo from '../../../assets/images/logo.png'
import CartToolbar from './cart-toolbar';
import './index.css'

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            target: {}
        }
    }

    handleClick = event => {
        this.setState({ showCart: !this.state.showCart, target: event.target });
    };

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="cart logo"
                        />
                        Product Timeline
                 </Navbar.Brand>
                </Navbar>
                <Navbar bg="light">
                    <Nav className="mr-auto">
                        <Link to='/timeline'>Timeline</Link>&nbsp;&nbsp;
                        <Link to='/cart'>Cart</Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <span className="notification">
                            <img
                                src={cart}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="cart logo"
                                onClick={this.handleClick}
                            />
                            <span className="badge">{this.props.quantity}</span>
                        </span>
                    </Nav>
                    <div>
                        {this.state.showCart && <CartToolbar show={this.state.showCart} targer={this.state.target} products={this.props.cart}></CartToolbar>}
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;