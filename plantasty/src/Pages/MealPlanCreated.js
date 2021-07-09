import React, { useEffect, useState } from 'react';
import MealList from '../Components/MealList';
// import styles from '../Components/FullRecipeCard/RecipeCard.module.css';

// import style from '../Components/TextButton/button.module.css';
import Loading from '../Components/Loading';
function MealPlanForm(props) {
  const [mealData, setMealData] = useState(null);

  //   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  //const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';

  let testURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${TomAPI}&timeFrame=day&targetCalories=${props.calorie}&Diet=${props.diet[0]}&excluded=${props.allergy[0]}`;

  useEffect(() => {
    function getMealData() {
      fetch(testURL)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setMealData(data);
          }, 2000);
          console.log(data);
          console.log(testURL);
        })
        .catch(() => {
          console.log('error');
        });
    }
    getMealData();
  }, [testURL]);

  return (
    <div className="MealPlanCreated">
      {mealData != null ? <MealList mealData={mealData} /> : <Loading />}
    </div>
  );
}

export default MealPlanForm;

// function and button way
// function way
// function getMealData() {
//   fetch(testURL)
//     .then((response) => response.json())
//     .then((data) => {
//       setMealData(data);
//       console.log(data);
//       console.log(testURL);
//     })
//     .catch(() => {
//       console.log('error');
//     });
// }

/* {mealData && <MealList mealData={mealData} />} */

// <button className={style.textButton} onClick={getMealData}>
//     Get Daily meal plan
//   </button>
