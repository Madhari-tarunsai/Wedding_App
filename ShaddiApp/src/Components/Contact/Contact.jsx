import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [activeForm, setActiveForm] = useState("contact");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("userFeedback", feedback);
      setLoading(false);
      setFeedback("");
      alert("🙏 Thank you for your feedback! 😊");
    }, 1500);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "contact":
        return (
          <div className="form-section">
            <h2>Contact Us</h2>
            <p>Email: support@shaadhi.com</p>
            <p>Phone: +91 8144-99-88-77</p>
          </div>
        );
      case "business":
        return (
          <div className="form-section">
            <h2>Business Enquiries</h2>
            <p>Write to us for partnerships and business opportunities.</p>
            <p>Email: business@shaadhi.com</p>
          </div>
        );
      case "feedback":
        return (
          <div className="form-section">
            <h2>Feedback</h2>
            <p>We value your feedback. Let us know how we can improve.</p>
            <textarea
              rows="4"
              value={feedback}
              placeholder="Write your feedback here..."
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button className="submit-btn" onClick={handleFeedbackSubmit} disabled={loading}>
              {loading ? (
                <span className="loader"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="contact-container">
      <h1>Help & Support</h1>
      <div className="tabs">
        <button
          className={activeForm === "contact" ? "active" : ""}
          onClick={() => setActiveForm("contact")}
        >
          Contact Us
        </button>
        <button
          className={activeForm === "business" ? "active" : ""}
          onClick={() => setActiveForm("business")}
        >
          Business Enquiries
        </button>
        <button
          className={activeForm === "feedback" ? "active" : ""}
          onClick={() => setActiveForm("feedback")}
        >
          Feedback
        </button>
      </div>
      <div className="form-area">{renderForm()}</div>
    </div>
  );
};

export default Contact;
