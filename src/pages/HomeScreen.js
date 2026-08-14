import React from "react";
import "../css/AnniversaryModal.css";
import "./../css/Responsive.css";

function HomeScreen({ setActive }) {
  return (
    <section className="home-screen">

      <div className="home-art">

        {/* Decorative hearts */}
        <div className="tiny-heart heart-one">♡</div>
        <div className="tiny-heart heart-two">♡</div>
        <div className="tiny-heart heart-three">♡</div>
        <div className="tiny-heart heart-four">♡</div>

        {/* Couple illustration */}
        <div className="couple-drawing">

          <div className="person person-left">
            <div className="person-head left-head"></div>
            <div className="person-body left-body"></div>
          </div>

          <div className="person person-right">
            <div className="person-head right-head"></div>
            <div className="person-body right-body"></div>
          </div>

          <div className="holding-heart">
            ♥
          </div>

        </div>

        {/* Text */}
        <div className="home-text">

          <small>OUR LITTLE UNIVERSE</small>

          <h1>
            Just Us
            <br />
            Two
          </h1>

          <p>
            Every laugh, every meal, every adventure
            and every little moment we share.
          </p>

        </div>

        {/* Open Our Story */}
        <button
          className="start-button"
          onClick={() => setActive("search")}
        >
          <span>Open Our Story</span>

          <span className="button-heart">
            ♡
          </span>
        </button>

      </div>

    </section>
  );
}

export default HomeScreen;