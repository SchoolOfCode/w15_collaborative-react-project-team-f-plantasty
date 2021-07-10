import React, { useEffect, useState } from 'react';
import MealList from '../Components/MealList';
import Calendar from '../Components/Calendar';
// import styles from '../Components/FullRecipeCard/RecipeCard.module.css';

// import style from '../Components/TextButton/button.module.css';
import Loading from '../Components/Loading';

let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function MealPlanForm(props) {
  const [mealData, setMealData] = useState(null);
  const [day, setDay] = useState('Monday');

  //   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  //const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';
  console.log(day);

  function updateDay(day) {
    setDay(day);
  }

  let testURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${TomAPI}&timeFrame=day&targetCalories=${props.calorie}&diet=${props.diet}&excluded=${props.allergy[0]}`;

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
  }, [testURL, day]);

  return (
    <div>
      <div>
        {days.map((day, index) => {
          return (
            <Calendar
              day={day}
              text={day}
              getDay={updateDay}
              key={index}
              value={day}
            />
          );
        })}
      </div>
      <div className="MealPlanCreated">
        {mealData != null ? <MealList mealData={mealData} /> : <Loading />}
      </div>
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
