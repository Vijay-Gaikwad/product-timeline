import React, { Component } from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import './index.css'
import _ from 'lodash';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
            checkoutButton: false
        }
    }
    async componentDidMount() {
        const productStorage = JSON.parse(localStorage.getItem("products"));
        await _.findChangedQuantity(productStorage);
        this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
        const quantity = await _.totalQuantity(this.state.cart);
        console.log(quantity);
        if (quantity%12 === 0) {
            this.setState({ checkoutButton: true });
        }
    }

    render() {
        console.log(this.state.cart);
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
                                                            <td>{`x ${item.quantity}`}</td>
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