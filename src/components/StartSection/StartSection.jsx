import react from "react";
import "./StartSection.css";
import circle from "../../assets/circle.svg"
import triangle from "../../assets/triangle.svg"
import square from "../../assets/square.svg"
import { Card } from "./Card";

export const StartSection = () => {
  return (
    <section className="container support-section">
      <article className="support-intro">
        <div>
          <p>WAYS TO SUPPORT</p>
          <h2 className="support-title">Support Acme Outdoors.</h2>
        </div>
        <div>
          <p>
            COVID-19 has forced us to close our reail space but we need support
            from patreons like yourself now more than ever. Below we've listed
            the best ways to help us through this season.
          </p>
        </div>
      </article>
      <article class="card-section">
        <Card number="01" content="Shop Products" paragraph="Our full product line is still available online here in our site! Getting outside and hiking is still something you can do. Get your gear now!" form={circle} />
        <Card number="02" content="Donate" paragraph="Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat." form={triangle} />
        <Card number="03" content="Buy GIFT CARDS" paragraph="Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family." form={square} />
      </article>
    </section>
  );
};
