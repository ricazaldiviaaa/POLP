import React from "react";
import "./PhotosScreen";
import "../css/AnniversaryModal.css";
import "../css/Responsive.css";

function PhotosScreen() {
  return (
    <section className="photos-screen">

      <div className="photos-header">
        <small>OUR STORY</small>

        <h2>Favorite Photos ♡</h2>
      </div>

      <div className="photo-grid">

        <div className="photo-placeholder photo-one">♡</div>
        <div className="photo-placeholder photo-two">♡</div>
        <div className="photo-placeholder photo-three">♡</div>
        <div className="photo-placeholder photo-four">♡</div>

      </div>

    </section>
  );
}

export default PhotosScreen;