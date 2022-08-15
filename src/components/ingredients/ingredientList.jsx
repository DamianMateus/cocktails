import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIngredient } from "../../redux/actions/ingredientAction";
import axios from "axios";
import Ingredients from "./Iingredients";

const IngredientsList = () => {
  const ingredients = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchIngredients = async () => {
    const response = await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .catch((err) => {
        console.log("ERROR ", err);
      });
    dispatch(setIngredient(response.data.drinks));
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div className="header">
      <h1>Ingredients list</h1>
      <Ingredients></Ingredients>
    </div>
  );
};

export default IngredientsList;
