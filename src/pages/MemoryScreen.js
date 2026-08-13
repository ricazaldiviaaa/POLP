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


function MemoryScreen() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("");


  // =========================================================
  // ALL FOOD CATEGORIES
  // =========================================================

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
    highUricAcid
  ];


  // =========================================================
  // SEARCH RESULTS
  // =========================================================

  const searchResults = categories.flatMap((category) => {

    const betterMatches = (category.choose || [])
      .filter((food) =>
        food.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((food) => ({
        food,
        category,
        status: "Better Choice"
      }));


    const limitMatches = (category.limit || [])
      .filter((food) =>
        food.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((food) => ({
        food,
        category,
        status: "Limit / Avoid"
      }));


    return [
      ...betterMatches,
      ...limitMatches
    ];

  });


  // =========================================================
  // CATEGORY DETAIL SCREEN
  // =========================================================

  if (selectedCategory) {

    return (

      <section className="memory-screen">

        {/* =================================================
            DETAIL HEADER
        ================================================= */}

        <div
          className="memory-detail-header"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >

          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            aria-label="Go back"
            style={{
              width: "36px",
              height: "36px",
              minWidth: "36px",
              borderRadius: "50%",
              background: "#fff0f6",
              border: "1px solid #f2bfd5",
              outline: "none",
              boxShadow:
                "0 3px 10px rgba(220,120,160,0.10)",
              cursor: "pointer",
              fontSize: "20px",
              color: "#b84f7d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ←
          </button>


          <div className="memory-title">

            <small>
              FOOD GUIDE
            </small>

            <h2>
              {selectedCategory.emoji} {selectedCategory.title}
            </h2>

          </div>

        </div>


        {/* =================================================
            DETAIL CONTENT
        ================================================= */}

        <div
          className="memory-content"
          style={{
            maxWidth: "750px",
            margin: "0 auto"
          }}
        >

          {/* =================================================
              BETTER CHOICES
          ================================================= */}

          <div
            className="food-detail-box"
            style={{
              background: "#ffffff",
              border: "1px solid #f2c2d5",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "16px",
              boxShadow:
                "0 5px 18px rgba(210,110,150,0.07)"
            }}
          >

            <h3
              style={{
                margin: "0 0 12px",
                color: "#4d8b68",
                fontSize: "18px"
              }}
            >
              ✓ Better Choices
            </h3>


            {selectedCategory.choose.map((food) => (

              <div
                className="food-detail-item"
                key={food}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "9px 0",
                  borderBottom:
                    "1px solid #f5edf1",
                  color: "#4d4550",
                  lineHeight: "1.45"
                }}
              >

                <span
                  style={{
                    minWidth: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#e9f8ef",
                    color: "#4d9b6c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  ✓
                </span>

                <span>
                  {food}
                </span>

              </div>

            ))}

          </div>


          {/* =================================================
              LIMIT / AVOID
          ================================================= */}

          <div
            className="food-detail-box avoid-box"
            style={{
              background: "#fffafb",
              border: "1px solid #f2c2cd",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "16px",
              boxShadow:
                "0 5px 18px rgba(210,110,150,0.06)"
            }}
          >

            <h3
              style={{
                margin: "0 0 12px",
                color: "#c05b70",
                fontSize: "18px"
              }}
            >
              ⚠ Limit / Avoid
            </h3>


            {selectedCategory.limit.map((food) => (

              <div
                className="food-detail-item"
                key={food}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "9px 0",
                  borderBottom:
                    "1px solid #f7e8ec",
                  color: "#594c52",
                  lineHeight: "1.45"
                }}
              >

                <span
                  style={{
                    minWidth: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#fff0f2",
                    color: "#d06a7b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  !
                </span>

                <span>
                  {food}
                </span>

              </div>

            ))}

          </div>


          {/* =================================================
              HOW TO EAT
          ================================================= */}

          <div
            className="food-detail-box"
            style={{
              background: "#ffffff",
              border: "1px solid #f2c2d5",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "16px",
              boxShadow:
                "0 5px 18px rgba(210,110,150,0.07)"
            }}
          >

            <h3
              style={{
                margin: "0 0 10px",
                color: "#8d5a76",
                fontSize: "18px"
              }}
            >
              🍽 How to Eat
            </h3>

            <p
              style={{
                margin: 0,
                color: "#5b5158",
                lineHeight: "1.7"
              }}
            >
              {selectedCategory.eat}
            </p>

          </div>


          {/* =================================================
              HOW TO COOK
          ================================================= */}

          <div
            className="food-detail-box"
            style={{
              background: "#ffffff",
              border: "1px solid #f2c2d5",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "16px",
              boxShadow:
                "0 5px 18px rgba(210,110,150,0.07)"
            }}
          >

            <h3
              style={{
                margin: "0 0 10px",
                color: "#8d5a76",
                fontSize: "18px"
              }}
            >
              🍳 How to Cook
            </h3>

            <p
              style={{
                margin: 0,
                color: "#5b5158",
                lineHeight: "1.7"
              }}
            >
              {selectedCategory.cook}
            </p>

          </div>


          {/* =================================================
              IMPORTANT NOTE
          ================================================= */}

          <div
            className="food-note"
            style={{
              background: "#fff8df",
              border: "1px solid #f2d98d",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "16px"
            }}
          >

            <strong
              style={{
                color: "#96762c",
                fontSize: "17px"
              }}
            >
              💡 Important
            </strong>

            <p
              style={{
                color: "#695f45",
                lineHeight: "1.65",
                margin: "8px 0 0"
              }}
            >
              {selectedCategory.note}
            </p>

          </div>


          {/* =================================================
              WATER REMINDER
          ================================================= */}

          {selectedCategory.title === "Beverages" && (

            <div
              className="water-reminder"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background:
                  "linear-gradient(135deg, #eaf8ff, #f5edff)",
                border: "1px solid #b9dff2",
                borderRadius: "20px",
                padding: "18px",
                marginBottom: "10px"
              }}
            >

              <div
                className="water-large-icon"
                style={{
                  width: "58px",
                  height: "58px",
                  minWidth: "58px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px"
                }}
              >
                💧
              </div>


              <div>

                <strong
                  style={{
                    color: "#397c9d",
                    fontSize: "18px"
                  }}
                >
                  2 Liters Per Day
                </strong>

                <p
                  style={{
                    color: "#52636b",
                    lineHeight: "1.55",
                    margin: "6px 0 0"
                  }}
                >
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


  // =========================================================
  // MAIN CATEGORY SCREEN
  // =========================================================

  return (

    <section className="memory-screen">


      {/* =================================================
          MAIN HEADER + SEARCH
      ================================================= */}

      <div
        className="memory-header-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
          marginBottom: "25px"
        }}
      >

        {/* MAIN HEADER */}

        <div
          className="memory-header"
          style={{
            flex: "1"
          }}
        >

          <small>
            HEALTHY FOOD GUIDE
          </small>

          <h2>
            Food Guide ♡
          </h2>

          <p className="intro">
            Choose better foods, one meal at a time.
          </p>

        </div>


        {/* =================================================
            SEARCH BAR
        ================================================= */}

        <div
          className="food-search"
          style={{
            width: "320px",
            maxWidth: "100%",
            position: "relative"
          }}
        >

          <span
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              pointerEvents: "none"
            }}
          >
          </span>


          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search food or drink..."
            aria-label="Search food or drink"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px 42px",
              borderRadius: "25px",
              border: "1px solid #f2c2d5",
              outline: "none",
              background: "#ffffff",
              color: "#594c52",
              fontSize: "14px",
              boxShadow:
                "0 4px 12px rgba(190,100,145,0.08)"
            }}
          />


          {/* CLEAR BUTTON */}

          {searchTerm && (

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                border: "none",
                background: "#fff0f6",
                color: "#b84f7d",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px"
              }}
            >
              ×
            </button>

          )}

        </div>

      </div>


      {/* =================================================
          SEARCH RESULTS
      ================================================= */}

      {searchTerm.trim() !== "" && (

        <div
          className="search-results"
          style={{
            maxWidth: "1000px",
            margin: "0 auto 25px",
            background: "#ffffff",
            border: "1px solid #f2c2d5",
            borderRadius: "20px",
            padding: "18px",
            boxShadow:
              "0 5px 18px rgba(210,110,150,0.07)"
          }}
        >

          <h3
            style={{
              margin: "0 0 15px",
              color: "#633f51",
              fontSize: "18px"
            }}
          >
            Search Results
          </h3>


          {searchResults.length === 0 ? (

            <div
              style={{
                padding: "15px 5px",
                color: "#8a737d",
                textAlign: "center"
              }}
            >
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
                  key={`${result.category.title}-${result.food}-${index}`}
                  onClick={() => {
                    setSelectedCategory(result.category);
                    setSearchTerm("");
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    padding: "12px 8px",
                    border: "none",
                    borderBottom:
                      "1px solid #f5edf1",
                    background: "transparent",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >

                  {/* FOOD NAME */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      minWidth: 0
                    }}
                  >

                    <span
                      style={{
                        fontSize: "27px",
                        flexShrink: 0
                      }}
                    >
                      {result.category.emoji}
                    </span>


                    <div
                      style={{
                        minWidth: 0
                      }}
                    >

                      <strong
                        style={{
                          display: "block",
                          color: "#594c52",
                          fontSize: "14px",
                          marginBottom: "3px"
                        }}
                      >
                        {result.food}
                      </strong>

                      <small
                        style={{
                          color: "#9a808b",
                          fontSize: "12px"
                        }}
                      >
                        {result.category.title}
                      </small>

                    </div>

                  </div>


                  {/* STATUS */}

                  <span
                    style={{
                      padding: "7px 11px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",

                      background:
                        result.status === "Better Choice"
                          ? "#e9f8ef"
                          : "#fff0f2",

                      color:
                        result.status === "Better Choice"
                          ? "#4d9b6c"
                          : "#c05b70"
                    }}
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


      {/* =================================================
          FOOD CATEGORY CONTENT
      ================================================= */}

      <div
        className="memory-content"
        style={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >

        <h3
          style={{
            color: "#633f51",
            fontSize: "20px",
            margin: "0 0 16px"
          }}
        >
          Food Categories
        </h3>


        {/* =================================================
            FOOD GRID
        ================================================= */}

        <div
          className="food-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "14px",
            width: "100%"
          }}
        >

          {categories.map((category) => (

            <button
              type="button"
              className="food-card"
              key={category.title}
              onClick={() =>
                setSelectedCategory(category)
              }
              style={{
                border: "1px solid #f2c2d5",
                outline: "none",
                background: "#ffffff",
                borderRadius: "18px",
                padding: "16px 8px",
                minHeight: "120px",
                width: "100%",
                cursor: "pointer",
                boxShadow:
                  "0 5px 16px rgba(190,100,145,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >

              <div
                className="food-emoji"
                style={{
                  fontSize: "34px",
                  marginBottom: "9px"
                }}
              >
                {category.emoji}
              </div>


              <span
                style={{
                  display: "block",
                  color: "#664557",
                  fontSize: "13px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  textAlign: "center"
                }}
              >
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