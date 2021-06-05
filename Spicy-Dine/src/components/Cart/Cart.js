import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: 'm2', name: 'Spicy Platter', price: 320 }].map((meal) => (
            <li>{meal.name}</li>
        ))}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>640 BDT.</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
