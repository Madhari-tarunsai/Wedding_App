import React from 'react'
import './Home.css'
import video from '../../assets/Videos/video01.mp4'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="video-container">
          <video src={video} controls autoPlay muted loop />
        </div>
        <div className="text-container">
          <h1>💍Wedd<span>ing</span></h1>
          <p>
            A wedding is a formal event that signifies the union of two individuals in marriage,
            often witnessed and celebrated by family, friends, and the wider community. 
            <span style={{color:"#d63384"}}> It marks the beginning of a couple's shared journey</span> in life and represents 
            love, commitment, and partnership.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
