import React from 'react';
import styles from './MealList.module.css';
import FullRecipeCard from '../FullRecipeCard';

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  console.log(mealData);

  return (
    <div>
      <section className={styles.nutrientsContainer}>
        <h1>Macros</h1>
        <div className={styles.nutrientList}>
          <div className={styles.listItem}>
            <li>Calories: {nutrients.calories.toFixed(0)}</li>
          </div>
          <div className={styles.listItem}>
            <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          </div>
          <div className={styles.listItem}>
            <li>Fat: {nutrients.fat.toFixed(0)}</li>
          </div>
          <div className={styles.listItem}>
            <li>Protein: {nutrients.protein.toFixed(0)}</li>
          </div>
        </div>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <FullRecipeCard key={meal.id} meal={meal} />;
        })}
      </section>
    </div>
  );
}
