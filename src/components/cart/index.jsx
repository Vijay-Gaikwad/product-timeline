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
        if (_.isEqual(quantity % 12, 0)) {
            this.setState({ cart, checkoutButton: false });
        } else {
            this.setState({ cart, checkoutButton: true });
        }
    }
    inputChangeHandler = async (e, item, year) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart || e.target.value || item) {
            const yearIndex = _.findIndex(cart, { year });
            const index = _.findIndex(cart[yearIndex].products, { "title": item.title });
            item.quantity = parseInt(e.target.value);
            cart[yearIndex].products[index] = item;
            const quantity = await _.totalQuantity(cart);
            if (_.isEqual(quantity % 12, 0)) {
                this.setState({ cart, checkoutButton: false });
            } else {
                this.setState({ cart, checkoutButton: true });
            }
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
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
                                                <tbody key={id} >
                                                    <tr>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <InputGroup className="quantity">
                                                                x &nbsp;  <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" defaultValue={item.quantity} onChange={e => { this.inputChangeHandler(e, item, product.year) }} />
                                                            </InputGroup></td>
                                                    </tr>
                                                </tbody>
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