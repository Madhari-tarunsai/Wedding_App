import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Maps from './Maps/Maps'
import About from './Components/About/About'




const App = () => {
  return (
    <div>
      <div>
        <NavBar/>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path="/maps" element={<Maps/>} />

        
       </Routes>
       
     
      </div>
    </div>
  )
}

export default App