import React, { useContext, useState, useEffect } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false)
    const { items } = cartCtx
    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHighLighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300)

        return(()=>{
            clearTimeout(timer)
        })
    }, [items])


    return (
        <div>
            <button className={btnClasses} onClick={props.onCartClick}>
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
