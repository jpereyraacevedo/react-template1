import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="container nav">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
