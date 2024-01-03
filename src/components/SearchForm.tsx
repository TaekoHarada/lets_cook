import React from "react";

// These props come from App.tsx
interface SearchFormProps {
  fetchRecipeList: () => void;
  // set function for useState
  setIngredients: (ingredients: string) => void;
  setMenu: (menu: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  fetchRecipeList,
  setIngredients,
  setMenu,
}) => {
  //on submit event
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    fetchRecipeList();
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div>
        <label htmlFor="ingredient_box">ingredient</label>
        <input
          id="ingredient_box"
          placeholder="ingredient"
          type="text"
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="menu_box">menu</label>
        <input
          id="menu_box"
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
  );
};

export default SearchForm;
