import React, { useState } from "react";

import fruits from "../data/fruits";
import vegetables from "../data/vegetables";
import proteins from "../data/proteins";
import dairy from "../data/dairy";
import grains from "../data/grains";
import nutsSeeds from "../data/nutsSeeds";
import herbsSpices from "../data/herbsSpices";
import beverages from "../data/beverages";
import lowPurine from "../data/lowPurine";
import breakfast from "../data/breakfast";
import lunch from "../data/lunch";
import dinner from "../data/dinner";
import streetFoods from "../data/streetFoods";
import highUricAcid from "../data/highUricAcid";
import sweets from "../data/sweets";

import "../css/MemoryScreen.css";
import "../css/Responsive.css";

function MemoryScreen( { scrollToTop } ) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    fruits,
    vegetables,
    proteins,
    dairy,
    grains,
    nutsSeeds,
    herbsSpices,
    beverages,
    lowPurine,
    breakfast,
    lunch,
    dinner,
    streetFoods,
    highUricAcid,
    sweets,
  ];


  const searchResults = categories.flatMap((category) => {
    const term = searchTerm.toLowerCase();

    const betterMatches = (category.choose || [])
      .filter((food) => food.toLowerCase().includes(term))
      .map((food) => ({
        food,
        category,
        status: "Better Choice",
      }));

    const limitMatches = (category.limit || [])
      .filter((food) => food.toLowerCase().includes(term))
      .map((food) => ({
        food,
        category,
        status: "Limit / Avoid",
      }));

    return [...betterMatches, ...limitMatches];
  });

  /* =========================================================
     CATEGORY DETAIL
  ========================================================= */

  if (selectedCategory) {
    return (
      <section className="memory-screen memory-detail-screen">

        <div className="memory-detail-header">
          <button
            type="button"
            className="memory-back-button"
            onClick={() => {
            setSelectedCategory(null);
            scrollToTop();
          }}
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#51abd2"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>
          </button>

          <div className="memory-title">
            <small>FOOD GUIDE</small>

          <h2 className="memory-detail-title">
            <img
              src={selectedCategory.emoji}
              alt=""
              className="memory-detail-image"
            />
            <span>{selectedCategory.title}</span>
          </h2>
          </div>
        </div>

        <div className="memory-detail-content">

          {/* BETTER CHOICES */}

          <div className="food-detail-box">
            <h3 className="better-title">
              ✓ Better Choices
            </h3>

            {(selectedCategory.choose || []).map((food) => (
              <div
                className="food-detail-item"
                key={food}
              >
                <span className="food-check-icon">
                  ✓
                </span>

                <span>{food}</span>
              </div>
            ))}
          </div>


          {/* LIMIT / AVOID */}

          <div className="food-detail-box avoid-box">
            <h3 className="avoid-title">
              ⚠ Limit / Avoid
            </h3>

            {(selectedCategory.limit || []).map((food) => (
              <div
                className="food-detail-item"
                key={food}
              >
                <span className="food-warning-icon">
                  !
                </span>

                <span>{food}</span>
              </div>
            ))}
          </div>


          {/* HOW TO EAT */}

          <div className="food-detail-box">
            <h3 className="info-title">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1E124A"><path d="M185-120q-12 0-23.5-5T142-138l-28-28q-10-10-5-22t19-12h704q14 0 19 12t-5 22l-28 28q-8 8-19.5 13t-23.5 5H185Zm-65-120q6-18 16-34t24-30v-296h-10q-13 0-21.5-8.5T120-630q0-13 8.5-21.5T150-660h10v-30h-10q-13 0-21.5-8.5T120-720q0-13 8.5-21.5T150-750h10v-30h-10q-13 0-21.5-8.5T120-810q0-13 8.5-21.5T150-840h250q33 0 56.5 23.5T480-760v10h330q13 0 21.5 8.5T840-720q0 13-8.5 21.5T810-690H480v10q0 33-23.5 56.5T400-600h-80v244q14 2 28 6t26 12q26-65 83-103.5T583-480q90 0 153.5 61.5T800-268v28H120Zm334-80h252q-17-36-50-58t-73-22q-42 0-77 21t-52 59ZM320-750h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-100-90h40v-30h-40v30Zm0 90h40v-30h-40v30Zm0 314q10-5 19.5-7.5T260-358v-242h-40v254Zm360 26Z"/></svg> How to Eat
            </h3>

            <p className="food-description">
              {selectedCategory.eat}
            </p>
          </div>


          {/* HOW TO COOK */}

          <div className="food-detail-box">
            <h3 className="info-title">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1A10"><path d="M149-680q-26-31-37.5-59T99-800q0-17 12.5-28.5T141-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T260-600q-1 17-14 28.5T216-560q-14 0-22.5-12t-8.5-27q0-23-9.5-42T149-680Zm161 0q-26-31-38-59t-13-61q0-17 12.5-28.5T301-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T420-600q-1 17-14 28.5T376-560q-14 0-22.5-12t-8.5-27q1-23-8.5-42T310-680Zm160 0q-26-31-38-59t-13-61q0-17 12.5-28.5T461-840q15 0 24.5 12t9.5 28q0 20 7 37t24 37q30 36 42.5 64.5T580-600q-1 17-14 28.5T536-560q-14 0-22.5-12t-8.5-27q1-23-8.5-42T470-680ZM200-160q-50 0-85-35t-35-85v-160q0-17 11.5-28.5T120-480h521q5-34 27-59.5t54-36.5l147-49q16-5 31 2t20 23q5 16-2.5 31T894-549l-147 49q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg> How to Cook
            </h3>

            <p className="food-description">
              {selectedCategory.cook}
            </p>
          </div>


          {/* IMPORTANT */}

          <div className="food-note">
            <strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55"><path d="M508.5-291.5Q520-303 520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280q17 0 28.5-11.5Zm0-320Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>   Important</strong>

            <p>
              {selectedCategory.note}
            </p>
          </div>


          {/* WATER */}

          {selectedCategory.title === "Beverages" && (
            <div className="water-reminder">

              <div className="water-large-icon">
                💧
              </div>

              <div>
                <strong>
                  2 Liters Per Day
                </strong>

                <p>
                  If your healthcare team specifically
                  instructed you to drink 2 liters per day,
                  spread the amount throughout the day.
                  Do not force fluids if you have been
                  given a fluid restriction.
                </p>
              </div>

            </div>
          )}

        </div>
      </section>
    );

    
  }

  


  /* =========================================================
     MAIN MEMORY SCREEN
  ========================================================= */

  return (
    <section className="memory-screen">

      {/* HEADER */}

      <div className="memory-header-row">

        <div className="memory-header">

          <small>
            HEALTHY FOOD GUIDE
          </small>

          <h2>
            Food Guide
          </h2>

          <p className="intro">
            Choose better foods, one meal at a time.
          </p>

        </div>


        {/* SEARCH */}

        <div className="food-search">

          <span
            className="search-icon"
            aria-hidden="true"
          >
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#51abd2"><path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM731-229q29-29 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29t71-29ZM320-380Zm120-260Z"/></svg>          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search food or drink..."
            aria-label="Search food or drink"
          />

          {searchTerm && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1A10"><path d="m480-424 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L536-480l116-116q11-11 11-28t-11-28q-11-11-28-11t-28 11L480-536 364-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l116 116-116 116q-11 11-11 28t11 28q11 11 28 11t28-11l116-116Zm0 344q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
          )}

        </div>

      </div>


      {/* SEARCH RESULTS */}

      {searchTerm.trim() !== "" && (
        <div className="search-results">

          <h3>
           
          </h3>

          {searchResults.length === 0 ? (

            <div className="no-search-results">
              No food or drink found.
              <br />
              <small>
                Try another food or drink name.
              </small>
            </div>

          ) : (

            <div>
              {searchResults.map((result, index) => (

                <button
                  type="button"
                  className="search-result-item"
                  key={`${result.category.title}-${result.food}-${index}`}
                  onClick={() => {
                    scrollToTop();
                    setSelectedCategory(result.category);
                    setSearchTerm("");
                  }}
                >

                  <div className="search-result-info">

                  <img
                    src={result.category.emoji}
                    alt=""
                    className="search-result-emoji"
                  />

                    <div className="search-result-text">

                      <strong>
                        {result.food}
                      </strong>

                      <small>
                        {result.category.title}
                      </small>

                    </div>

                  </div>


                  <span
                    className={
                      result.status === "Better Choice"
                        ? "status-badge better"
                        : "status-badge avoid"
                    }
                  >
                    {result.status === "Better Choice"
                      ? "✓ Better Choice"
                      : "⚠ Limit / Avoid"}
                  </span>

                </button>

              ))}
            </div>

          )}

        </div>
      )}


      {/* FOOD CATEGORIES */}

      <div className="memory-content">

        <h3 className="food-category-title">
          Food Categories
        </h3>

        <div className="food-grid">

          {categories.map((category) => (

            <button
              type="button"
              className="food-card"
              key={category.title}
              onClick={() => {
                setSelectedCategory(category);
                scrollToTop();
              }}
            >

              <div className="food-image">
                <img
                  src={category.emoji}
                  alt={category.title}
                />
              </div>

              <span>
                {category.title}
              </span>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MemoryScreen;