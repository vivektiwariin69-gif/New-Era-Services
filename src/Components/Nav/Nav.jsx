import React, { useState } from "react";
import "./Nav.css";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="navbar">
      <div className="logo">
        <h3>
          New Era <span>Services</span>
        </h3>
      </div>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>Services</li>
        <li>Track Order</li>
        <li>Contact Us</li>
      </div>

      <div className="right123">
        <div className="phone">
          <FaPhone />
          <span>9891859987</span>
        </div>

        <button>Track Shipment</button>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Nav;