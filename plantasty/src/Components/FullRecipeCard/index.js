// can use hero component here if its easier
// the nested folders can be separate components or just divs on here.

import React, { useState, useEffect } from 'react';
import styles from './RecipeCard.module.css';
import FavouritesButton from '../FavouritesButton';

export default function FullRecipeCard({ meal }) {
  const [imageUrl, setImageUrl] = useState('');
  // const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
  //   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
  //   const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  // const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';
  const MaryamAPI = 'c032db1688814ad2a60c898cd468cc51';

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${MaryamAPI}&includeNutrition=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log('error');
      });
  }, [meal.id]);

  function saveToFirebase() {
    // what you want saved to firebase
    const mealData = {
      title: meal.title,
      image: imageUrl, // not sure about this
      preparation: meal.readyInMinutes,
      servings: meal.servings,
      recipeLink: meal.sourceUrl,
      id: meal.id,
    };

    fetch(
      'https://plantasty-53521-default-rtdb.europe-west1.firebasedatabase.app/favourites.json',
      {
        method: 'POST',
        body: JSON.stringify(mealData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('mealData saved to firebase');
    console.log(mealData);
  }

  return (
    <div className={styles.recipeContainer}>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <div className={styles.infoRecipe}>
        <div>
          <ul className={styles.ulRecipe}>
            <li>Preparation Time: {meal.readyInMinutes} minutes </li>
            <li> Number of servings: {meal.servings}</li>
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <div>
            <a className={styles.linkButton} href={meal.sourceUrl}>
              See Full Recipe
            </a>
          </div>
          <div>
            <FavouritesButton saveData={saveToFirebase} />
          </div>
        </div>
      </div>
    </div>
  );
}
