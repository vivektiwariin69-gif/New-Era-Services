import React from "react";
import "./Fleet.css";
import truck from "./truck.png";

function Fleet() {
  return (
    <section
      className="fleet"
      style={{
        backgroundImage: `url(${truck})`,
      }}
    >
      <div className="fleet-overlay">
        <span className="fleet-tag">OUR FLEET</span>

        <h2 className="fleet-heading">
          500+ Vehicles. Coast to Coast.
        </h2>
      </div>
    </section>
  );
}

export default Fleet;