import React, { useState } from "react";
import "./App.css";

// =========================================================
// PAGES
// =========================================================

import HomeScreen from "./pages/HomeScreen";
import MemoryScreen from "./pages/MemoryScreen";
import AnniversaryScreen from "./pages/AnniversaryScreen";
import PhotosScreen from "./pages/PhotosScreen";
import AnniversaryModal from "./pages/AnniversaryModal";

// =========================================================
// COMPONENTS
// =========================================================

import BottomNav from "./components/BottomNav";


// =========================================================
// ANNIVERSARY DATA
// =========================================================

const anniversaryMessages = {
  1: {
    title: "1st Anniversary",
    icon: "💌",
    text:
      "One year of us. One year of laughter, adventures, little arguments, warm hugs and beautiful memories. I would choose you all over again. ❤️",
  },

  2: {
    title: "2nd Anniversary",
    icon: "💕",
    text:
      "Two years together, and my favorite thing is that there are still so many memories waiting for us. Thank you for being my person. 💕",
  },

  3: {
    title: "3rd Anniversary",
    icon: "💖",
    text:
      "Three years, countless memories, and one person I never want to stop choosing. Happy anniversary, my love. Here's to everything still waiting for us. 💖",
  },
};


// =========================================================
// MAIN APP
// =========================================================

function App() {

  /*
    The first screen shown when the app opens.
  */

  const [active, setActive] = useState("home");


  /*
    Stores the anniversary year selected
    by the user.
  */

  const [selectedYear, setSelectedYear] =
    useState(null);

  // OPEN ANNIVERSARY MESSAGE

  const showMessage = (year) => {
    setSelectedYear(year);
  };

  // CLOSE ANNIVERSARY MESSAGE

  const closeModal = () => {
    setSelectedYear(null);
  };


  return (

    <main className="page">

      <div className="app-container">


        {/* =================================================
            HOME
        ================================================= */}

        {active === "home" && (

          <HomeScreen
            setActive={setActive}
          />

        )}


        {/* =================================================
            ANNIVERSARIES
        ================================================= */}

        {active === "search" && (

          <AnniversaryScreen
            onSelect={showMessage}
          />

        )}


        {/* =================================================
            FOOD / CKD GUIDE
        ================================================= */}

        {active === "food" && (

          <MemoryScreen />

        )}


        {/* =================================================
            PHOTOS
        ================================================= */}

        {active === "photos" && (

          <PhotosScreen />

        )}


        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <BottomNav
          active={active}
          setActive={setActive}
        />

      </div>


      {/* =================================================
          ANNIVERSARY MODAL
      ================================================= */}

      <AnniversaryModal
        selectedYear={selectedYear}
        onClose={closeModal}
        anniversaryMessages={anniversaryMessages}
      />

    </main>

  );
}


export default App;