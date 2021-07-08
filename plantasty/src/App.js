import { Route, BrowserRouter, Switch } from 'react-router-dom'; // define different paths in URL and which component should be loaded
import { useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import VegucateMe from './Pages/VegucateMe';
import MealPlanCreated from './Pages/MealPlanCreated';
import CreateMealPlan from './Pages/CreateMealPlan';
import Q2 from './Pages/Q2';

function App() {
  const [allergies, setAllergies] = useState([]);
  const [calories, setCalories] = useState(2000);

  function getAllergy(allergy) {
    setAllergies([...allergies, allergy]);
  }
  console.log(allergies); // it works!

  function getCalories(number) {
    setCalories(number);
  }
  console.log(calories);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/myplan">
            <MealPlanCreated allergy={allergies} calorie={calories} />
          </Route>
          <Route path="/createplan" exact>
            <CreateMealPlan
              updateAllergy={getAllergy}
              updateCalories={getCalories}
            />
          </Route>
          {/* <Route path="/createplan/q2">
            <Q2 />
          </Route> */}
          <Route path="/vegucate">
            <VegucateMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
