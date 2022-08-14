import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredientReducer";

const reducers = combineReducers({
  allIngredients: ingredientReducer,
})

export default reducers;