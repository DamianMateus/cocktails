import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import IngredientsList from "./components/ingredients/IngredientList";
import NavbarComp from "./components/navbar/NavbarComp";
import Cocktail from "./components/cocktail/CocktailList";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarComp></NavbarComp>
      <div className="container">
        <Routes>
          <Route path="/ingredients" element={<IngredientsList />} />
          <Route path="/cocktail/:strIngredient1" element={<Cocktail />} />
          <Route> 404 Not found! </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
