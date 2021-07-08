import React, { useEffect, useState } from 'react';
import MealList from '../Components/MealList';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import styles from '../Components/FullRecipeCard/RecipeCard.module.css';

import style from '../Components/TextButton/button.module.css';
function MealPlanForm(props) {
  const [mealData, setMealData] = useState(null);

  //   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  //const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';

  let testURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${TomAPI}&timeFrame=day&targetCalories=${props.calorie}&Diet=Vegan&excluded=${props.allergy[0]}`;

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
      {mealData != null ? <MealList mealData={mealData} /> : <h1>LOADING</h1>}

      <button className={style.textButton} onClick={getMealData}>
        Get Daily meal plan
      </button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanForm;

// Don't delete please //
// useEffect(() => {
//   function getMealData() {
//     fetch(testURL)
//       .then((response) => response.json())
//       .then((data) => {
//         setMealData(data);
//         console.log(data);
//         console.log(testURL);
//       })
//       .catch(() => {
//         console.log('error');
//       });
//   }
//   getMealData();
// }, [testURL]);
{
  /* {mealData && <MealList mealData={mealData} />} */
}
