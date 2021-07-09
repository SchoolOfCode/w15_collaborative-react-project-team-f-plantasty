import { Link } from 'react-router-dom';
import MultipleChoiceForm from '../Components/MultipleChoiceForm';
import SingleChoiceForm from '../Components/SingleChoiceForm';
import CaloriesInput from '../Components/CaloriesInput';
import TextButton from '../Components/TextButton';
import styles from '../Components/MultipleChoiceForm/MultipleChoiceForm.module.css';
import style from '../Components/FullRecipeCard/RecipeCard.module.css';
let intolerances = [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat',
];

function CreateMealPlan(props) {
  return (
    <div>
      <section className={styles.cardWrap2}>
        <h1>Do you have any of the following food intolerances?</h1>
        <h2>Select all that apply</h2>
        {intolerances.map((allergy, index) => (
          <MultipleChoiceForm
            text={allergy}
            value={allergy}
            getValue={props.updateAllergy}
            key={index}
          />
        ))}
      </section>
      <section className={style.recipeContainer}>
        <h1>What is your calorie target for the day?</h1>
        <h2>Use input to type in your desires calorie intake</h2>
        <CaloriesInput handleChange={props.updateCalories} />
      </section>
      <section>
        <Link to={'/myplan'}>
          <TextButton text={'Generate plan'} />
        </Link>
      </section>
      {/* <section>
        <SingleChoiceForm />
      </section> */}
    </div>
  );
}

export default CreateMealPlan;

// import { useState, useEffect } from 'react';
// import Navbar from '../Components/Header/Navbar';
// import Footer from '../Components/Footer';
// import React from 'react';
// import MiniRecipeCard from '../Components/MiniRecipeCard';

// // URL variables

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
