import React, { useState, useEffect } from "react";
import {
  Outlet,
  useNavigate,
  redirect,
} from "react-router-dom";

import "./style.css";
import Nav from "./components/Nav";
import { getRecipeList } from "./scripts";

// export async function loader({ request }) {
//   console.log("loader!!");
//   const url = new URL(request.url);
//   console.log("url", url);
//   const includeIngredients = url.searchParams.get("includeIngredients");
//   console.log("includeIngredients", includeIngredients);

//   const recipeList = await getRecipeList(includeIngredients);
//   return { recipeList };
//   // return redirect(`/recipelist/:${includeIngredients}`);
// }

function Root() {
  // const recipeList = useLoaderData();
  const navigate = useNavigate();

  // Ingredients for Search
  const [ingredients, setIngredients] = useState("");
  // Menu for Search
  const [menu, setMenu] = useState("");
  // Meal types for Search
  const [mealType, setMealType] = useState("");

  async function searchRecipe(searchKeys) {
    // getRecipeList from recipes.tsx
    const recipeList = getRecipeList(searchKeys);
    console.log("recipeList", recipeList);
    recipeList
      .then((result) => {
        console.log("result", result);
        if (result !== undefined) {
          navigate("recipe", { state: result });
        } else {
          console.log("Recirect");
          return redirect("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    console.log("useEffect");
    searchRecipe({
      ingredients: ingredients,
      menu: menu,
      mealType: mealType,
    });
  }, [mealType]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchRecipe({ ingredients: ingredients, menu: menu, mealType: mealType });
  };

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
        <h1 className="title">
          <a href="/">Let's Cook!</a>
        </h1>
        <div className="item">
          <img
            src={require("./images/knife_icon.png")}
            className="logo2"
            alt="logo2"
            width="60px"
            height="60px"
          />
        </div>
        <form
          className="flex"
          method="get"
          role="search"
          onSubmit={handleSearchSubmit}
        >
          <div>
            <label htmlFor="ingredient_box">ingredient</label>
            <input
              id="ingredient_box"
              name="includeIngredients"
              placeholder="ingredient"
              type="text"
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="menu_box">menu</label>
            <input
              id="menu_box"
              name="query"
              placeholder="menu"
              type="text"
              onChange={(e) => setMenu(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="search_btn">
              Search Recipes!
            </button>
          </div>
        </form>
      </header>
      <nav>
        <Nav setMealType={setMealType} mealType={mealType} />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        Taeko Harada
        <img
          src={require("./images/github-mark.png")}
          className="github_mark"
          alt="github_mark"
          width="20px"
          height="20px"
        />
        <a href="https://github.com/TaekoHarada/lets_cook" target="_blank">
          <p className="github">Github - Let's Cook (React Router)</p>
        </a>
      </footer>
    </div>
  );
}

export default Root;
