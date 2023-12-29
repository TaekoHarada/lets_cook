import React from "react";

interface NavBarProps {
  message: string;
}

const NavBar: React.FC<NavBarProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default NavBar;
