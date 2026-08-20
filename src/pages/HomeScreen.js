import React from "react";
import "../css/HomeScreen.css";
import "./../css/Responsive.css";

import beverages from "../data/beverages";
import anniversaryData from "../data/anniversaryData";

function HomeScreen({ setActive }) {

  const foodData = beverages;
  const anniversary = anniversaryData[1];

  const handleNavigate = (screen) => {
    setActive(screen);
  };


  const handleKeyDown = (e, screen) => {

    if (e.key === "Enter" || e.key === " ") {

      e.preventDefault();

      setActive(screen);
    }
  };


  return (
    <section className="home-screen">

      <main className="home-dashboard">


        {/* =================================================
            WELCOME
        ================================================= */}

        <section className="home-welcome">

          <div className="welcome-text">

            <span className="welcome-label">
              WELCOME TO OUR LITTLE UNIVERSE
            </span>

            <h1>
              Just us,
              <br />
              <em>being us.</em>
            </h1>

            <p>
              A little place for all the memories,
              meals, adventures, and moments that
              belong to us.
            </p>

            <div className="welcome-date">

              <span>
                ♥
              </span>

              Our story, one moment at a time

            </div>

          </div>


          {/* =================================================
              WELCOME ILLUSTRATION
          ================================================= */}

          <div className="welcome-illustration">

            <div className="sun-circle"></div>

            <div className="floating-heart heart-a">
              ♡
            </div>

            <div className="floating-heart heart-b">
              ♡
            </div>

            <div className="floating-heart heart-c">
              ♡
            </div>


            <div className="couple-shape">

              <div className="mini-person person-a">

                <div className="mini-head"></div>

                <div className="mini-body"></div>

              </div>


              <div className="mini-person person-b">

                <div className="mini-head"></div>

                <div className="mini-body"></div>

              </div>


              <div className="couple-heart">
                ♥
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            LITTLE STATS
        ================================================= */}

        <section className="home-stats">


          <div className="stat-item">

            <span className="stat-icon">
              ♥
            </span>

            <div>

              <strong>
                365+
              </strong>

              <small>
                Little moments
              </small>

            </div>

          </div>


          <div className="stat-item">

            <span className="stat-icon">
              ♡
            </span>

            <div>

              <strong>
                ∞
              </strong>

              <small>
                Memories to keep
              </small>

            </div>

          </div>


          <div className="stat-item">

            <span className="stat-icon">
              ⌁
            </span>

            <div>

              <strong>
                1
              </strong>

              <small>
                Beautiful story
              </small>

            </div>

          </div>


          <div className="stat-item">

            <span className="stat-icon">
              ✦
            </span>

            <div>

              <strong>
                Us
              </strong>

              <small>
                Always
              </small>

            </div>

          </div>


        </section>


        {/* =================================================
            CONTENT GRID
        ================================================= */}

        <section className="home-content-grid">


          {/* =================================================
              FOOD / RECENT MEMORY
          ================================================= */}

          <article
            className="home-panel memory-preview clickable-panel"

            onClick={() => handleNavigate("food")}

            role="button"

            tabIndex="0"

            onKeyDown={(e) =>
              handleKeyDown(e, "food")
            }
          >

            <div className="panel-heading">

              <div>

                <span>
                  Recommendation Food
                </span>

                <h2>
                  {foodData.title}
                </h2>

              </div>

              <div className="panel-heart">
                ♡
              </div>

            </div>


            {/* FOOD IMAGE */}

            <div className="memory-photo">

              <img
                src={foodData.emoji}
                alt={foodData.title}
                className="memory-food-image"
              />

              <div className="memory-date">
              </div>

            </div>


            {/* FOOD INFORMATION */}

            <div className="memory-info">

              <div>

                <h3>
                  {foodData.choose[0]}
                </h3>

                <p>
                  {foodData.eat}
                </p>

              </div>

              <span className="memory-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#51abd2"><path d="M383-480 228-636q-11-11-11.5-27.5T228-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L284-268q-11 11-27.5 11.5T228-268q-11-11-11-28t11-28l155-156Zm264 0L492-636q-11-11-11.5-27.5T492-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L548-268q-11 11-27.5 11.5T492-268q-11-11-11-28t11-28l155-156Z"/></svg>
              </span>

            </div>

          </article>


          {/* =================================================
              LITTLE NOTE
          ================================================= */}

          <article className="home-panel note-panel">

            <span className="panel-label">
              A LITTLE NOTE
            </span>

            <div className="note-decoration">
              ❝
            </div>

            <p className="note-text">

              “No matter how ordinary the day is,
              it becomes special when I'm spending
              it with you.”

            </p>

            <div className="note-footer">

              <span>
                Made with love
              </span>

              <span>
                ♥
              </span>

            </div>

          </article>


          {/* =================================================
              OUR PHOTOS
          ================================================= */}

          <article
            className="home-panel photos-preview clickable-panel"

            onClick={() => handleNavigate("photos")}

            role="button"

            tabIndex="0"

            onKeyDown={(e) =>
              handleKeyDown(e, "photos")
            }
          >

            <div className="panel-heading">

              <div>

                <span>
                  OUR PHOTOS
                </span>

                <h2>
                  Pieces of us
                </h2>

              </div>

              <span className="food-symbol">
                ♡
              </span>

            </div>


            <div className="food-display">

              <div className="food-circle">

                <span>
                  📷
                </span>

              </div>


              <div className="food-info">

                <small>
                  OUR LITTLE GALLERY
                </small>

                <h3>
                  Moments captured
                </h3>

                <p>
                  Little snapshots from the
                  days we've shared together.
                </p>

              </div>

            </div>


            <div className="food-tags">

              <span>
                Memories
              </span>

              <span>
                Moments
              </span>

              <span>
                Together
              </span>

            </div>

          </article>


          {/* =================================================
              OUR STORY / ANNIVERSARY
          ================================================= */}
          <article
            className="home-panel timeline-panel clickable-panel"

            onClick={() => handleNavigate("search")}

            role="button"

            tabIndex="0"

            onKeyDown={(e) =>
              handleKeyDown(e, "search")
            }
          >

            <div className="panel-heading">

              <div>

                <span>
                  OUR STORY
                </span>

                <h2>
                  Little milestones
                </h2>

              </div>

              <span className="timeline-heart">
                ♥
              </span>

            </div>


            <div className="timeline">

              {Object.values(anniversaryData).map((anniversary) => (

                <div
                  className="timeline-item"
                  key={anniversary.year}
                >

                  <div className="timeline-dot"></div>

                  <div>

                    <small>
                      YEAR {anniversary.year}
                    </small>

                    <h3>
                      {anniversary.title}
                    </h3>

                    <p>
                      {anniversary.date}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </article>


        </section>


        {/* =================================================
            PHOTO STRIP
        ================================================= */}

        <section
          className="home-gallery clickable-panel"

          onClick={() => handleNavigate("photos")}

          role="button"

          tabIndex="0"

          onKeyDown={(e) =>
            handleKeyDown(e, "photos")
          }
        >

          <div className="gallery-heading">

            <div>

              <span>
                OUR LITTLE GALLERY
              </span>

              <h2>
                Pieces of us
              </h2>

            </div>

            <p>
              Little snapshots from our story.
            </p>

          </div>


          <div className="gallery-grid">

            <div className="gallery-photo gallery-one">
              <span>♡</span>
            </div>

            <div className="gallery-photo gallery-two">
              <span>♡</span>
            </div>

            <div className="gallery-photo gallery-three">
              <span>♡</span>
            </div>

            <div className="gallery-photo gallery-four">
              <span>♡</span>
            </div>

          </div>

        </section>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <section className="home-footer-message">

          <span>
            ♡
          </span>


          <div>

            <small>
              AND THE BEST PART?
            </small>

            <h2>

              We're still writing
              <em> our story.</em>

            </h2>

          </div>


          <span>
            ♡
          </span>

        </section>


      </main>

    </section>
  );
}

export default HomeScreen;