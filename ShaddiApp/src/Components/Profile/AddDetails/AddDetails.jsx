import React, { useEffect, useState } from 'react';
import './AddDetails.css';

const AddDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    caste: '',
    dob: '',
    location: '',
    image: null,
  });

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
    console.log(formData);
  };

  return (
    <div className="add-details-container">
      <div className="form-wrapper fade-in">
        <h2 className="form-title">Add Profile Details</h2>
        <p className="time-text">🕒 {currentTime}</p>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>Education:
            <input type="text" name="education" value={formData.education} onChange={handleChange} required />
          </label>
          <label>Image Upload:
            <input type="file" name="image" accept="image/*" onChange={handleChange} required />
          </label>
          <label>Caste:
            <input type="text" name="caste" value={formData.caste} onChange={handleChange} required />
          </label>
          <label>Date of Birth:
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </label>
          <label>Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddDetails;
