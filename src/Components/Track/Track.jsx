import React from "react";
import "./Track.css";
import {
  FaSearch,
  FaTruck,
  FaMapMarkerAlt,
  FaBoxOpen,
} from "react-icons/fa";

function Track() {
  return (
    <section id="track">

      <div className="track-container">

        <span className="track-tag">
          TRACK SHIPMENT
        </span>

        <h1>
          Where Is My
          <span> Package?</span>
        </h1>

        <p className="track-desc">
          Track your shipment in real-time with accurate
          location updates, delivery status, and estimated
          arrival information.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter Tracking ID (NE-123456)"
          />

          <button>
            <FaSearch />
            Track Now
          </button>

        </div>

        <div className="features">

          <div className="feature">
            <FaTruck />
            <span>Live Delivery Updates</span>
          </div>

          <div className="feature">
            <FaMapMarkerAlt />
            <span>GPS Tracking</span>
          </div>

          <div className="feature">
            <FaBoxOpen />
            <span>Secure Shipment</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Track;