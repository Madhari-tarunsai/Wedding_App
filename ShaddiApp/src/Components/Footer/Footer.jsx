import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Regional Matrimony Services</h4>
          <ul>
            {["Assamese", "Bengali", "Bihari", "Gujarati", "Hindi", "Kannada", "Kerala", "Marathi", "Marwadi", "Oriya", "Parsi", "Punjabi", "Rajasthani", "Sindhi", "Tamil", "Telugu", "Urdu"].map(item => (
              <li key={item}>{item} Matrimony</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help & Support</h4>
          <ul>
            <a href="/Contact" target='_blank'><li>Contact us</li></a>
            <li>Feedback</li>
            <li>FAQs</li>
          </ul>

          <h4>Our other Services</h4>
          <ul>
            <li>EliteMatrimony.com</li>
            <li>Jodii</li>
            <li>AstroFREEChat</li>
            <li>Luv.com</li>
            <li>ManyJobs.com</li>
          </ul>

          <h4>Our Wedding Services</h4>
          <ul>
            <li>Mandap.com</li>
            <li>WeddingBazaar.com</li>
            <li>Make My Wedding</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Awards</li>
            <li>Milestones</li>
            <li>Register Free</li>
            <li>Partner Search</li>
            <li>Member Login</li>
            <li>Success stories</li>
            <li>Payment Options</li>
            <li>Careers</li>
            <li>Media Room</li>
            <li>TV Commercials</li>
            <li>Advertise with us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Related Matrimony Services</h4>
          <ul>
            <li>HappyMarriages.com</li>
            <li>Matrimonial Sites</li>
            <li>Matrimonial Websites</li>
            <li>Shaadi Retail Stores</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>This website is strictly for matrimonial purpose only and not a dating website.<br />Copyright © 2025. All rights reserved.</p>

        <div className="footer-cert-social">
          <div className="certification">
            <img src="https://imgs.bharatmatrimony.com/bmimgs/limca-book.webp" alt="Limca Book of Records" />
            <span>
              The Limca Book<br />
              of records<br />
              Highest Number of Marriages
            </span>
          </div>

          <div className="social-icons">
            <span>Follow Us on:</span>
            <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><FaXTwitter /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><FaInstagram /></a>
            <a href="https://www.youtube.com/account" target='_blank'><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
