import React, {useEffect,useState} from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'



const AvailableMeals = () => {

    const [meals, setMeals] = useState([])

    useEffect(()=>{
        const fetchMeals = async () =>{
            const response = await fetch('https://meals-4e5a1-default-rtdb.firebaseio.com/meals.json')
            const responseData = await response.json()

            const loadMeals = []

            for(const key in responseData){
                loadMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadMeals)
        }

        fetchMeals()
    },[])

    const mealItems = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealItems}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals

