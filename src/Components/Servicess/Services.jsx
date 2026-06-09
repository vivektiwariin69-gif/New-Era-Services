import React from "react";
import {
  FaTruck,
  FaGlobe,
  FaCube,
  FaShieldAlt,
  FaClock,
  FaChartBar,
} from "react-icons/fa";

import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaTruck />,
      title: "Express Delivery",
      desc: "Same-day and next-day domestic delivery across all 50 states. Your urgent shipments arrive on time, guaranteed.",
    },
    {
      icon: <FaGlobe />,
      title: "International Cargo",
      desc: "Freight forwarding and customs clearance to 180+ countries. Air, sea, and road options tailored to your needs.",
    },
    {
      icon: <FaCube />,
      title: "Real-Time Tracking",
      desc: "Track every shipment live with GPS precision. Get automatic SMS and email alerts at each milestone.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insured Shipments",
      desc: "Full cargo insurance up to $500,000. Your goods are protected from pickup to final delivery.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Operations",
      desc: "Round-the-clock logistics with dedicated support staff available any time via phone, chat, or email.",
    },
    {
      icon: <FaChartBar />,
      title: "Analytics Dashboard",
      desc: "Business accounts get full analytics: spend reports, volume summaries, and SLA tracking in one portal.",
    },
  ];

  return (
    <section className="services">
      <span className="services-tag">WHAT WE OFFER</span>

      <h2 className="services-heading">Full-Spectrum Logistics</h2>

      <p className="services-text">
        From a single parcel to a full container, we handle every shipment with
        precision and care.
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon-box">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="service-btn">
        View All Services →
      </button>
    </section>
  );
}

export default Services;