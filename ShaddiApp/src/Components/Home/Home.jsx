import React from 'react'
import './Home.css'
import video from '../../assets/Videos/video01.mp4'
import Elite from './Elite/Elite'
import Assisent from './Assisent/Assisent'
import Loaction from './Location/Location'
import Info from './Info/Info'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <div className='head'>
          <h1>Together<span>Always</span> </h1>
          <p>A wedding is a ceremonial event where two people are united in marriage. It is both a personal commitment and often</p>
          <p>a cultural or religious tradition, celebrated with various rituals, customs, and festivities.</p>
        </div>
        <div className='video'>
          <video src={video} muted autoPlay loop controls/>
        </div>
      </div>
    <Assisent/>
    <Elite/>
    <Loaction/>
    <Info/>
    


    </div>
  )
}

export default Home