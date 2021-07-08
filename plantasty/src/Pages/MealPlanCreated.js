import React, { useState } from 'react';
import MealList from '../Components/MealList';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import CaloriesInput from '../Components/CaloriesInput';
import styles from '../Components/FullRecipeCard/RecipeCard.module.css';
import style from '../Components/TextButton/button.module.css';
// import { Link } from 'react-router-dom';

function MealPlanForm() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  //   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  //   const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';

  function handleChange(number) {
    setCalories(number);
  }

  const sentAllergies = 'Egg'; // want this to be from "createMealPlan page"
  //let workingURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${AlinaAPI2}&timeFrame=day&targetCalories=${calories}&Diet=Vegan`;
  let testURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${AlinaAPI2}&timeFrame=day&targetCalories=${calories}&Diet=Vegan&excluded=${sentAllergies}`;

  function getMealData() {
    fetch(testURL)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
        console.log(testURL);
      })
      .catch(() => {
        console.log('error');
      });
  }
  return (
    <div className="MealPlanCreated">
      <div>
        <Navbar />
      </div>

      <section className={styles.recipeContainer}>
        <CaloriesInput handleChange={handleChange} />
      </section>

      <button className={style.textButton} onClick={getMealData}>
        Get Daily meal plan
      </button>
      {mealData && <MealList mealData={mealData} />}

      {/* <div>
        <Link to="/createPlan/q1">
          <button type="button">Start</button>
        </Link>
      </div> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanForm;
