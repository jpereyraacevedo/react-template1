import react from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/fb.svg";
import twitter from "../../assets/tw.svg";
import instagram from "../../assets/ig.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <img src={logo} alt="" className="logo" />
          <div className="redes">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <p className="footer-end">Created by <span className="name">JP dev</span>. © 2023</p>
      </div>
    </footer>
  );
};
