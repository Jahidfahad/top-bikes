import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart} = props
   let total = 0;
   for(const bike of cart){
       total = total + bike.price
   }
    return (
        <div className="cart">
        <h3>Bikes added: {props.cart.length}</h3>
        <h3>Total Price: {total} /= BDT</h3>
        </div>
    );
};

export default Cart;