import { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import MiniRecipeCard from '../Components/MiniRecipeCard';

const AlinaAPI =
  'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan';
const TaniaAPI =
  'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan';
const TomAPI =
  'https://api.spoonacular.com/mealplanner/generate?apiKey=5b5269dd70b849018665136bf0eb41c9&timeFrame=day&targetCalories=2000&Diet=Vegan';

function MealPlanCreated() {
  const [mealData, setMealData] = useState([]);
  // look up at redux reducer for possible future use

  useEffect(() => {
    fetch(`${TomAPI}`)
      .then((response) => response.json())
      .then((mealDataArray) => {
        const meals = mealDataArray.meals; // just get the meals
        console.log('three meals received:', meals);
        setMealData(meals);
      });
  }, []); // warning: leave dependency array empty. If set to mealData it will rerender MANY TIMES!!

  const mealsLoaded = mealData.length > 0;

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {mealsLoaded ? (
          mealData.map((meal) => (
            <MiniRecipeCard text={meal.title} key={meal.id} />
          ))
        ) : (
          <h1>'loading'</h1>
        )}
        ;
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
