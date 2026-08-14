import React from "react";
import "../css/AnniversaryModal.css";
import "./../css/Responsive.css";

function HomeScreen({ setActive }) {
  return (
    <section className="home-screen">

      <div className="home-art">

        {/* =================================================
            DECORATIVE HEARTS
        ================================================= */}

        <div className="tiny-heart heart-one">♡</div>
        <div className="tiny-heart heart-two">♡</div>
        <div className="tiny-heart heart-three">♡</div>
        <div className="tiny-heart heart-four">♡</div>


        {/* =================================================
            COUPLE ILLUSTRATION
        ================================================= */}

        <div className="couple-drawing">

          {/* LEFT PERSON */}
          <div className="person person-left">

            <div className="person-head left-head"></div>

            <div className="person-body left-body"></div>

          </div>


          {/* RIGHT PERSON */}
          <div className="person person-right">

            <div className="person-head right-head"></div>

            <div className="person-body right-body"></div>

          </div>


          {/* HEART BETWEEN THEM */}
          <div className="holding-heart">
            ♥
          </div>

        </div>


        {/* =================================================
            HOME TEXT
        ================================================= */}

        <div className="home-text">

          <small>
            OUR LITTLE UNIVERSE
          </small>

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


        {/* =================================================
            OPEN OUR STORY BUTTON
        ================================================= */}

        <button
          className="start-button"
          onClick={() => setActive("anniversary")}
        >

          <span>
            Open Our Story
          </span>

          <span className="button-heart">
            ♡
          </span>

        </button>

      </div>

    </section>
  );
}

export default HomeScreen;