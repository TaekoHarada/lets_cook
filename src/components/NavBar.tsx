import React from "react";

interface NavBarProps {
  // key: string;
  meal_type: string;
  // useState in App.tsx
  setMealType: (mealType: string) => void;
  selected: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  meal_type,
  setMealType,
  selected,
}) => {
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
