import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2 className="recipe_title">
        <Link to={`${recipe.id}`} state={{ recipe: recipe }}>
          {recipe?.title}
        </Link>
      </h2>
      <div>
        <Link to={`${recipe.id}`} state={{ recipe: recipe }}>
          <img
            src={recipe?.image}
            alt={recipe?.title}
            width="312"
            height="231"
          />
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
