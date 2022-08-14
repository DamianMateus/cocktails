import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import IngredientsList from "./components/ingredients/ingredientList";
import NavbarComp from "./components/navbar/NavbarComp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarComp></NavbarComp>
      <div className="container">
        <hr />
        <Routes>
          <Route path="/ingredients" element={<IngredientsList />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
