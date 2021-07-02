// display full recipe on this page
// recipe card component 

import React from "react";

import Ingredients from '../Components/FullRecipeCard/Ingredients';
import Method from '../Components/FullRecipeCard/Method';
import Nutrition from '../Components/FullRecipeCard/NutritionComponent';

function RecipePage(){
    return(
        <div>
        <div>
            <Ingredients />
        </div>
        <div>
            <Method />
        </div>
        <div>
            <Nutrition />
        </div>
        </div>
    )
}

export default RecipePage;

