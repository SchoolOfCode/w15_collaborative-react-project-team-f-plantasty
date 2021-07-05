import React from 'react';
import styles from './MealList.module.css';
import FullRecipeCard from '../FullRecipeCard';

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  console.log(mealData);

  return (
    <div>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul className={styles}>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <FullRecipeCard key={meal.id} meal={meal} />;
        })}
      </section>
    </div>
  );
}
