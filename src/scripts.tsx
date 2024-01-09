const APIID = process.env.REACT_APP_API_KEY;

// Data Structure for a recipe
interface RecipeInfo {
  id: number;
  title: string;
  image: string;
  // readyInMinutes: number;
  // sourceName: string;
  // sourceUrl: string;
}

interface Ingredient {
  name: string;
  amount: string;
}

// Search Recipe List by ingredients, menu and meal type
export async function getRecipeList(query: any) {
  console.log("query", query);

  //convert the ingredient string to search
  const ingredient_key = query.ingredients.replace(" ", ",");
  const menu_key = query.menu.replace(" ", ",");
  const mealType_key = query.mealType;
  console.log(ingredient_key);
  console.log(menu_key);

  try {
    //Search Recipes by Ingredients and Menu
    const response: Response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${menu_key}&includeIngredients=${ingredient_key}&type=${mealType_key}&number=3&sort=popularity&apiKey=${APIID}`
    );
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
      // extract RecipeInfo[] from jsonData
      const recipeList: RecipeInfo[] = jsonData.results.map(
        (recipe: RecipeInfo) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          // readyInMinutes: recipe.readyInMinutes,
          // sourceName: recipe.sourceName,
          // readyInMinutes: 0,
          // sourceName: "",
        })
      );
      return recipeList;
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error) {
    console.error("ERROR", error);
  }
}

// Get a recipe info by id
export async function getRecipe(id: number) {
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
        // readyInMinutes: jsonData.readyInMinutes,
        // sourceName: jsonData.sourceName,
        // sourceUrl: jsonData.sourceUrl,
      };

      return recipeInfo;
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error) {
    console.error("ERROR", error);
  }
}

// Get Ingredient List by id
export async function getIngredients(id: number) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${APIID}`
    );
    if (response.ok) {
      const jsonData = await response.json();
      console.log("Ingredients", jsonData);

      const ingredientList: Ingredient[] = [];

      jsonData.ingredients.map((ingredient: any) => {
        ingredientList.push({
          name: ingredient.name,
          amount:
            ingredient.amount.metric.value +
            " " +
            ingredient.amount.metric.unit,
        });
      });

      console.log("get ingredientList", ingredientList);

      return ingredientList;
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error) {
    console.error("ERROR", error);
  }
}

// Get Analyzed Recipe Instructions
export async function getRecipeInstructions(id: number) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${APIID}`
    );
    if (response.ok) {
      const jsonData = await response.json();
      console.log("Instructions", jsonData);

      const recipeInstructionList: string[] = [];

      jsonData[0].steps.map((step: any) => {
        recipeInstructionList.push(step.step);
      });

      return recipeInstructionList;
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error) {
    console.error("ERROR", error);
  }
}
