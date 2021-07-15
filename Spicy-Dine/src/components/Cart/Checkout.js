import React,{useRef, useState} from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === ''
const isFiveChars = (value) => value.trim().length === 5


const Checkout = (props) => {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()


    
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredCity)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)

        setFormInputsValidity({
            name:enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name' >Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p style={{ color: 'red' }}>Insert a proper name</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='street' >Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!formInputsValidity.street && <p style={{ color: 'red' }}>Insert proper street name</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef}/>
                {!formInputsValidity.postalCode && <p style={{ color: 'red' }}>Insert proper postal code</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p style={{ color: 'red' }}>Insert proper city name</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;