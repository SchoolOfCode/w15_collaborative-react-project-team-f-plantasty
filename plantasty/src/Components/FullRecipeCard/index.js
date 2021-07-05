// can use hero component here if its easier
// the nested folders can be separate components or just divs on here.

import React, { useState, useEffect } from 'react';

export default function FullRecipeCard({ meal }) {
  const [imageUrl, setImageUrl] = useState('');
//   const AlinaAPI = '11cf2295cd61422389f3a0b5611fcb30';
//   const TaniaAPI = '81d1af1612cd4093abbfa7b29f39fd3e';
//   const TomAPI = '5b5269dd70b849018665136bf0eb41c9';
  const AlinaAPI2 = 'ef968f4556ed4b3f880221d46d7bd1b9';

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${AlinaAPI2}&includeNutrition=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log('error');
      });
  }, [meal.id]);

  return (
    <div>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preparation Time: {meal.readyInMinutes} minutes </li>
        <li> Number of servings: {meal.servings}</li>
      </ul>
    </div>
  );
}
