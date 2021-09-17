import React from "react";
import classes from "./MealsAvailable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dum Gosht Biryani",
    description: "The Pakistani celebrated dish of basmati rice and mutton united with fragrant spices and garden fresh herbs",
    price: 850,
  },
  {
    id: "m2",
    name: "Murgh Mughlai Biryani",
    description: "Influenced by the imperial kitchens of the Mughul empire, basmati rice cooked together with chicken in an affluent gravy of aromatic spices and fresh herbs",
    price: 850,
  },
  {
    id: "m3",
    name: "Bhuna Gosht",
    description: "Boneless mutton cubes cooked with onions, tomatoes, local spices and finished with black pepper",
    price: 1095,
  },
  {
    id: "m4",
    name: "Chicken Karahi",
    description: "An iconic Pakistani dish of chicken cooked on bone in traditional style tomato gravy seasoned with green chilies and black pepper",
    price: 850,
  },
];
const MealsAvailable = () => {
  const MealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default MealsAvailable;
