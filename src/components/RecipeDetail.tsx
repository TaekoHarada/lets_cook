import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { RecipeInfo } from "../App";

const RecipeDetail: React.FC = () => {
  const { state } = useLocation();
  const recipeId = state.recipe_id;
  console.log(recipeId);

  const APIID = process.env.REACT_APP_API_KEY;

  //state for recipe info
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfo>();
  //state for ingredients
  type Ingredient = { name: string; amount: string };
  const [ingredients, setIngredients] = useState<Ingredient[]>();

  //state for recipe instructions
  const [recipeInst, setRecipeInst] = useState<string[]>([]);

  // Get a recipe info by id
  async function fetchRecipeInfo(id: number) {
    try {
      const response: Response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${APIID}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);

        const recipeInfo: RecipeInfo = {
          id: jsonData.id,
          title: jsonData.title,
          image: jsonData.image,
          readyInMinutes: jsonData.readyInMinutes,
          sourceName: jsonData.sourceName,
        };

        setRecipeInfo(recipeInfo);
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  }

  // Get Ingredient by id
  async function fetchIngredients(id: number) {
    try {
      const response: Response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${APIID}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log("Ingredients", jsonData);

        const ingredients: Ingredient[] = [];

        jsonData.map(
          (ingredient: {
            name: string;
            metric: { value: number; unit: string };
          }) => {
            ingredients.push({
              name: ingredient.name,
              amount: ingredient.metric.value + ingredient.metric.unit,
            });
          }
        );

        setIngredients(ingredients);
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  }

  // Get Analyzed Recipe Instructions
  async function fetchRecipeInstructions(id: number) {
    try {
      const response: Response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${APIID}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log("Instructions", jsonData);

        const recipeInst: string[] = [];

        jsonData[0].steps.map((step: { step: string }) => {
          recipeInst.push(step.step);
        });

        setRecipeInst(recipeInst);
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  }

  useEffect(() => {
    fetchRecipeInfo(recipeId);
    fetchRecipeInstructions(recipeId);
  }, []);

  return (
    <div className="recipeDetail">
      <h2>{recipeInfo?.title}</h2>
      <div className="flex">
        <div>
          <img src={recipeInfo?.image} alt="" />
          <p>
            {recipeInfo?.sourceName} (ID: {recipeId})
          </p>
        </div>
        <div>{recipeInfo?.readyInMinutes}mins</div>
        <h3>Ingredients:</h3>
        <ul className="ingredientList">
          <li>suger</li>
          <li>suger</li>
          <li>suger</li>
        </ul>
      </div>
      <h3>Instructions:</h3>
      <ol className="instructions">
        {recipeInst.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
