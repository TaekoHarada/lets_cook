import React from "react";

const NavBar = ({ meal_type, setMealType, selected }) => {
  const handleClick = () => {
    selected = true;
    setMealType(meal_type.toLowerCase());
  };

  return (
    <div
      onClick={() => handleClick()}
      className={selected ? "nav_bar_active" : "nav_bar"}
    >
      {meal_type}
    </div>
  );
};

export default NavBar;
