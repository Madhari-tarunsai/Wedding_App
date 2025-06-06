import React from 'react';
import './About.css';
import brideImage from '../../assets/Images/image01.png'
import dressImage from '../../assets/Images/image02.png'

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-content">
        <div className="about-left">
          <img src={brideImage} alt="Bride" className="main-img" />
          <img src={dressImage} alt="Dress Detail" className="dress-overlay" />
        </div>
        <div className="about-right">
          <h3>
            <span className="dropcap"> Our</span>Wedding 💍
          </h3>
          <p style={{fontSize:'20px'}}>
           We are overjoyed to share the most special chapter of our journey with you — a celebration of love, commitment, and the beginning of forever.
          </p>
          <p style={{fontSize:'20px'}}>
           From the moment we met, our connection grew through laughter, shared dreams, and heartfelt memories. Now, as we prepare to tie the knot, we want to celebrate this beautiful union surrounded by the love and blessings of our friends and family.
          </p>
          <p><span style={{color:"#e91e63", fontSize:"20px"}}>This wedding is not just an event — it is a symbol of our story, our traditions, and the bright future ahead. We invite you to be part of this magical occasion and help us create unforgettable memories together.Let’s cherish love, celebrate togetherness, and begin a lifetime of happiness!</span></p>
          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
