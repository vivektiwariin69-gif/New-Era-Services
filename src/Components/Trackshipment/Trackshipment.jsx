import "./Trackshipment.css";
import { FaBoxOpen, FaClock, FaMapMarkerAlt, FaTruck } from "react-icons/fa";

function TrackShipment() {
  return (
    <section className="tracking-section">
      <div className="tracking-card">

        <div className="tracking-icon">
          <FaBoxOpen />
        </div>

        <h2>Enter Your Tracking Number</h2>

        <p>
          Your tracking number was sent in your shipping confirmation
          email. It starts with "SW-".
        </p>

        

        <div className="tracking-features">

          <div className="feature-box">
            <FaClock />
            <span>Updated every 30 min</span>
          </div>

          <div className="feature-box">
            <FaMapMarkerAlt />
            <span>GPS location data</span>
          </div>

          <div className="feature-box">
            <FaTruck />
            <span>Driver details on day</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrackShipment;