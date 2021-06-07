import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealIteam/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Hydrabadi Dum Biriyani',
        description: 'Finest chicken with Biriyani',
        price: 250,
    },
    {
        id: 'm2',
        name: 'Spicy Platter',
        description: 'A german specialty! Spicy chicken with fried rice with german veggi',
        price: 320,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 280,
    },
    {
        id: 'm4',
        name: 'Rice Bowl',
        description: 'Healthy...and green...and spicy',
        price: 185,
    },
];




const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => 
    (<MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description}
    price={meal.price}
     />))
    return (
       <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
       </section>
        
    )
}

export default AvailableMeals
