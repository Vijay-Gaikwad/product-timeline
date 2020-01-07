import React from 'react';
import './index.css';
import productImage from "../../../assets/images/placeholder-product.png"; // Tell Webpack this JS file uses this image
import { ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import _ from 'lodash';

function Products(props) {
  const handleButton = (event, id, operatorFlag) => {
      const changedProduct = _.changeProductsQuantity(id, props.products, operatorFlag);
      props.handleProductQuantity(changedProduct);
  }

  return (
    <div className="product-container">
      {
        props.products.products.map((item, id) => {
          return (
            <div className="box" key={id}>
              <img className="product-image" src={productImage} alt="Product"></img>
              <h6>{item.title}</h6>
              <ButtonToolbar>
                <Button className="plus-button" name="add" variant="outline-primary" size="sm" onClick={event => handleButton(event, id, 0)}>+</Button>
                <Button className="minus-button" name="remove" variant="outline-primary"  size="sm" onClick={event => handleButton(event, id, 1)}>-</Button>
              </ButtonToolbar>
              <InputGroup className="product-quantity mb-3">
                <FormControl
                  value={item.quantity}
                  disabled
                />
              </InputGroup>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products;

