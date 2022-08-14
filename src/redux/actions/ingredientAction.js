import { ActionTypes } from '../constants/action-types'

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