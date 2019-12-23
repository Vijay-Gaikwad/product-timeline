import React, { useState, useEffect } from 'react';
import './products.css';
import productImage from "../../../assets/images/placeholder-product.png"; // Tell Webpack this JS file uses this image
import { ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import productsConstant from "../../../constants/constant.json"
import _ from 'lodash';


function Products(props) {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  
  useEffect(() => {
    const products = findProduct(props.year);
    setProduct(products);
  }, [props])

  const handleButton = (e, quantity, setQuantity) => {
    if (e.target.name === 'plus') {
      setQuantity(quantity+1);
    } else {
      if (e.target.name === 'minus' || quantity !== 0)
        setQuantity(quantity-1);
    }
  }
  
  const findProduct = (year) => {
    return [_.find(productsConstant.products, { 'year': year })];
  }

  return (
    <div className="product-container">
      {(product[0] && !_.isUndefined(product[0].products)) && (
        product[0].products.map((item, id) => {
          return (<div className="box" key={id}>
            <img className="product-image" src={productImage} alt="Product"></img>
            <h6>{item.title}</h6>
            <ButtonToolbar>
              <Button className="plus-button" name="plus" variant="outline-primary" size="sm" onClick={(e) => handleButton(e,quantity, setQuantity)}>+</Button>
              <Button className="minus-button" variant="outline-primary" size="sm" onClick={(e) => handleButton(e,quantity,setQuantity)}>-</Button>
            </ButtonToolbar>
            <InputGroup className="product-quantity mb-3">
              <FormControl
                value={quantity}
                disabled
              />
            </InputGroup>
          </div>
          )
        })
      )
      }
    </div>
  )
}

export default Products;

