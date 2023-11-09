import react from "react";
import "./Products.css";

export const Product = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt="" className="product-img" />
      <div className="product-text">
        <p>{title}</p>
        <p>$ {price} USD</p>
        <div className="product-btn">Details</div>
      </div>
    </div>
  );
};
