import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import cart from "../../../assets/images/cart.png"; // Tell Webpack this JS file uses this image
import logo from '../../../assets/images/logo.png'

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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
                        <Nav.Link href="/timeline" active>Timeline</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <img
                            src={cart}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="cart logo"
                        />              
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;