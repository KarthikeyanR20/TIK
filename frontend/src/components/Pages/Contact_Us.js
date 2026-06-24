import React, { useState } from "react";
import "./Contact_Us.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

function Contact_Us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">

      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          We'd love to hear from you. Reach out to us anytime.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-details">

          <div className="info-card">

            <h2>Get In Touch</h2>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Office</h4>
                <p>242/5, Rohini Flats, Anna Nagar West Extension, Chennai-600101, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 80561 13955</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@tikhr.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaGlobe className="icon" />
              <div>
                <h4>Website</h4>
                <p>www.tikhr.com</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your hiring requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-msg">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="error-msg">
                ❌ Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact_Us;