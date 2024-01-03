import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import RecipeList from "./components/RecipeList";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import RecipeDetail from "./components/RecipeDetail";

// Global Data Structure for a recipe
export interface RecipeInfo {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  sourceName: string;
}

function App() {
  // Searched Recipe List
  const [recipeList, setRecipeList] = useState<RecipeInfo[]>([]);
  // Ingredients for Search
  const [ingredients, setIngredients] = useState("");
  // Menu for Search
  const [menu, setMenu] = useState("");
  // Meal types for Search
  const [mealType, setMealType] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RecipeList recipeList={recipeList} />,
    },
    {
      path: "/recipe/:id",
      element: <RecipeDetail />,
    },
  ]);

  // get recipe list from ingredients, menu names and a meal type
  async function fetchRecipeList() {
    const APIID = process.env.REACT_APP_API_KEY;

    //convert the ingredient string to search
    const ingredient_key = ingredients.replace(" ", ",");
    const menu_key = menu.replace(" ", ",");
    console.log(ingredient_key);
    console.log(menu_key);
    console.log(mealType);

    try {
      //Search Recipes by Ingredients and Menu
      const response: Response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${menu_key}&includeIngredients=${ingredient_key}&type=${mealType}&number=3&sort=popularity&apiKey=${APIID}`
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

        // Set recipe list to the State (recipeList) in 'App.tsx'
        setRecipeList(recipeList);
      } else {
        throw new Error(response.status.toString());
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  }

  useEffect(() => {
    fetchRecipeList();
  }, [mealType]);

  return (
    <div className="app">
      <header className="header flex">
        <div className="item">
          <img
            src={require("./images/fork_icon.png")}
            className="logo1"
            alt="logo1"
            width="60px"
            height="60px"
          />
        </div>
        <h1 className="title">Let's Cook!</h1>
        <div className="item">
          <img
            src={require("./images/knife_icon.png")}
            className="logo2"
            alt="logo2"
            width="60px"
            height="60px"
          />
        </div>
        <SearchForm
          fetchRecipeList={fetchRecipeList}
          setIngredients={setIngredients}
          setMenu={setMenu}
        />
      </header>
      <nav>
        <Nav setMealType={setMealType} mealType={mealType} />
      </nav>
      <main>
        <RouterProvider router={router} />
        {/* <RecipeList recipeList={recipeList} /> */}
      </main>
      <footer className="footer">
        Taeko Harada
        <a href="https://github.com/TaekoHarada/weather_forecast_react2">
          Github - Weather Forecast (React)
        </a>
      </footer>
    </div>
  );
}

export default App;
