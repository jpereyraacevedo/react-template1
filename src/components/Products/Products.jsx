import react from "react";
import "./Products.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image4.jpg";
import image3 from "../../assets/image3.jpg";
import { Product } from "./Product";

export const Products = () => {
  return (
    <section className="container">
      <article className="products">
        <p>SHOP PRODUCTS</p>
        <h2 className="section-title">OPEN 24/7/365.</h2>
        <div className="products-cards">
          <Product image={image1} title="White Tent" price={"200.00"} />
          <Product image={image2} title="Tin Coffee Tumbler" price={"35.00"} />
          <Product image={image3} title="Blue Canvas Pack" price={"95.00"} />
        </div>
        <div className="section-btn">
          <div className="product-btn">View All Products</div>
        </div>
      </article>
    </section>
  );
};
