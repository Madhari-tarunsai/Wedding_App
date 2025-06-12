import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Authentication } from '../../FireBase/FireBase';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '', role: '' });

  const handlelogin = async (event) => {
    event.preventDefault();
    const { email, password, role } = login; 

    try {
      const loginUser = await signInWithEmailAndPassword(Authentication, email, password);
      console.log(loginUser);
      alert("Login successful");

      if (role === "admin") {
        localStorage.setItem("logginadmin", JSON.stringify(loginUser));
      } else {
        localStorage.setItem("logginuser", JSON.stringify(loginUser));
      }

      navigate(`/${role}DashBoard`);
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
  
      <div className="form-section">
        <h1>Join Hands Again</h1>
        <form onSubmit={handlelogin}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <select
            required
            onChange={(e) => setLogin({ ...login, role: e.target.value })}
          >
            <option value="">Choose Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button type="submit">Login</button>
        </form>
        <p>
          I don't have an account... <Link to="/register">Register</Link>
        </p>
      </div>

      <div className="image-section">
        <img
          src="https://topicimages.mrowl.com/large/navpreet/indian_weddings/hindu_weddings/telugu_weddings_1.jpg"
          alt="Login Visual"
          className="animated-image"
        />
      </div>
    </div>
  );
};

export default Login;
