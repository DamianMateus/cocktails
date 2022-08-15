import cocktailsApi from '../../apis/cocktailsApi';
import { ActionTypes } from '../constants/action-types';

export const setIngredient = (ingredients) => {
  return {
    type: ActionTypes.SET_INGREDIENT,
    payload: ingredients,
  }
}

export const selectedIngredient = (ingredient) => {
  return {
    type: ActionTypes.SELECTED_INGREDIENT,
    payload: ingredient,
  }
}

export const fetchIngredient = () => async (dispatch) => {
  const response = await cocktailsApi.get("/api/json/v1/1/list.php?i=list");
  dispatch({ type: ActionTypes.FETCH_INGREDIENT, payload: response.data.drinks });
}

export const fetchCocktails = (strIngredient1) => async (dispatch) => {
  const response = await cocktailsApi.get(`/api/json/v1/1/filter.php?i=${strIngredient1}`);
  dispatch({ type: ActionTypes.SELECTED_INGREDIENT, payload: response.data.drinks });
}
