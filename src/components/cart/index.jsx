import React from 'react';
import './index.css'

function Cart(props) {
    return (
        <div className="cart">
            <h1>cart</h1>
            <table border="1">
                <tr><h3>2001</h3></tr>
                <tr>
                    <div>
                        <h5>vijay * 12</h5>
                    </div>
                </tr>
            </table>
        </div>
    )
}

export default Cart;