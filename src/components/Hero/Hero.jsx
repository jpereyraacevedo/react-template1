import react from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <main className="hero-section">
      <div className="container hero-text">
        <div className="subcontainer">
          <h1 className="hero-title">Serving you since 1989.</h1>
          <p className="hero-sub">
            Acme Outdoors is an outdoor and adventure shop located in the
            Boathouse District in Oklahoma City.
          </p>
          <div className="hero-btn">Shop Merch</div>
        </div>
      </div>
    </main>
  );
};
