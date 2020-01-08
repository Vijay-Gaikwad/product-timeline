import React, { useState, useEffect } from 'react';
import { Overlay, Popover, Table } from 'react-bootstrap';
import _ from 'lodash';
import './index.css'

function CartToolbar(props) {
    const [cart, setCart] = useState({})

    const getCart = async (products) => {
        await _.findChangedQuantity(products);
        setCart(JSON.parse(localStorage.getItem("cart")));
    }

    useEffect(() => {
        const productStorage = JSON.parse(localStorage.getItem("products"));
        getCart(productStorage)
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
                            !_.isEmpty(cart) ?
                            cart.map((product, id) => {
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
                                                        <tbody key={id}>
                                                            <tr>
                                                                <td>{item.title}</td>
                                                                <td>x {item.quantity}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </Table>
                                    </div>)
                            }):<h5>Empty cart</h5>
                        }
                    </div>
                </Popover.Content>
            </Popover>
        </Overlay>
    );
}

export default CartToolbar;