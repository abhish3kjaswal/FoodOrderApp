import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Meals from './Meals';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS && DUMMY_MEALS.length && DUMMY_MEALS.map((meal, i) => (
        // <li key={meal.id}>
        //     {meal.name}
        // </li>
        <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    ))

    return <>
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>

        </section>
    </>
}

export default AvailableMeals