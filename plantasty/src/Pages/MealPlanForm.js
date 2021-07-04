import React, { useState } from 'react';
import MealList from '../Components/MealList';

function MealPlanForm() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=ef968f4556ed4b3f880221d46d7bd1b9&timeFrame=day&targetCalories=${calories}&Diet=Vegan`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log('error');
      });
  }
  return (
    <div>
      <section className="controls">
        <input type="number" placeholder="Calories" onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Plan</button>
    </div>
  );
}

export default MealPlanForm;
