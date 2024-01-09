import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getIngredients, getRecipeInstructions } from "../scripts";

const RecipeDetail = () => {
  const { state } = useLocation();
  const recipe = state.recipe;

  //state for recipe info
  const [recipeInfo, setRecipeInfo] = useState(recipe);
  //state for ingredients
  const [ingredients, setIngredients] = useState([]);

  //state for recipe instructions
  const [recipeInst, setRecipeInst] = useState([]);

  useEffect(() => {
    // setIngredients(() => getIngredients(recipe.id));
    // setRecipeInst(() => getRecipeInstructions(recipe.id));
    const ingredientList = getIngredients(recipe.id);

    ingredientList
      .then((result) => {
        setIngredients(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const instructionList = getRecipeInstructions(recipe.id);

    instructionList
      .then((result) => {
        setRecipeInst(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="recipeDetail">
      <h2>{recipeInfo.title}</h2>
      <div className="content_top flex">
        <div>
          <img src={recipeInfo.image} alt="" />
          {/* <p>
            <a href={recipeInfo?.sourceUrl}>{recipeInfo?.sourceName}</a> (ID:{" "}
            {recipe.id})
          </p> */}
        </div>
        {/* <div>{recipeInfo?.readyInMinutes}mins</div> */}
        <div className="ingredientList">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} : <p>{ingredient.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          {recipeInst.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
