import React from "react";
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div>
        <h1 className="services-title">🌐 Core Services</h1>

        <div className="services-cards">
          <div className="service-card">
            <h1>Free Registration</h1>
            <ul>
              <li>Create a matrimonial profile at no cost</li>
              <li>Browse and express interest in other profiles</li>
            </ul>
          </div>

          <div className="service-card">
            <h1>Premium Memberships</h1>
            <ul>
              <li>Unlimited chat with matches</li>
              <li>View contact numbers and send SMS</li>
              <li>Send personalized messages with contact details</li>
            </ul>
          </div>

          <div className="service-card">
            <h1>Premium Plus Memberships</h1>
            <ul>
              <li>Double the contact count</li>
              <li>Top of search results with bold listing</li>
              <li>Free members can view your contact details</li>
            </ul>
          </div>

          <div className="service-card">
            <h1>Personalized Matchmaking</h1>
            <ul>
              <li>
                Select Shaadi: Dedicated advisor, handpicked matches, meetings
              </li>
              <li>
                VIP Shaadi: Elite matchmaking, personalized intros, high success
              </li>
            </ul>
          </div>

          <div className="service-card">
            <h1>🏢 Shaadi Centres</h1>
            <p>
              Over 100 in-person Shaadi Centres across India including Hyderabad.
            </p>
            <div className="right-section">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-5-133,Balanagar+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
