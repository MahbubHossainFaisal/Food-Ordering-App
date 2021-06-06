import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)
    return (
        <div>
            <button className={classes.button} onClick={props.onCartClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span >Show Cart</span>
                <span className={classes.badge}> {numberOfCartItems}   </span>
            </button>
        </div>
    )
}

export default HeaderCartButton
