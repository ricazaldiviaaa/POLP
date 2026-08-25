import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import "./css/Responsive.css";

import HomeScreen from "./pages/HomeScreen";
import AnniversaryScreen from "./pages/AnniversaryScreen";
import MemoryScreen from "./pages/MemoryScreen";
import PhotosScreen from "./pages/PhotosScreen";

import BottomNav from "./components/BottomNav";


function App() {
  const [active, setActive] = useState("home");

  const pageContentRef = useRef(null);


  /* =========================================================
     SCROLL TO TOP WHEN PAGE CHANGES
  ========================================================= */

const scrollToTop = () => {
  if (pageContentRef.current) {
    pageContentRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

useEffect(() => {
  scrollToTop();
}, [active]);


  return (
    <main className="page">

      <div className="app-container">

        {/* =================================================
            SCROLLABLE PAGE CONTENT
        ================================================= */}

        <div
          className="page-content"
          ref={pageContentRef}
        >

          {/* HOME */}
          {active === "home" && (
            <HomeScreen setActive={setActive} />
          )}


          {/* ANNIVERSARY */}
          {active === "search" && (
            <AnniversaryScreen setActive={setActive} />
          )}


          {/* MEMORIES */}
          {active === "food" && (
              <MemoryScreen
              setActive={setActive}
              scrollToTop={scrollToTop}
            />
          )}


          {/* PHOTOS */}
          {active === "photos" && (
            <PhotosScreen setActive={setActive} />
          )}

        </div>


        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <BottomNav
          active={active}
          setActive={setActive}
        />

      </div>

    </main>
  );
}


export default App;