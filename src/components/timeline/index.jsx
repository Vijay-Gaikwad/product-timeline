import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import withContext from '../contextAPI/contextHOC'
import './index.css';
import Products from './products/index';
import AddProduct from './add-product/index';
import productsConstant from "../../constants/products.json"

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            products: productsConstant.products,
            disabled: true,
            show: false,
        }
    }

    handleProductQuantity(changedProduct) {
        this.setState({
            products: Object.assign(
                [],
                this.state.products,
                { changedProduct }
            )
        });
        localStorage.setItem('products', JSON.stringify(this.state.products));
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (

            <div className="timeline">
                <ButtonToolbar className="addButton">
                    <Button variant="primary" onClick={this.handleShow}>Add</Button>
                </ButtonToolbar>
                {
                    this.state.products.map((key, value) => {
                        return (
                            <div key={value}>
                                {(key.year % 2 !== 0) ? (
                                    <div className="timeline-container left">
                                        <div className="content">
                                            <h2>{key.year}</h2>
                                            <Products products={key} handleProductQuantity={this.handleProductQuantity} disabled={this.state.disabled}></Products>
                                        </div>
                                    </div>
                                ) : (<div className="timeline-container right">
                                    <div className="content">
                                        <h2>{key.year}</h2>
                                        <Products products={key} handleProductQuantity={this.handleProductQuantity} disabled={this.state.disabled}></Products>
                                    </div>
                                </div>
                                    )}
                            </div>
                        );
                    })
                }

                <div>
                <AddProduct show={this.state.show} handleClose={this.handleClose} products={this.state.products}></AddProduct>
                </div>
            </div>
        )
    }
}

export default withContext(Timeline);