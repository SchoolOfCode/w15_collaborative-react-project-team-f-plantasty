// url  /created
// can navigate to recipe page to view full recipe - API call
import { useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import MiniRecipeCard from '../Components/MiniRecipeCard';

// Toms plan ideas:
// get api key and save in variable
// do the fetch request in a function

function MealPlanCreated() {
  const [mealData, setMealData] = useState('');

  function getMealPlan() {
    fetch(
      'https://api.spoonacular.com/mealplanner/generate?apiKey=11cf2295cd61422389f3a0b5611fcb30&timeFrame=day&targetCalories=2000&Diet=Vegan'
    )
      .then((response) => response.json())
      .then((data) => setMealData(data.meals[0].title));
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <MiniRecipeCard text={mealData} />
      </div>
      <div>
        <MiniRecipeCard />
      </div>
      <div>
        <MiniRecipeCard />
      </div>
      <button onClick={getMealPlan}>Help</button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
