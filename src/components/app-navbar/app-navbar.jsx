import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

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
            </div>
        );
    }
}

export default AppNavbar;