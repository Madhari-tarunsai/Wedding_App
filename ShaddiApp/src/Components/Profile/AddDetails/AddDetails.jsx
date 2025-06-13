import React, { useState } from 'react';
import './AddDetails.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddDetails = () => {
  const navigate = useNavigate();
  const [add, setAdd] = useState({
    name: '',
    textarea: '',
    education: '',
    age: '',
    caste: '',
    image: '', // This will be a URL now
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdd({ ...add, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProfile = {
      name: add.name,
      about: add.textarea,
      education: add.education,
      age: add.age,
      caste: add.caste,
      image: add.image,
      location: 'Hyderabad',
      height: '5.6 ft',
      source: 'AddDetails',
    };

    try {
      await axios.post('https://684a93b0165d05c5d3595dea.mockapi.io/marriages', newProfile);
      alert('✅ Profile uploaded successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('❌ Error posting profile:', error);
      alert('Failed to upload profile. Try again.');
    }
  };

  return (
    <div className="add-details-container">
       
      <div className="form-section">
        <h1 className="heading">Add My Details</h1>
        <form className="details-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
          <textarea name="textarea" placeholder="Tell about yourself" onChange={handleChange} required />
          <input type="text" name="image" placeholder="Paste image URL" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Enter your age" onChange={handleChange} required />
          <input type="text" name="caste" placeholder="Enter your caste" onChange={handleChange} required />
          <input type="text" name="education" placeholder="Enter your education" onChange={handleChange} required />
          <button type="submit">Upload</button>
        </form>
      </div>

      <div className="image-section">
        <img
          src="https://i.pinimg.com/736x/02/d7/b2/02d7b2e54a10999d76a3acbaf6481f13.jpg"
          alt="illustration"
        />
        <h1>Welcome to our Shaadi.com website</h1>
        <p>Me details ivvandi boss, right match chupistham!</p>
      </div>
  
    </div>
  );
};

export default AddDetails;
