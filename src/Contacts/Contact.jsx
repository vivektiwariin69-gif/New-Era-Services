
import React from "react";
import "./Contact.css";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="hero">
        <p className="hero-tag">GET IN TOUCH</p>

        <h1>We're Here to Help</h1>

        <p className="hero-text">
          Sales inquiries, quote requests, partnership proposals,
          or support — our team responds within 2 business hours.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-cards">

        <div className="card">
          <div className="icon-box">
            <Phone size={22} />
          </div>

          <div>
            <h3>Call Us</h3>
            <h2>+91 9891859987</h2>
            <p>Mon-Fri 9AM-7PM</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-box">
            <Mail size={22} />
          </div>

          <div>
            <h3>Email Us</h3>
            <h2>neweraservices345@gmail.com</h2>
            <p>Response within 2 hours</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-box">
            <Clock size={22} />
          </div>

          <div>
            <h3>Emergency Line</h3>
            <h2>24/7 Available</h2>
            <p>For urgent shipment issues</p>
          </div>
        </div>

      </section>

      {/* Form + Office */}
      <section className="contact-section">

        <div className="form-container">
          <h2>Send Us a Message</h2>

          <form action="https://formspree.io/f/xqeooddj" method="post">

            <div className="input-row">
              <input
                type="text"
                placeholder="Full Name"
                name="full name"
              />

              <input
                type="email"
                placeholder="Email Address"
                name="email"
              />
            </div>

            <div className="input-row">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone number"
              />

              <select name="option"> 
                <option>General Inquiry</option>
                <option>Shipment Support</option>
                <option>Partnership</option>
                <option>Complaint</option>
              </select>
            </div>

            <textarea
              rows="7"
              placeholder="Tell us how we can help you..."
              name="text area"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

        {/* Office */}
        <div className="office-container">

          <h2>Our Offices</h2>

          <div className="office-card">

            <div className="icon-box">
              <MapPin size={22} />
            </div>

            <div>
              <h3>New Era Services HQ</h3>

              <p>
               B-177 , Pul Pehlad Pur , Badarpur , New Delhi -- 44
              </p>

              <p className="timing">
                +91 9891859987
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Quick Answers */}

      <section className="quick-answer">

        <h2>Quick Answers</h2>

        <div className="answer-box">
          <h4>How do I get a shipping quote?</h4>

          <p>
            Fill the contact form or call us directly.
            Our team responds within 2 business hours.
          </p>
        </div>

        <div className="answer-box">
          <h4>Can I schedule a pickup online?</h4>

          <p>
            Yes, contact our team and we'll arrange
            pickup according to your preferred time.
          </p>
        </div>

        <div className="answer-box">
          <h4>What if my package is delayed?</h4>

          <p>
            Contact support with your tracking ID and
            we'll investigate immediately.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Contact;