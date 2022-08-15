import { ActionTypes } from "../constants/action-types"

const initialState = {
  ingredients: [],
}

export const ingredientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_INGREDIENT:
      return { ...state, ingredients: payload };
    case ActionTypes.SELECTED_INGREDIENT:
      return state;
    default:
      return state;
  }
}

export const selectedIngredientReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_INGREDIENT:
      return { ...state, ...payload }
    default:
      return state;
  }
}