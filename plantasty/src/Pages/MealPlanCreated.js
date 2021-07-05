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

  // this creates errors I don't know what to do T_T
  // useEffect(() => {
  //   fetch(
  //     'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan'
  //   )
  //     .then((response) => response.json())
  //     .then((mealDataArray) => {
  //       const meals = mealDataArray.meals; // get meals data from JSON
  //       const recipeTitles = meals.map((meal) => {
  //         return meal.title;
  //       });
  //       setMealData(recipeTitles);
  //     });
  // }, []);

  function getMealPlan() {
    fetch(`${TaniaAPI}`)
      .then((response) => response.json())
      .then((mealDataArray) => {
        const meals = mealDataArray.meals;
        console.log(meals);
        const recipeTitles = meals.map((meal) => {
          return meal.title;
        });
        console.log(recipeTitles);
        setMealData(recipeTitles);
      });
    console.log('woohoo');
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {/* surely there is a better way to do this? */}
        <MiniRecipeCard text={mealData[0]} />
      </div>
      <div>
        <MiniRecipeCard text={mealData[1]} />
      </div>
      <div>
        <MiniRecipeCard text={mealData[2]} />
      </div>
      <button onClick={getMealPlan}>Help</button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
