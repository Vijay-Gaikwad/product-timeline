import React, { Component } from 'react';
import withContext from '../contextAPI/contextHOC'
import './timeline.css';
import Products from './products';
import productsConstant from "../../constants/constant.json"

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.state = {
            products: productsConstant.products,
            disabled: true
        }
    }

    componentDidMount() {
        console.log(this.props);
    }
    

    handleProductQuantity(changedProduct) {
        console.log(changedProduct);
        this.setState({
            products: Object.assign(
                [],
                this.state.products,
                { changedProduct }
            )
        });
    }

    render() {
        return (
            <div className="timeline">
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
            </div>

        )
    }
}

export default withContext(Timeline);