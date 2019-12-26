import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './index.css'
import _ from 'lodash';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {}
        }
    }
    async componentDidMount() {
        const productStorage = JSON.parse(localStorage.getItem("products"));
        await _.findChangedQuantity(productStorage);
        this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
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
            </div>
        );
    }
}

export default Cart;