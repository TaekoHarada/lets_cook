import React from "react";
import "./style.css";
import RecipeList from "./components/RecipeList";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";

function App() {
  // get ids from an ingredient
  function getRecipeIdList(ingredient: string): number[] {
    console.log(ingredient);
    const recipeIdList = [716429, 716429];
    return recipeIdList;
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm message={""} />
      </header>
      <nav>
        <Nav message="message_nav" />
      </nav>
      <main>
        <RecipeList ids={getRecipeIdList("egg")} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
