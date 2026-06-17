import React, { useState } from "react";
import "./Nav.css";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavigation = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
  

  return (
    <nav id="navbar">
      <div className="logo">
        <h3>
          
          New Era <span>Services</span>
        </h3>
      </div>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleNavigation}>
                        <li>Home</li>
                      </Link>
                      <Link to="/TrackOrder" onClick={handleNavigation}>
                        <li>Track Order</li>
                      </Link>
                      <Link to="/Contact" onClick={handleNavigation}>
                        <li>Contact Us</li>
                      </Link>
        
        
        
      </div>

      <div className="right123">
        <div className="phone">
          <FaPhone />
          <span> <a href="tel:+919891859987">
    +91 9891859987
  </a></span>
        </div>

        <Link to="/TrackOrder"><button>Track Shipment</button></Link>

        
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