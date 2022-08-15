import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Ingredients = () => {
  const ingredients = useSelector((state) => state.allIngredients.ingredients);

  const { strIngredient1 } = ingredients;

  const renderList = ingredients.map((ingredient, index) => {
    return (
      <Link to={`/cocktail/${ingredient.strIngredient1}`} key={index}>
        <div className="container" >
          <div className="header">{ingredient.strIngredient1}</div>
        </div>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default Ingredients;
