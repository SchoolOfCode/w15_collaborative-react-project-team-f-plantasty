import { Route, BrowserRouter, Switch } from "react-router-dom"; // define different paths in URL and which component should be loaded
import "./App.css";
import HomePage from "./Pages/HomePage";
import VegucateMe from "./Pages/VegucateMe";
import MealPlanCreated from "./Pages/MealPlanCreated";
import ShoppingList2 from "./Pages/ShoppingListPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/mealplan">
            <MealPlanCreated />
          </Route>
          <Route path="/vegucate">
            <VegucateMe />
          </Route>
          <Route path="/ShoppingListPage">
            <ShoppingList2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
