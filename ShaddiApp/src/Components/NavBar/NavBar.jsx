import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { GiLovers } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("logginadmin"));
  const user = JSON.parse(localStorage.getItem("logginuser"));
  useEffect(() => {
  
    // console.log(user);

    if (admin) {
      setDisplayName(admin.user.displayName);
      setRole("admin");
    } else if (user) {
      setDisplayName(user.user.displayName);
      setRole("user");
    }
  }, [admin || user]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("logginadmin");
    localStorage.removeItem("logginuser");
    setDisplayName("");
    setRole("");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          Shaa<span>dhi</span>.com
        </h1>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/home"><IoHomeOutline /> Home</Link>
        <Link to="/about"><AiFillAndroid /> About</Link>
        <Link to="/services"><FcServices /> Services</Link>
        <Link to="/stories"><GiLovers /> Stories</Link>
        <Link to="/profile"><CgProfile /> Profile</Link>
        <Link to="/support">Support <MdSupportAgent /></Link>
      </div>

      <div className="navbar-right">
        {displayName && (
          <span className="welcome-msg">
            Welcome:- {displayName} 🤝
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
              alt="Profile"
              className="profile-icon"
            />
          </span>
        )}
        {!displayName ? (
          <div className="login-btn" onClick={handleLoginClick}>
            {loading ? (
              <span className="loading-spinner">⏳ Logging in...</span>
            ) : (
              "Login"
            )}
          </div>
        ) : (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>

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
