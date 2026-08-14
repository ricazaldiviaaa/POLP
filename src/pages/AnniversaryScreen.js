import React, { useState } from "react";

import "../css/AnniversaryScreen.css";
import "../css/AnniversaryModal.css";
import "./../css/Responsive.css";

import AnniversaryModal from "./AnniversaryModal";
import anniversaryData from "../data/anniversaryData";

function AnniversaryScreen() {

  const [selectedChapter, setSelectedChapter] = useState(null);

  const [favorites, setFavorites] = useState([]);
  const [saved, setSaved] = useState([]);

  // Controls which collection is displayed
  const [activeCollection, setActiveCollection] = useState(null);


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


  /* =========================================================
     FAVORITE
  ========================================================= */

  const toggleFavorite = (year) => {

    setFavorites((current) =>
      current.includes(year)
        ? current.filter((item) => item !== year)
        : [...current, year]
    );

  };


  /* =========================================================
     SAVE
  ========================================================= */

  const toggleSave = (year) => {

    setSaved((current) =>
      current.includes(year)
        ? current.filter((item) => item !== year)
        : [...current, year]
    );

  };


  /* =========================================================
     HEADER FAVORITES
  ========================================================= */

  const showFavorites = () => {

    setActiveCollection((current) =>
      current === "favorites" ? null : "favorites"
    );

  };


  /* =========================================================
     HEADER SAVED
  ========================================================= */

  const showSaved = () => {

    setActiveCollection((current) =>
      current === "saved" ? null : "saved"
    );

  };


  return (
    <section className="anniversary-screen">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="topbar">

        <div className="topbar-text">

          <h2>
            Our Memories ♡
          </h2>

          <p className="intro">
            Little letters from the chapters
            we've written together.
          </p>

        </div>


        {/* =================================================
            HEADER ACTIONS
        ================================================= */}

        <div className="topbar-actions">

          {/* FAVORITES */}

        <button
        type="button"
        className={`collection-button ${
          activeCollection === "favorites"
            ? "collection-active"
            : ""
        }`}
        onClick={showFavorites}
        aria-label="Show favorite memories"
      >
        {favorites.length > 0 ? (

          /* FILLED FAVORITE */

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#8C1A10"
            aria-hidden="true"
          >
            <path d="M40-120v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-160q-43 0-84-13.5T320-212v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-520q0 50-34.5 85T160-400Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-520q0 50-34.5 85T800-400Zm-320-80q-68-62-111-104.5T302-658q-24-31-33-54.5t-9-47.5q0-50 35-85t86-35q28 0 54 12.5t45 33.5q19-21 45-33.5t54-12.5q51 0 86 35t35 85q0 24-9 47.5T658-658q-24 31-67 73.5T480-480Zm0-108q72-66 106-107.5t34-64.5q0-17-12-28.5T579-800q-12 0-23.5 7T532-772l-51 59-51-57q-14-16-25.5-23t-23.5-7q-17 0-29 11.5T340-760q0 23 34 64.5T480-588Zm0 0Z"/>
          </svg>

        ) : (

          /* EMPTY FAVORITE */

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#8C1A10"
            aria-hidden="true"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
          </svg>

        )}
      </button>

      <button
        type="button"
        className={`collection-button ${
          activeCollection === "saved"
            ? "collection-active"
            : ""
        }`}
        onClick={showSaved}
        aria-label="Show saved memories"
      >
        {saved.length > 0 ? (

          /* FILLED SAVE */

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#8C1A10"
            aria-hidden="true"
          >
            <path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
          </svg>

        ) : (

          /* EMPTY SAVE */

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#8C1A10"
            aria-hidden="true"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
          </svg>

        )}
      </button>
        </div>

      </div>


      {/* =================================================
          FAVORITES PANEL
      ================================================= */}

      {activeCollection === "favorites" && (

        <div className="collection-panel">

          <div className="collection-panel-header">

            <div>
              <h3>
                Favorites ♡
              </h3>

              <p>
                Your favorite memories.
              </p>
            </div>

            <span>
              {favorites.length}
            </span>

          </div>


          {favorites.length === 0 ? (

            <div className="collection-empty">
              <div className="collection-empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8C1A10"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>
              </div>

              <p>
                No favorite memories yet.
              </p>

              <small>
                Tap the favorite button on a chapter to add it here.
              </small>
            </div>

          ) : (

            <div className="collection-list">

              {cards
                .filter((card) => favorites.includes(card.year))
                .map((card) => (

                  <button
                    type="button"
                    key={card.year}
                    className="collection-item"
                    onClick={() => setSelectedChapter(card.year)}
                  >

                    <span className="collection-item-icon">
                      <img
                        src={anniversaryData[card.year].icon}
                        alt={`Chapter ${card.year}`}
                      />
                    </span>
                    <span className="collection-item-info">

                      <strong>
                        Chapter{" "}
                        {String(card.year).padStart(2, "0")}
                      </strong>

                      <small>
                        {card.year === 1 && "1st Anniversary"}
                        {card.year === 2 && "2nd Anniversary"}
                        {card.year === 3 && "3rd Anniversary"}
                      </small>

                    </span>

                    <span className="collection-item-action">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8C1A10"><path d="M240-240v-240h72v168h168v72H240Zm408-240v-168H480v-72h240v240h-72Z"/></svg>
                    </span>

                  </button>

                ))}

            </div>

          )}

        </div>

      )}


      {/* =================================================
          SAVED PANEL
      ================================================= */}

      {activeCollection === "saved" && (

        <div className="collection-panel">

          <div className="collection-panel-header">

            <div>
              <h3>
                Saved Memories 
              </h3>

              <p>
                Memories you've saved for later.
              </p>
            </div>

            <span>
              {saved.length}
            </span>

          </div>


          {saved.length === 0 ? (

            <div className="collection-empty">

              <div className="collection-empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8C1A10"><path d="M444-246v-454q-42-22-87-33t-93.22-11q-36.94 0-73.36 6.5T120-716v452q35-13 70.81-18.5Q226.63-288 264-288q47.35 0 92.17 12Q401-264 444-246Zm36 102q-49-32-103-52t-113-20q-38 0-76 7.5T115-186q-24 10-45.5-3.53T48-229v-503q0-14 7.5-26T76-776q45-20 91.9-30 46.91-10 95.68-10Q333-816 384-802.5T492-760q11 6 17.5 16.5T516-720v474q43-20 87.83-31 44.82-11 92.17-11 37 0 73.5 5t70.5 19v-529q11 4 22.13 7.9 11.13 3.9 21.87 9.1 13 6 21 18t8 26v503q0 25-15.5 40t-32.5 7q-40-18-82.48-26-42.47-8-86.52-8-59 0-113 20t-103 52Zm144-240v-432l120-48v432l-120 48ZM282-495Z"/></svg>
              </div>

              <p>
                No saved memories yet.
              </p>

              <small>
                Tap the save button on a chapter to save it here.
              </small>

            </div>

          ) : (

            <div className="collection-list">

              {cards
                .filter((card) => saved.includes(card.year))
                .map((card) => (

                  <button
                    type="button"
                    key={card.year}
                    className="collection-item"
                    onClick={() => setSelectedChapter(card.year)}
                  >

                    <span className="collection-item-icon">
                      {card.icon}
                    </span>

                    <span className="collection-item-info">

                      <strong>
                        Chapter{" "}
                        {String(card.year).padStart(2, "0")}
                      </strong>

                      <small>
                        {card.year === 1 && "1st Anniversary"}
                        {card.year === 2 && "2nd Anniversary"}
                        {card.year === 3 && "3rd Anniversary"}
                      </small>

                    </span>

                    <span className="collection-item-action">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#8C1A10"><path d="M240-240v-240h72v168h168v72H240Zm408-240v-168H480v-72h240v240h-72Z"/></svg>
                    </span>

                  </button>

                ))}

            </div>

          )}

        </div>

      )}


      {/* =================================================
          ANNIVERSARY CARDS
      ================================================= */}

      <div className="anniversary-list">

        {cards.map((card) => {

          const isFavorite = favorites.includes(card.year);
          const isSaved = saved.includes(card.year);

          return (

            <div
              key={card.year}
              className="anniversary-card"
              onClick={() => setSelectedChapter(card.year)}
            >

              {/* CHAPTER NUMBER */}

              <div className="anniversary-number">
                Chapter{" "}
                {String(card.year).padStart(2, "0")}
              </div>


              {/* ICON */}

              <div className="anniversary-icon">
                <img
                  src={anniversaryData[card.year].icon}
                  alt={`Chapter ${card.year}`}
                />
              </div>


              {/* INFORMATION */}

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


              {/* =================================================
                  RIGHT SIDE FAVORITE / SAVE
              ================================================= */}

              <div
                className="anniversary-actions"
                onClick={(e) => e.stopPropagation()}
              >

              {/* =================================================
                  FAVORITE - TOP
              ================================================= */}

              <button
                type="button"
                className={`memory-action ${
                  isFavorite ? "is-favorite" : ""
                }`}
                onClick={() => toggleFavorite(card.year)}
                aria-label={
                  isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >

                {isFavorite ? (

                  /* ADD IN FAVORITE / FILLED */

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#8C1A10"
                    aria-hidden="true"
                  >
                    <path d="M40-120v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-160q-43 0-84-13.5T320-212v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-520q0 50-34.5 85T160-400Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-520q0 50-34.5 85T800-400Zm-320-80q-68-62-111-104.5T302-658q-24-31-33-54.5t-9-47.5q0-50 35-85t86-35q28 0 54 12.5t45 33.5q19-21 45-33.5t54-12.5q51 0 86 35t35 85q0 24-9 47.5T658-658q-24 31-67 73.5T480-480Zm0-108q72-66 106-107.5t34-64.5q0-17-12-28.5T579-800q-12 0-23.5 7T532-772l-51 59-51-57q-14-16-25.5-23t-23.5-7q-17 0-29 11.5T340-760q0 23 34 64.5T480-588Zm0 0Z"/>
                  </svg>

                ) : (

                  /* FAVORITE / EMPTY */

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#8C1A10"
                    aria-hidden="true"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                  </svg>

                )}

              </button>


              {/* =================================================
                  SAVE - BOTTOM
              ================================================= */}

              <button
                type="button"
                className={`memory-action ${
                  isSaved ? "is-saved" : ""
                }`}
                onClick={() => toggleSave(card.year)}
                aria-label={
                  isSaved
                    ? "Remove saved memory"
                    : "Save memory"
                }
              >

                {isSaved ? (

                  /* ADD IN SAVE / FILLED */

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#8C1A10"
                    aria-hidden="true"
                  >
                    <path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
                  </svg>

                ) : (

                  /* SAVE / EMPTY */

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#8C1A10"
                    aria-hidden="true"
                  >
                    <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
                  </svg>

                )}

              </button>
              </div>

            </div>

          );

        })}

      </div>


      {/* =================================================
          MODAL
      ================================================= */}

<AnniversaryModal
  data={
    selectedChapter
      ? anniversaryData[selectedChapter]
      : null
  }

  onClose={() => setSelectedChapter(null)}

  isFavorite={
    selectedChapter
      ? favorites.includes(selectedChapter)
      : false
  }

  isSaved={
    selectedChapter
      ? saved.includes(selectedChapter)
      : false
  }

  onToggleFavorite={() => {
    if (selectedChapter) {
      toggleFavorite(selectedChapter);
    }
  }}

  onToggleSave={() => {
    if (selectedChapter) {
      toggleSave(selectedChapter);
    }
  }}
/>

    </section>
  );
}

export default AnniversaryScreen;