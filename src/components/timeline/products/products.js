import React, { Component } from 'react';
import './products.css';
import productImage from "../../../assets/images/placeholder-product.png"; // Tell Webpack this JS file uses this image
import { ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import productsConstant from "../../../constants/constant.json"
import _ from 'lodash';


class Products extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      product: [],
      button: {
        plus: 0,
        minus: 0
      },
      quantity: 0
    }
  }

  findProduct(year) {
    return [_.find(productsConstant.products, { 'year': year })];
  }

  handleButton(e) {
    const products = localStorage.getItem("productsStorage");
    console.log("products", JSON.parse(products));
    if (e.target.name === 'plus') {
      this.setState({
        quantity
          : this.state.quantity + 1
      })
    } else {
      if (e.target.name === 'minus' || this.state.quantity !== 0)
        this.setState({
          quantity
            : this.state.quantity - 1
        })
    }
  }

  componentDidMount() {
    this.setState({ product: this.findProduct(this.props.year) });
  }

  render() {
    return (
      <div className="product-container">
        {(this.state.product[0] && !_.isUndefined(this.state.product[0].products) ) && (
          this.state.product[0].products.map((item, id) => {
            return (<div className="box" key={id}>
              <img className="product-image" src={productImage} alt="Product"></img>
              <h6>{item.title}</h6>
              <ButtonToolbar>
                <Button className="plus-button" name="plus" variant="outline-primary" size="sm" onClick={this.handleButton}>+</Button>
                <Button className="minus-button" variant="outline-primary" size="sm" onClick={this.handleButton}>-</Button>
              </ButtonToolbar>
              <InputGroup className="product-quantity mb-3">
                <FormControl
                  placeholder="Qty"
                  value={this.state.quantity}
                  disabled
                />
              </InputGroup>
            </div>
            )
          })
        )
        }
      </div>
    );
  }
}

export default Products;

