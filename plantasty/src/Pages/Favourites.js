import React, { useState, useEffect } from 'react';
import styles from '../Components/FullRecipeCard/RecipeCard.module.css';
import MealList from '../Components/MealList';
import Loading from '../Components/Loading';
import FullRecipeCard from '../Components/FullRecipeCard';

function Favourites() {
  const [isLoading, setIsloading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch(
      'https://plantasty-53521-default-rtdb.europe-west1.firebasedatabase.app/favourites.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key], // copy all key value pairs
          };
          recipes.push(recipe);
        }
        setIsloading(false);
        setLoadedRecipes(recipes);
      });
    console.log('These are the loaded recipes:', loadedRecipes);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading from firebase</h1>
      </div>
    );
  }
  return (
    <div className={styles.recipeContainer}>
      <h1>LOADED FROM FIREBASE</h1>

      {loadedRecipes != null ? (
        loadedRecipes.map((meal) => {
          return <FullRecipeCard key={meal.id} meal={meal} />;
        })
      ) : (
        <h1>No data saved to firebase</h1>
      )}
      {/* {loadedRecipes.map((meal) => {
        return <h2>{meal.title}</h2>;
      })} */}
    </div>
  );
}

export default Favourites;

//    {
//      loadedRecipes != null ? (
//        loadedRecipes.meals.map((meal) => {
//          return <FullRecipeCard key={meal.id} meal={meal} />;
//        })
//      ) : (
//        <h1>No data saved to firebase</h1>
//      );
//    }

// const mealData = {
//   title: meal.title,
//   image: imageUrl, // not sure about this
//   preparation: meal.readyInMinutes,
//   servings: meal.servings,
//   recipeLink: meal.sourceUrl,
//   id: meal.id,
// };
//   {
//     /* <h1>{loadedRecipes.title}</h1>
//   <img src={loadedRecipes.imageUrl} alt="recipe" />
//   <div className={styles.infoRecipe}>
//     <div>
//       <ul className={styles.ulRecipe}>
//         <li>Preparation Time: {loadedRecipes.readyInMinutes} minutes </li>
//         <li> Number of servings: {loadedRecipes.servings}</li>
//       </ul>
//     </div>
//     <div className={styles.buttonContainer}>
//       <div>
//         <a className={styles.linkButton} href={loadedRecipes.recipeLink}>
//           See Full Recipe
//         </a>
//       </div>
//     </div>
//   </div> */
//   }
