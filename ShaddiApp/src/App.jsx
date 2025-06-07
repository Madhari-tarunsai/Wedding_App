import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Maps from './Components/Home/Maps/Maps'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Stories from './Components/Stories/Stories'
const App = () => {
  return (
    <div>
      <div>
        <NavBar/>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/stories' element={<Stories/>}/>

          
          <Route path="/maps" element={<Maps/>} />

        
       </Routes>
       
     
      </div>
    </div>
  )
}

export default App