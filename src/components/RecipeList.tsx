import React from "react";
import Recipe from "./Recipe";
// Data structure for a recipe
import { RecipeInfo } from "../App";

interface RecipeListProps {
  recipeList: RecipeInfo[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipeList }) => {
  return (
    <div className="recipeList flex">
      {recipeList.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
