import React from "react";

function MemoryScreen() {

  const foods = [
    {
      emoji: "🍕",
      title: "Pizza Nights"
    },

    {
      emoji: "🍰",
      title: "Dessert Dates"
    },

    {
      emoji: "☕",
      title: "Coffee Together"
    },

    {
      emoji: "🍜",
      title: "Late Night Food"
    }
  ];


  return (
    <section className="memory-screen">

      <div className="memory-header">

        <div className="back">
          ←
        </div>


        <div className="memory-title">

          <small>
            Our favorite things
          </small>

          <h2>
            Little Moments ♡
          </h2>

        </div>

      </div>


      <div className="memory-content">

        <h3>
          Our Favorite Dates
        </h3>


        <div className="food-grid">

          {foods.map((food) => (

            <div
              className="food-card"
              key={food.title}
            >

              <div className="food-emoji">
                {food.emoji}
              </div>

              <span>
                {food.title}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MemoryScreen;