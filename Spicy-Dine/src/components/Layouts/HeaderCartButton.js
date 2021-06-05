import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.onCartClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span >Show Cart</span>
                <span className={classes.badge}>3</span>
            </button>
        </div>
    )
}

export default HeaderCartButton
