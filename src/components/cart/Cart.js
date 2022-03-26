import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    console.log(product);
    return (
        <div>
            <h4>{product}</h4>
        </div>
    );
};

export default Cart;