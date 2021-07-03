// url  /created
// can navigate to recipe page to view full recipe - API call
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import MiniRecipeCard from '../Components/MiniRecipeCard';

function MealPlanCreated() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <MiniRecipeCard />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
