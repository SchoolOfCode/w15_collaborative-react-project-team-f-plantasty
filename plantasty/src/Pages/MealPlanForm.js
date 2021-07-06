// import HomeInfoCard from '../Components/InfoCard';
import { Link } from 'react-router-dom';
import React from 'react';

function MealPlanForm() {
  return (
      <div>
          <h1>Create your meal plan</h1>
      {/* <HomeInfoCard text={'Create your meal plan here!'} /> */}
      <Link to="/createPlan/q1">
        <button type="button">Start</button>
      </Link>
    </div>
  );
}

export default MealPlanForm;
