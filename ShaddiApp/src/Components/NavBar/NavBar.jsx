import React, { useState } from "react";
import "./NavBar.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          Sha<span>dhi</span>.com
        </h1>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/home" >
          <IoHomeOutline /> Home
        </Link>
         <Link to="/about" >
          <AiFillAndroid /> About
        </Link>
         <Link to="/services" >
          <FcServices /> Services
        </Link>
        <Link to="/profile" >
          <CgProfile /> Profile
        </Link>
        <Link to="/contact" >
          Contact
        </Link>
      </div>

      <div className="login-btn">Login</div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
