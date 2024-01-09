import React from "react";
import NavBar from "./NavBar";

const Nav = ({ setMealType, mealType }) => {
  //Set of meal types for each nav bar
  const mealTypesList = [
    { key: "main course", value: "Main Course" },
    { key: "side dish", value: "Side Dish" },
    { key: "dessert", value: "Dessert" },
    { key: "appetizer", value: "Appetizer" },
    { key: "salad", value: "Salad" },
    { key: "bread", value: "Bread" },
    { key: "breakfast", value: "Breakfast" },
    { key: "soup", value: "Soup" },
    { key: "beverage", value: "Beverage" },
    { key: "sauce", value: "Sauce" },
    { key: "marinade", value: "Marinade" },
    { key: "fingerfood", value: "Fingerfood" },
    { key: "snack", value: "Snack" },
    { key: "drink", value: "Drink" },
  ];

  return (
    <div className="nav flex">
      {mealTypesList.map((meal) => (
        <NavBar
          key={meal.key}
          meal_type={meal.value}
          setMealType={setMealType}
          selected={mealType === meal.key}
        />
      ))}
    </div>
  );
};

export default Nav;
