import React, { useState, useEffect } from 'react';
import { Overlay, Popover, Table, ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';
import _ from 'lodash';
import './index.css'

function CartToolbar(props) {
    const [cart, setCart] = useState({})
    useEffect(async () => {
        const productStorage = JSON.parse(localStorage.getItem("products"));
        await _.findChangedQuantity(productStorage);
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, []);
    return (
        <Overlay
            show={props.show}
            placement="bottom"
            trigger="click"
            target={props.target}
            containerPadding={20}
        >
            <Popover className="overlay" id="popover-contained">
                <Popover.Title as="h3">Cart</Popover.Title>
                <Popover.Content>
                    <div className="cart">
                        {
                            !_.isEmpty(cart) &&
                            cart.map((product, id) => {
                                console.log(product)
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
                                                                    <td>x {item.quantity}</td>
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
                </Popover.Content>
            </Popover>
        </Overlay>
    );
}

export default CartToolbar;