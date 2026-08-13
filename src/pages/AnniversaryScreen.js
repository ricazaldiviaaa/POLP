import React from "react";

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
            type="button"
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
                {card.year === 1 && "1st Anniversary"}

                {card.year === 2 && "2nd Anniversary"}

                {card.year === 3 && "3rd Anniversary"}
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


export default AnniversaryScreen;