// url  /created
// can navigate to recipe page to view full recipe - API call
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import React from 'react';

function MealPlanCreated() {
  return (
    <div>
      <div>
        <Navbar />
        <h1>Meal plan page - but which one?</h1>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MealPlanCreated;
