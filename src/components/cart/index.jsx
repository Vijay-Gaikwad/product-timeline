import React, { Component } from 'react';
import { Table, ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import './index.css'
import _ from 'lodash';

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

    render() {
        return (
            <div className="cart">
                <h1>Product Cart</h1>
                {
                    !_.isEmpty(this.state.cart) &&
                    this.state.cart.map((item, id) => {
                        return (
                            <div key={id}>
                                <Table striped bordered hover variant='light'>
                                    <thead>
                                        <tr>
                                            <th>{item.year}</th>
                                        </tr>
                                    </thead>
                                    {
                                        item.products.map((item, id) => {
                                            return (
                                                <Table key={id}
                                                ><tbody >
                                                        <tr>
                                                            <td>{item.title}</td>
                                                            <td> <InputGroup className="quantity">  X &nbsp;  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={item.quantity}/>

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