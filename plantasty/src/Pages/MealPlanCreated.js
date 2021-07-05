import { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import MiniRecipeCard from '../Components/MiniRecipeCard';

const AlinaAPI =
  'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan';
const TaniaAPI =
  'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan';

function MealPlanCreated() {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    fetch(`${TaniaAPI}`)
      .then((response) => response.json())
      .then((mealDataArray) => {
        // mealDataArray includes both meals array and nutrition array
        const meals = mealDataArray.meals; // just get the meals
        console.log('meals received:', meals);
        setMealData(meals);
      });
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {mealData.map((meal) => (
          <MiniRecipeCard text={meal.title} key={meal.id} />
        ))}
        ;
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
