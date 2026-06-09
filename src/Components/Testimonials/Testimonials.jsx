import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      review:
        "SwiftCargo transformed our supply chain. Orders that used to take 5 days now arrive in 2. The tracking dashboard is exceptional.",
     
    },
    {
      review:
        "Reliable international shipping with transparent pricing. No hidden fees. Our customs clearance went from 3 days to 18 hours.",
      
    },
    {
      review:
        "We process 800 orders a week and SwiftCargo handles every one. The API integration was painless and the team is incredibly responsive.",
      
    },
  ];

  return (
    <section className="testimonials">
      <span className="testimonials-tag">
        TESTIMONIALS
      </span>

      <h2 className="testimonials-heading">
        What Our Clients Say
      </h2>

      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;