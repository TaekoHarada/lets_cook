import React from "react";
import { Link } from "react-router-dom";
// Data structure for a recipe
import { RecipeInfo } from "../App";

interface RecipeProps {
  recipe: RecipeInfo;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2 className="recipe_title">
        <Link to={`recipe/${recipe.id}`} state={{ recipe_id: recipe.id }}>
          LINK
        </Link>
        {/* <a href="#">{recipe?.title}</a> */}
      </h2>
      <div>
        <a href="#">
          <img
            src={recipe?.image}
            alt={recipe?.title}
            width="312"
            height="231"
          />
        </a>
      </div>
    </div>
  );
};

export default Recipe;
