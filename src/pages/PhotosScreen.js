import React, { useState } from "react";

import "../css/PhotosScreen.css";
import "../css/Responsive.css";

import photo1 from "../assets/photos/1.jpg";
import photo2 from "../assets/photos/2.jpg";
import photo3 from "../assets/photos/3.jpg";
import photo4 from "../assets/photos/4.jpg";
import photo5 from "../assets/photos/5.jpg";
import photo6 from "../assets/photos/6.jpg";
import photo7 from "../assets/photos/7.jpg";
import photo8 from "../assets/photos/8.jpg";
import photo9 from "../assets/photos/9.jpg";
import photo10 from "../assets/photos/10.jpg";
import photo11 from "../assets/photos/11.jpg";
import photo12 from "../assets/photos/12.jpg";
import photo13 from "../assets/photos/13.jpg";
import photo14 from "../assets/photos/14.jpg";
import photo15 from "../assets/photos/15.jpg";
import photo16 from "../assets/photos/16.jpg";
import photo17 from "../assets/photos/17.jpg";
import photo18 from "../assets/photos/18.jpg";
import photo19 from "../assets/photos/19.jpg";
import photo20 from "../assets/photos/20.jpg";
import photo21 from "../assets/photos/21.jpg";
import photo22 from "../assets/photos/22.jpg";
import photo23 from "../assets/photos/23.jpg";

function PhotosScreen() {

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    { id: 1, image: photo1, caption: "The first gala w/o label (2023)" },
    { id: 2, image: photo2, caption: "First Anniversary" },
    { id: 3, image: photo3, caption: "Tagaytay the Christmas gala" },
    { id: 4, image: photo4, caption: "First Valentine's Day" },
    { id: 5, image: photo5, caption: "My lovey's 22nd birthday" },
    { id: 6, image: photo6, caption: "UGames. I think it's 3rd times or 2nd?" },
    { id: 7, image: photo7, caption: "Our 2nd Anniversary Celebration" },
    { id: 8, image: photo8, caption: "First time in Esplanade" },
    { id: 9, image: photo9, caption: "701 Bilyaran. Adik pa sa bilyar" },
  { id: 10, image: photo10, caption: "First and last gym HAHAHAHAHA" },
    { id: 11, image: photo11, caption: "Montemaria. Our 2nd Christmas gala" },
    { id: 12, image: photo12, caption: "Post-Christamas gala w/ my lalab's fam" },
    { id: 13, image: photo13, caption: "Angono Rizal. The first airbnb w/ sweet palettes" },
    { id: 14, image: photo14, caption: "Coffee shop hangout" },
    { id: 15, image: photo15, caption: "2nd time of swimming" },
    { id: 16, image: photo16, caption: "Random photos from my friend's birthday" },
    { id: 17, image: photo17, caption: "Valentine's Day gala in Esplanade" },
    { id: 18, image: photo18, caption: "Mama's Birthday" },
    { id: 19, image: photo19, caption: "Swimmingggg but make it short time HAHAHAHAHA" },
    { id: 20, image: photo20, caption: "The always tambay in Lotus Mall" },
    { id: 21, image: photo21, caption: "Papa's Birthday" },
    { id: 22, image: photo22, caption: "Tita Joie's suddenly gala" },
    { id: 23, image: photo23, caption: "Second Anniversary" },
  ];

  return (
    <section className="photos-screen">

      {/* HEADER */}
      <header className="photos-header">

        <span className="photos-kicker">
          OUR LITTLE ARCHIVE
        </span>

        <h1>
          Moments
        </h1>

        <p>
          Little pieces of our story,
          kept here forever.
        </p>

      </header>


      {/* INTRO NOTE */}
      <div className="photo-letter">

        <div className="letter-top">
          <span>FOR US</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="15px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></span>
        </div>

        <p>
          I could never choose just one favorite
          memory. So I kept them all.
        </p>

        <div className="letter-line"></div>

        <small>
          @our.aeon
        </small>

      </div>


      {/* PHOTO COUNT */}
      <div className="photo-section-heading">

        <div>
          <span>THE COLLECTION</span>
          <h2>OUR PHOTO DIARY</h2>
        </div>

        <strong>
          {photos.length}
          <small>memories</small>
        </strong>

      </div>


      {/* PHOTO GRID */}
      <div className="photo-collage">

        {photos.map((photo, index) => (

          <button
            type="button"
            className={`memory-polaroid memory-${(index % 6) + 1}`}
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            aria-label={`Open ${photo.caption}`}
          >

            <div className="photo-frame">

              <img
                src={photo.image}
                alt={photo.caption}
              />

              <div className="photo-overlay">
                <span>View</span>
              </div>

            </div>

            <div className="polaroid-caption">

              <span className="memory-number">
                {String(photo.id).padStart(2, "0")}
              </span>

              <p>
                {photo.caption}
              </p>

              <span className="tiny-heart">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="8px" fill="#8C1A10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </span>

            </div>

          </button>

        ))}

      </div>


{/* =================================================
    PHOTO MODAL
================================================= */}

{selectedPhoto && (

  <div
    className="photo-viewer"
    onClick={() => setSelectedPhoto(null)}
  >

    <div
      className="viewer-card"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}

      <button
        type="button"
        className="viewer-close"
        onClick={() => setSelectedPhoto(null)}
        aria-label="Close photo"
      >
        ×
      </button>


      {/* TOP DECORATION */}

      <div className="viewer-decoration viewer-decoration-one"></div>

      <div className="viewer-decoration viewer-decoration-two"></div>


      {/* IMAGE */}

      <div className="viewer-image-wrap">

        <div className="viewer-image-frame">

          <img
            src={selectedPhoto.image}
            alt={selectedPhoto.caption}
          />

        </div>

      </div>


      {/* CONTENT */}

      <div className="viewer-details">

        <div className="viewer-memory-row">

          <span className="viewer-memory-number">
            MEMORY {String(selectedPhoto.id).padStart(2, "0")}
          </span>

          <span className="viewer-heart">
            ♡
          </span>

        </div>


        <h2 className="viewer-title">
          {selectedPhoto.caption}
        </h2>


        <p className="viewer-message">
          A little moment I want to remember forever.
        </p>


        {/* BOTTOM DECORATION */}

        <div className="viewer-footer">

          <span></span>

          <span>OUR LITTLE MEMORY</span>

          <span></span>

        </div>

      </div>

    </div>

  </div>

      )}

    </section>
  );
}

export default PhotosScreen;