import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import cart from 'cart.png'

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Product Timeline
                 </Navbar.Brand>
                </Navbar>
                <Navbar bg="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#cart">Cart</Nav.Link>
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