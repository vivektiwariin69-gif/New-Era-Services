import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBox,
} from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleNavigation = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <>
      {/* CTA SECTION */}

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-container">
          {/* Column 1 */}

          <div className="footer-col">
            <div className="logo">
              <FaBox />
              <h3>New Era Services</h3>
            </div>

            <p>
              Reliable courier and cargo transport solutions worldwide.
              Delivering trust, speed, and safety since 2005.
            </p>

            {/* <div className="socials">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaInstagram />
              </a>
            </div> */}
          </div>

          {/* Column 2 */}

          <div className="footer-col">
            <h4>QUICK LINKS</h4>

            <ul>
              <Link to="/" onClick={handleNavigation}>
                <li>Home</li>
              </Link>
              <Link to="/TrackOrder" onClick={handleNavigation}>
                <li>Track Order</li>
              </Link>
              <Link to="/Contact" onClick={handleNavigation}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* Column 3 */}

          <div className="footer-col">
            <h4>SERVICES</h4>

            <ul>
              <li>Express Delivery</li>
              <li>Cargo Freight</li>
              <li>International Shipping</li>
              <li>Warehousing</li>
              <li>Cold Chain Logistics</li>
              <li>Last-Mile Delivery</li>
            </ul>
          </div>

          {/* Column 4 */}

          <div className="footer-col">
            <h4>CONTACT INFO</h4>

            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>
                  B-177 , Pul Pehlad Pur , Badarpur
                  <br />
                  New Delhi -- 110044
                </span>
              </li>

              <li>
                <FaPhoneAlt />
                <span>9990858178</span>
              </li>

              <li>
                <FaEnvelope />
                <span>neweraservices345@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 New Era Services. All rights reserved.
          <span> | Privacy Policy | Terms of Service</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
