import React from 'react'
import classes from './MealSummary.module.css'

const MealSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>You will be served delicious cuisine.</h2>
            <p>
                Grab your favorite meal from our extensive list of options
                and prepare a delightful lunch or dinner at home.
            </p>
            <p>
                All of our meals are prepared with high-quality ingredients,
                on time, and by professional chefs.
            </p>
            <p>Simply place an order and enjoy one of Spicy Dine's delectable dishes.</p>
        </section>
    )
}

export default MealSummary