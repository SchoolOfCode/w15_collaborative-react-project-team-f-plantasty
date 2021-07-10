import { Route, BrowserRouter, Switch } from 'react-router-dom'; // define different paths in URL and which component should be loaded
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import VegucateMe from './Pages/VegucateMe';
import MealPlanCreated from './Pages/MealPlanCreated';
import CreateMealPlan from './Pages/CreateMealPlan';
import ShoppingListPage from './Pages/ShoppingListPage';
import Favourites from './Pages/Favourites';

function App() {
  const [allergies, setAllergies] = useState([]);
  const [calories, setCalories] = useState(2000);
  const [diets, setDiets] = useState('');

  function getAllergy(allergy) {
    setAllergies([...allergies, allergy]);
  }
  console.log(allergies); // it works!

  function getCalories(number) {
    setCalories(number);
  }
  console.log(calories);

  function getDiet(diet) {
    setDiets(diet);
  }

  console.log(diets);

  console.log(diets);

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/myplan">
            <MealPlanCreated
              allergy={allergies}
              calorie={calories}
              diet={diets}
            />
          </Route>
          <Route path="/createplan" exact>
            <CreateMealPlan
              updateDiet={getDiet}
              updateAllergy={getAllergy}
              updateCalories={getCalories}
            />
          </Route>
          {/* <Route path="/createplan/q2">
            <Q2 />
          </Route> */}
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/vegucate">
            <VegucateMe />
          </Route>
          <Route path="/shoppingListPage">
            <ShoppingListPage />
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
