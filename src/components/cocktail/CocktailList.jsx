import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedIngredient } from "../../redux/actions/ingredientAction";
import Container from "react-bootstrap/Container";
import CoktailDetail from "./CoktailDetail";
import { fetchCocktails } from "../../redux/actions/ingredientAction";

const Cocktail = () => {
  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const { strIngredient1 } = useParams();

  useEffect(() => {
    if (strIngredient1 && strIngredient1 !== "") dispatch(fetchCocktails(strIngredient1));
  }, [strIngredient1]);

  return (
    <Container>
      <h1>Cocktails list</h1>
      <CoktailDetail></CoktailDetail>
    </Container>
  );
};

export default Cocktail;
