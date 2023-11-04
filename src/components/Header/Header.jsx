import React from "react";
import "./Header.css"
import logo from "../../assets/icons8-logo-24.png"

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <nav>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
          <li>Enlace 4</li>
          <li>Enlace 5</li>
        </ul>
      </nav>
    </header>
  );
};
