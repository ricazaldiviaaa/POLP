import React from "react";
import "../css/HomeScreen.css";
import "./../css/Responsive.css";

import photo1 from "../assets/photos/1.jpg";
import photo2 from "../assets/photos/2.jpg";
import photo3 from "../assets/photos/3.jpg";
import photo4 from "../assets/photos/4.jpg";
import photo5 from "../assets/photos/6.jpg";

import beverages from "../data/beverages";
import anniversaryDataa from "../data/anniversaryData";

function HomeScreen({ setActive }) {

  const foodData = beverages;

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
                <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="24px" fill="#7ebbe9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
            </div>

            <div className="floating-heart heart-b">
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="24px" fill="#7ebbe9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
            </div>

            <div className="floating-heart heart-c">
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="24px" fill="#7ebbe9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </span>

            <div>

              <strong>
                23
              </strong>

              <small>
                Little moments
              </small>

            </div>

          </div>


          <div className="stat-item">

            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
            </span>

            <div>

              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="24px" fill="#3f3030"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/></svg>
              </strong>

              <small>
                Memories to keep
              </small>

            </div>

          </div>


          <div className="stat-item">

            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="12px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14.69,2.21L4.33,11.49c-0.64,0.58-0.28,1.65,0.58,1.73L13,14l-4.85,6.76c-0.22,0.31-0.19,0.74,0.08,1.01h0 c0.3,0.3,0.77,0.31,1.08,0.02l10.36-9.28c0.64-0.58,0.28-1.65-0.58-1.73L11,10l4.85-6.76c0.22-0.31,0.19-0.74-0.08-1.01l0,0 C15.47,1.93,15,1.92,14.69,2.21z"/></g></g></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="12px" viewBox="0 0 24 24" width="24px" fill="#8C1A10"><g><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></g></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#51abd2"><path d="M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z" fill="none"/><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"/></svg>
              </span>

            </div>


<div className="food-display">

  <div className="food-circle">

    <img
      src={photo5}
      alt="A special moment"
    />

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
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#51abd2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"/></svg>
              </span>

            </div>


            <div className="timeline">

              {Object.values(anniversaryDataa).map((anniversary) => (

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

  </div>


  <div className="gallery-grid">

    <div className="gallery-photo gallery-one">
      <img
        src={photo1}
        alt="Our memory 1"
      />
    </div>

    <div className="gallery-photo gallery-two">
      <img
        src={photo2}
        alt="Our memory 2"
      />
    </div>

    <div className="gallery-photo gallery-three">
      <img
        src={photo3}
        alt="Our memory 3"
      />
    </div>

    <div className="gallery-photo gallery-four">
      <img
        src={photo4}
        alt="Our memory 4"
      />
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