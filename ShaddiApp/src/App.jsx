import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Maps from './Components/Home/Maps/Maps'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Stories from './Components/Stories/Stories'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

const App = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/support' element={<Support />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default App
