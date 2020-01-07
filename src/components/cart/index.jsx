import React, { Component } from 'react';
import { Table, ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import _ from 'lodash';
import './index.css'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: Object,
            checkoutButton: true
        }
    }
    async componentDidMount() {
        const productStorage = JSON.parse(localStorage.getItem("products"));
        await _.findChangedQuantity(productStorage);
        const cart = JSON.parse(localStorage.getItem("cart"));
        const quantity = await _.totalQuantity(cart);
        console.log(quantity);
        if (_.isEqual(quantity%12, 0)) {
            this.setState({ cart, checkoutButton: false });
        } else {
            this.setState({ cart, checkoutButton: true });
        }
    }
    inputChangeHandler = (e, item) => {
        if(e.target.value || item){
            const products = JSON.parse(localStorage.getItem("cart"));
            console.log(products);

            const index = _.findIndex(products, {year:item.year});
            console.log(index);
            products.splice(index, 1, item);
            // localStorage.setItem('products', JSON.stringify(this.state.products));
            // this.props.getProducts();
console.log(products);
console.log(item);
        }
    }
    render() {
        return (
            <div className="cart">
                <h1>Product Cart</h1>
                {
                    !_.isEmpty(this.state.cart) &&
                    this.state.cart.map((product, id) => {
                        return (
                            <div key={id}>
                                <Table striped bordered hover variant='light'>
                                    <thead>
                                        <tr>
                                            <th>{product.year}</th>
                                        </tr>
                                    </thead>
                                    {
                                        product.products.map((item, id) => {
                                            return (
                                                <Table key={id}
                                                ><tbody >
                                                        <tr>
                                                            <td>{item.title}</td>
                                                            <td>
                                                                 <InputGroup className="quantity"> 
                                                                  x &nbsp;  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" defaultValue={item.quantity} onChange={e => {this.inputChangeHandler(e, item)}}/>
                                                                 </InputGroup></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            )
                                        })
                                    }
                                </Table>
                            </div>)
                    })

                }
                <div className="checkoutButton">
                    <ButtonToolbar>
                        <Button variant="warning" disabled={this.state.checkoutButton}>Checkout</Button>
                    </ButtonToolbar>
                </div>
            </div>

        );
    }
}

export default Cart;