import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Ready to Ship Your First Package?</h2>

          <p>
            Join thousands of businesses that trust New Era Services
            for fast, secure, and reliable delivery solutions.
          </p>
        </div>

        <div className="cta-buttons">
          <Link to="/Contact">
            <button className="create-btn">
              Contact Us
            </button>
          </Link>

          <Link to="/TrackOrder">
            <button className="track-btn">
              Track Shipment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;