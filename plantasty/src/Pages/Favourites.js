import React, { useState, useEffect } from 'react';
import styles from '../Components/FullRecipeCard/RecipeCard.module.css';
import FavouriteRecipeCard from '../Components/FavouriteRecipeCard';

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

  const isEmpty = loadedRecipes.length === 0;

  if (isLoading) {
    return (
      <div>
        <h1>Loading from firebase</h1>
      </div>
    );
  }
  return (
    <div className={styles.recipeContainer}>
      {isEmpty ? (
        <h1>No saved recipes</h1>
      ) : (
        loadedRecipes.map((meal) => {
          return (
            <div>
              <h1>Your saved recipes</h1>
              <FavouriteRecipeCard key={meal.id} meal={meal} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Favourites;
