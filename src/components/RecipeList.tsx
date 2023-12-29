import React from "react";
import Recipe from "./Recipe";

interface RecipeListProps {
  ids: number[];
}

const RecipeList: React.FC<RecipeListProps> = ({ ids }) => {
  return (
    <div>
      <p>RecipeList HHH</p>
      {ids.map((id) => (
        <Recipe id={id} />
      ))}
    </div>
  );
};

export default RecipeList;
