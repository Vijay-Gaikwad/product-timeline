import React from 'react';
import './products.css';
import productImage from "../../../assets/images/placeholder-product.png"; // Tell Webpack this JS file uses this image
import { ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';


function Products(props) {
  return (
    <div className="product-container">
      <div className="box">
        <img className="product-image" src={productImage} alt="Product"></img>
        <ButtonToolbar>
          <Button className="plus-button" variant="outline-primary" size="sm">+</Button>
          <Button className="minus-button" variant="outline-primary" size="sm">-</Button>
        </ButtonToolbar>
        <InputGroup className="product-quantity mb-3">
          <FormControl
            placeholder="Qty"
          />
        </InputGroup>
      </div>
      <div className="box">
        <img className="product-image" src={productImage} alt="Product"></img>
        <ButtonToolbar>
          <Button className="plus-button" variant="outline-primary" size="sm">+</Button>
          <Button className="minus-button" variant="outline-primary" size="sm">-</Button>
        </ButtonToolbar>
        <InputGroup className="product-quantity mb-3">
          <FormControl
            placeholder="Qty"
          />
        </InputGroup>
      </div>
      <div className="box">
        <img className="product-image" src={productImage} alt="Product"></img>
        <ButtonToolbar>
          <Button className="plus-button" variant="outline-primary" size="sm">+</Button>
          <Button className="minus-button" variant="outline-primary" size="sm">-</Button>
        </ButtonToolbar>
        <InputGroup className="product-quantity mb-3">
          <FormControl
            placeholder="Qty"
          />
        </InputGroup>
      </div>
      <div className="box">
        <img className="product-image" src={productImage} alt="Product"></img>
        <ButtonToolbar>
          <Button className="plus-button" variant="outline-primary" size="sm">+</Button>
          <Button className="minus-button" variant="outline-primary" size="sm">-</Button>
        </ButtonToolbar>
        <InputGroup className="product-quantity mb-3">
          <FormControl
            placeholder="Qty"
          />
        </InputGroup>
      </div>
    </div>
  )
}

export default Products;

