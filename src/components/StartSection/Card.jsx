import react from "react";
import "./StartSection.css"

export const Card = ( {number, content, paragraph, form}) => {
  return (
    <div className="card-body">
      <div className="card">
        <p className="card-number">{number}</p>
        <p className="card-title">{content.toUpperCase()}</p>
        <img src={form} alt="" className="card-svg" />
      </div>
      <div>
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};
