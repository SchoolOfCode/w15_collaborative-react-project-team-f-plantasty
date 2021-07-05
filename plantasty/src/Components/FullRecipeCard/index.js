// can use hero component here if its easier
// the nested folders can be separate components or just divs on here.

import React, { useState, useEffect } from 'react';

export default function FullRecipeCard({ meal }) {
  const [imageUrl, setImageUrl] = useState('');

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
