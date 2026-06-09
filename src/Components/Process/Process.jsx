import React from "react";
import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Book Your Shipment",
      desc: "Fill in pickup/delivery details online or call us. Get an instant price quote.",
    },
    {
      number: "02",
      title: "We Collect & Dispatch",
      desc: "Our driver picks up from your door. Your shipment enters our tracked network immediately.",
    },
    {
      number: "03",
      title: "Track & Receive",
      desc: "Monitor live with your tracking number. We deliver to your door with proof of delivery.",
    },
  ];

  return (
    <section className="process">
      <span className="process-tag">SIMPLE PROCESS</span>

      <h2 className="process-heading">
        Ship in 3 Easy Steps
      </h2>

      <div className="process-container">
        <div className="line"></div>

        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-circle">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <button className="quote-btn">
        Get a Free Quote
      </button>
    </section>
  );
}

export default Process;