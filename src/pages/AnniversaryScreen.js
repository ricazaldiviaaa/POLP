import React from "react";

function AnniversaryScreen({
  anniversaryMessages,
  onSelect
}) {

  const cards = [
    {
      year: 1,
      icon: "💌",
      description:
        "The beginning of our forever. A year filled with first memories, first adventures and endless love."
    },

    {
      year: 2,
      icon: "💕",
      description:
        "Two years, countless memories, and somehow I still fall for you every single day."
    },

    {
      year: 3,
      icon: "💖",
      description:
        "Three beautiful years together. Still my favorite person, favorite place and favorite story."
    }
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


      {cards.map((card) => (

        <button
          className="anniversary-card"
          key={card.year}
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

    </section>
  );
}

export default AnniversaryScreen;