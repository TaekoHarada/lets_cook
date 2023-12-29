import React, { useEffect, useState } from "react";

interface RecipeProps {
  id: number;
}

interface RecipeInfo {
  id: number;
  title: string;
  // image: string;
  // readyInMinutes: number;
  // sourceName: string;
  // ingredients: string[];
}

const Recipe: React.FC<RecipeProps> = ({ id }) => {
  const APIID = "83e687c2eaaf4604b947aa56358efd26";

  // recipe information
  const [recipe, setRecipe] = useState<RecipeInfo | null>(null);

  // Get Recipe Information
  // Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.
  async function getRecipe(id: number) {
    try {
      const response: Response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIID}`
      );
      if (response.ok) {
        // return (await response.json()) as T;
        const fetchedRecipe = await response.json();
        setRecipe({ id: fetchedRecipe.id, title: fetchedRecipe.title });
      } else {
        // const errorMessage = await response.text();
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.error("ERROR", error);
      // return error as T;
    }
  }

  useEffect(() => {
    getRecipe(id);
  }, []);

  return (
    <div>
      <p>{id}</p>
      <p>{recipe?.id}</p>
      <p>{recipe?.title}</p>
    </div>
  );
};

export default Recipe;
