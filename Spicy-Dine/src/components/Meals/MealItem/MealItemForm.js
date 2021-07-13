import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value //this will give a string value 
        const enteredAmountNumber = +enteredAmount // this will converted to number

        if (enteredAmount.trim() === 0 ||
            enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber) //this will pass enteredAmount value to MealItem.js
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Amount'
                ref= {amountInputRef}
                input={{
                    
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>Add To Cart</button>
            {!amountIsValid && <p>Please Enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm
