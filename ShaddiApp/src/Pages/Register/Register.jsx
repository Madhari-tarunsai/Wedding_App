import React, { useState } from 'react';
import { Authentication, dataBase } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [register, setRegister] = useState({ name: '', email: '', password: '', role: '' });

  const handlersubmit = async (event) => {
    event.preventDefault(); 
    try {
      const userDetails = await createUserWithEmailAndPassword(
        Authentication,
        register.email,
        register.password
      );

      await setDoc(doc(dataBase, `${register.role}`, register.name), {
        name: register.name,
        email: register.email,
        role: register.role,
      });

      await updateProfile(userDetails.user, {
        displayName: register.name,
      });

      alert("Register Done Successfully 🎉");
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert('FirebaseError: ' + err.message);
    }
  };

  return (
    <div className="register-container">
      <div
        className="image-section"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={
            hovered
              ? "https://blog.matrimilan.com/wp-content/uploads/2023/04/pexels-krishna-videotech-4121047-1024x683-1-1.webp"
              : "https://images.squarespace-cdn.com/content/v1/56b6347007eaa0749953ef98/1621280206978-TT2X17CNP4AUEX56M8T7/BZ6A1696-Edit-2.jpg"
          }
          alt="Register"
          className={hovered ? 'image-hover' : 'image-default'}
        />
      </div>

      <div className="form-section">
        <h1>Wedding Bell Start</h1>
        <form onSubmit={handlersubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setRegister(prev => ({ ...prev, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setRegister(prev => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setRegister(prev => ({ ...prev, password: e.target.value }))}
          />
          <select
            required
            onChange={(e) => setRegister(prev => ({ ...prev, role: e.target.value }))}
          >
            <option value="">Choose Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
