import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredient } from "../../redux/actions/ingredientAction";
import Ingredients from "./Iingredients";

const IngredientsList = () => {
  const ingredients = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredient());
  }, []);

  return (
    <div className="header">
      <h1>Ingredients list</h1>
      <Ingredients></Ingredients>
    </div>
  );
};

export default IngredientsList;
