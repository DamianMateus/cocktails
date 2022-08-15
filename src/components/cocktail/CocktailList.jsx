import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedIngredient } from "../../redux/actions/ingredientAction";
import Container from "react-bootstrap/Container";
import CoktailDetail from "./CoktailDetail";

const Cocktail = () => {
  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const { strIngredient1 } = useParams();

  const fetchCocktail = async () => {
    const response = await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`
      )
      .catch((err) => {
        console.log("ERROR ", err);
      });
    dispatch(selectedIngredient(response.data.drinks));
  };

  useEffect(() => {
    if (strIngredient1 && strIngredient1 !== "") fetchCocktail();
  }, [strIngredient1]);

  return (
    <Container>
      <h1>Cocktails list</h1>
      <CoktailDetail></CoktailDetail>
    </Container>
  );
};

export default Cocktail;
