import "./Trackshipment.css";
import {
  FaBoxOpen,
  FaClock,
  FaMapMarkerAlt,
  FaTruck,
  FaSearch,
} from "react-icons/fa";

function TrackShipment() {
  return (
    <section className="tracking-section">
      <div className="tracking-card">

        <div className="tracking-icon">
          <FaBoxOpen />
        </div>

        <span className="tracking-badge">
          LIVE SHIPMENT TRACKING
        </span>

        <h2>Track Your Shipment</h2>

        <p>
          Enter your tracking number below and get
          real-time updates about your package location,
          delivery status, and estimated arrival time.
        </p>

        {/* <div className="tracking-input">
          <input
            type="text"
            placeholder="Enter Tracking ID (NE-123456)"
          />

          <button>
            <FaSearch />
            Track
          </button>
        </div> */}

        <div className="tracking-features">

          <div className="feature-box">
            <FaClock />
            <h4>Real-Time Updates</h4>
            <span>
              Shipment status refreshed every 30 minutes.
            </span>
          </div>

          <div className="feature-box">
            <FaMapMarkerAlt />
            <h4>Live Location</h4>
            <span>
              Track your package with GPS location data.
            </span>
          </div>

          <div className="feature-box">
            <FaTruck />
            <h4>Delivery Details</h4>
            <span>
              Driver & estimated arrival information.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrackShipment;