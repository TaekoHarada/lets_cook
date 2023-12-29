import React from "react";
import NavBar from "./NavBar";

interface NavProps {
  message: string;
}

const Nav: React.FC<NavProps> = ({ message }) => {
  return (
    <div>
      <p>NavNavNavNav</p>
      <p>{message}</p>
      <NavBar message="to navbar" />
      <NavBar message="to navbar" />
      <NavBar message="to navbar" />
    </div>
  );
};

export default Nav;
