import React, { useState } from "react";
import "./NavBar.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

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
        <p>
          <IoHomeOutline />
          Home
        </p>
        <p>
          <AiFillAndroid />
          About
        </p>
        <p>
          <FcServices />
          Services
        </p>
        <p>
          <CgProfile />
          Profile
        </p>
        <p>Contact</p>
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
