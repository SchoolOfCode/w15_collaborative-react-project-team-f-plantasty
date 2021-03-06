import React, { useEffect, useState } from 'react';
import MealList from '../Components/MealList';
import Calendar from '../Components/Calendar';
import Broccoli from '../Components/Broccoli';

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
  const [isLoading, setIsLoading] = useState(false);

  //   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  //const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';
  //const MaryamAPI = 'c032db1688814ad2a60c898cd468cc51';
  console.log(day);

  function updateDay(day) {
    setDay(day);
  }

  let testURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${AlinaAPI2}&timeFrame=day&targetCalories=${props.calorie}&diet=${props.diet}&excluded=${props.allergy[0]}`;

  useEffect(() => {
    setIsLoading(true);
    function getMealData() {
      fetch(testURL)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setMealData(data);
            setIsLoading(false);
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
        {isLoading || mealData == null ? (
          <Broccoli />
        ) : (
          <MealList mealData={mealData} />
        )}
      </div>
    </div>
  );
}

export default MealPlanForm;
