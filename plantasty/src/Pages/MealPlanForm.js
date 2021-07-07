// import { useState, useEffect } from 'react';
// import Navbar from '../Components/Header/Navbar';
// import Footer from '../Components/Footer';
// import React from 'react';
// import MiniRecipeCard from '../Components/MiniRecipeCard';

// const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
// const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
// const TomAPI = '5b5269dd70b849018665136bf0eb41c9';

// // URL variables
// let calories = 2000;
// let diet = 'Vegan'; // value passed on from q1 page
// let intolerances = 'Egg'; // just for test
// // let intolerances = userAllergy array passed on from Q2 page : .split?
// let URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${TaniaAPI}&timeFrame=day&targetCalories=${calories}&Diet=${diet}&intolerance=${intolerances}`;
// console.log(URL);

// function MealPlanCreated() {
//   const [mealData, setMealData] = useState([]);
//   // look up at redux reducer for possible future use

//   useEffect(() => {
//     fetch(`${URL}`)
//       .then((response) => response.json())
//       .then((mealDataArray) => {
//         const meals = mealDataArray.meals; // just get the meals
//         console.log('three meals received:', meals);
//         setMealData(meals);
//       });
//   }, []); // warning: leave dependency array empty. If set to mealData it will rerender MANY TIMES!!

//   const mealsLoaded = mealData.length > 0;

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         {mealsLoaded ? (
//           mealData.map((meal) => (
//             <MiniRecipeCard text={meal.title} key={meal.id} />
//           ))
//         ) : (
//           <h1>'loading'</h1>
//         )}
//         ;
//       </div>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default MealPlanCreated;

// // window.location.href = '../Question/question.html' + quizUrl;

// // let urlParams = new URLSearchParams(window.location.search);
// // console.log(urlParams.toString());

// // let quizUrl = urlParams.toString();
// // console.log(`https://opentdb.com/api.php?${quizUrl}`);

// // // Fetch request to the API
// // fetch(`https://opentdb.com/api.php?${quizUrl}`);
