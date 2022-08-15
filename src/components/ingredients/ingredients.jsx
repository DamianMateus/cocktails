import React from "react";
import { useSelector } from "react-redux";

const Ingredients = () => {
  const ingredients = useSelector((state) => state.allIngredients.ingredients);

  const { strIngredient1 } = ingredients;

  const renderList = ingredients.map((ingredient, index) => {
    return (
      <div className="container" key={index}>
        <div className="header">{ingredient.strIngredient1}</div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Ingredients;
