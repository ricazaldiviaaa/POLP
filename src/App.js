import React, { useState } from "react";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";
import BottomNav from "./components/BottomNav";


// =========================================================
// ANNIVERSARY DATA
// =========================================================

const anniversaryMessages = {
  1: {
    title: "1st Anniversary",
    icon: "💌",
    text:
      "One year of us. One year of laughter, adventures, little arguments, warm hugs and beautiful memories. I would choose you all over again. ❤️",
  },

  2: {
    title: "2nd Anniversary",
    icon: "💕",
    text:
      "Two years together, and my favorite thing is that there are still so many memories waiting for us. Thank you for being my person. 💕",
  },

  3: {
    title: "3rd Anniversary",
    icon: "💖",
    text:
      "Three years, countless memories, and one person I never want to stop choosing. Happy anniversary, my love. Here's to everything still waiting for us. 💖",
  },
};


// =========================================================
// ANNIVERSARY SCREEN
// =========================================================

function AnniversaryScreen({ onSelect }) {

  const cards = [
    {
      year: 1,
      icon: "💌",
      description:
        "The beginning of our forever. A year filled with first memories, first adventures and endless love.",
    },

    {
      year: 2,
      icon: "💕",
      description:
        "Two years, countless memories, and somehow I still fall for you every single day.",
    },

    {
      year: 3,
      icon: "💖",
      description:
        "Three beautiful years together. Still my favorite person, favorite place and favorite story.",
    },
  ];


  return (
    <section className="anniversary-screen">

      <div className="topbar">

        <h2>
          Our Memories ♡
        </h2>

        <div className="search-icon">
          ⌕
        </div>

      </div>


      <p className="intro">
        Little letters from the chapters
        we've written together.
      </p>


      <div className="anniversary-list">

        {cards.map((card) => (

          <button
            key={card.year}
            className="anniversary-card"
            onClick={() => onSelect(card.year)}
          >

            <div className="anniversary-number">
              Chapter{" "}
              {String(card.year).padStart(2, "0")}
            </div>


            <div className="anniversary-icon">
              {card.icon}
            </div>


            <div className="anniversary-info">

              <h3>
                {anniversaryMessages[card.year].title}
              </h3>

              <p>
                {card.description}
              </p>

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}


// =========================================================
// FOOD / LITTLE MOMENTS SCREEN
// =========================================================

function MemoryScreen() {

  const foods = [
    {
      emoji: "🍕",
      title: "Pizza Nights",
    },

    {
      emoji: "🍰",
      title: "Dessert Dates",
    },

    {
      emoji: "☕",
      title: "Coffee Together",
    },

    {
      emoji: "🍜",
      title: "Late Night Food",
    },
  ];


  return (
    <section className="memory-screen">

      <div className="memory-header">

        <div className="back">
          ←
        </div>


        <div className="memory-title">

          <small>
            Our favorite things
          </small>

          <h2>
            Little Moments ♡
          </h2>

        </div>

      </div>


      <div className="memory-content">

        <h3>
          Our Favorite Dates
        </h3>


        <div className="food-grid">

          {foods.map((food) => (

            <div
              className="food-card"
              key={food.title}
            >

              <div className="food-emoji">
                {food.emoji}
              </div>

              <span>
                {food.title}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


// =========================================================
// PHOTOS SCREEN
// =========================================================

function PhotosScreen() {

  return (
    <section className="photos-screen">

      <div className="photos-header">

        <small>
          OUR STORY
        </small>

        <h2>
          Favorite Photos ♡
        </h2>

      </div>


      <div className="photo-grid">

        <div className="photo-placeholder photo-one">
          ♡
        </div>

        <div className="photo-placeholder photo-two">
          ♡
        </div>

        <div className="photo-placeholder photo-three">
          ♡
        </div>

        <div className="photo-placeholder photo-four">
          ♡
        </div>

      </div>

    </section>
  );
}


// =========================================================
// ANNIVERSARY MESSAGE MODAL
// =========================================================

function AnniversaryModal({
  selectedYear,
  onClose,
}) {

  if (!selectedYear) {
    return null;
  }


  const message =
    anniversaryMessages[selectedYear];


  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="message-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>


        <div className="modal-heart">
          {message.icon}
        </div>


        <small>
          OUR CHAPTER
        </small>


        <h2>
          {message.title}
        </h2>


        <p>
          {message.text}
        </p>


        <div className="modal-signature">
          Always us. ♡
        </div>

      </div>

    </div>
  );
}


// =========================================================
// MAIN APP
// =========================================================

function App() {

  /*
    HOME IS THE FIRST PAGE.

    When the website/app opens:

        active = "home"

    So HomeScreen will be displayed first.
  */

  const [active, setActive] = useState("home");


  /*
    Stores the anniversary card that
    the user clicked.
  */

  const [selectedYear, setSelectedYear] =
    useState(null);


  // =======================================================
  // SELECT ANNIVERSARY
  // =======================================================

  const showMessage = (year) => {
    setSelectedYear(year);
  };


  // =======================================================
  // CLOSE ANNIVERSARY MODAL
  // =======================================================

  const closeModal = () => {
    setSelectedYear(null);
  };


  return (

    <main className="page">

      {/* =================================================
          MAIN APPLICATION CONTAINER
      ================================================= */}

      <div className="app-container">


        {/* ================================================
            HOME

            This is the FIRST page.
        ================================================= */}

        {active === "home" && (

          <HomeScreen
            setActive={setActive}
          />

        )}


        {/* ================================================
            ANNIVERSARIES
        ================================================= */}

        {active === "search" && (

          <AnniversaryScreen
            onSelect={showMessage}
          />

        )}


        {/* ================================================
            FOOD / LITTLE MOMENTS
        ================================================= */}

        {active === "food" && (

          <MemoryScreen />

        )}


        {/* ================================================
            PHOTOS
        ================================================= */}

        {active === "photos" && (

          <PhotosScreen />

        )}


        {/* ================================================
            BOTTOM NAVIGATION

            Imported from:

            components/BottomNav.js
        ================================================= */}

        <BottomNav
          active={active}
          setActive={setActive}
        />

      </div>


      {/* =================================================
          ANNIVERSARY MODAL
      ================================================= */}

      <AnniversaryModal
        selectedYear={selectedYear}
        onClose={closeModal}
      />

    </main>
  );
}


export default App;