import { Route, BrowserRouter, Switch } from 'react-router-dom'; // define different paths in URL and which component should be loaded
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import VegucateMe from './Pages/VegucateMe';
import MealPlanCreated from './Pages/MealPlanCreated';
import Q1 from './Pages/Q1';
import Q2 from './Pages/Q2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/myplan">
            <MealPlanCreated />
          </Route>
          {/* <Route path="/createplan" exact>
            <MealPlanForm />
          </Route> */}
          <Route path="/createplan" exact>
            <Q1 />
          </Route>
          <Route path="/createplan/q2">
            <Q2 />
          </Route>
          <Route path="/vegucate">
            <VegucateMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
