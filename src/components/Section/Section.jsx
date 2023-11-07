import react from "react";
import "../Hero/Hero.css";
import "./Section.css";

export const Section = () => {
  return (
    <section className="bg-img-section">
      <div className="container section-text">
        <div className="subcontainer-section">
          <h2 className="section-title">
            How we're keeping you safe during COVID-19
          </h2>
          <p className="hero-sub">
            As an outdoor shop, we’ve taken precautionary measures to ensure the
            safety of all our customers and team members.
          </p>
          <div className="hero-btn">Read Our Statement</div>
        </div>
      </div>
    </section>
  );
};
