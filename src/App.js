import React, { useState } from "react";
import "./App.css";
import "./css/Responsive.css";

import HomeScreen from "./pages/HomeScreen";
import AnniversaryScreen from "./pages/AnniversaryScreen";
import MemoryScreen from "./pages/MemoryScreen";
import PhotosScreen from "./pages/PhotosScreen";

import BottomNav from "./components/BottomNav";

function App() {
  const [active, setActive] = useState("home");

  return (
    <main className="page">

      <div className="app-container">

        <div className="page-content">

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
            <MemoryScreen setActive={setActive} />
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

  /* =========================================================
     add
  ========================================================= */
export default App;