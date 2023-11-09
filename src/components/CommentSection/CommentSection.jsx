import react from "react";
import commentImage from "../../assets/comment.jpg";
import "./CommentSection.css";

export const CommentSection = () => {
  return (
    <section className="container comment-section">
      <img src={commentImage} alt="" className="comment-img" />
      <article className="comment-box">
        <div className="comment-text">
          <h2 className="comment-title">Shop Local.</h2>
          <p className="comment-paragraph">
            We know that during COVID-19, a lot of folks around the city and
            state are feeling uneasy about the future - we’re not sure what the
            future holds either.
          </p>
          <p className="comment-paragraph">
            That said: we know that we love making sure you have the gear you
            need for your adventures, and we’re going to keep doing that - with
            our team - until the city tells us we can’t.
          </p>
          <p className="comment-paragraph">
            But as long as folks like yourself support small businesses around
            the city, then we’ll be here — every day, making sure your orders
            arrive on time.
          </p>
          <hr />
          {/* <p className="comment-paragraph">-------</p> */}
          <p className="comment-paragraph">
            Jane & John Doe
            <br />
            <span className="remark">Acme Outdoors</span>
          </p>
        </div>
      </article>
    </section>
  );
};
