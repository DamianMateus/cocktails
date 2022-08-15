import { combineReducers } from "redux";
import { ingredientReducer, selectedIngredientReducer } from "./ingredientReducer";

const reducers = combineReducers({
  allIngredients: ingredientReducer,
  drinks: selectedIngredientReducer,
})

export default reducers;