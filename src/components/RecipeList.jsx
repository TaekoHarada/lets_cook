import React from "react";
import { useLocation } from "react-router-dom";

import Recipe from "./Recipe";

const RecipeList = () => {
  const { state } = useLocation();
  console.log("state", state);

  return (
    <div className="recipeList flex">
      {state.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
