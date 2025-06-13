import React, { useEffect, useState } from 'react';
import './PData.css';
import axios from 'axios';

const PData = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get('https://684a93b0165d05c5d3595dea.mockapi.io/marriages');
      setProfile(res.data);
    } catch (err) {
      console.error('Error fetching profiles:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://684a93b0165d05c5d3595dea.mockapi.io/marriages/${id}`);
      setProfile(prev => prev.filter(profile => profile.id !== id));
      alert('🗑️ Profile deleted successfully');
    } catch (err) {
      console.error('Delete failed:', err);
      alert('❌ Failed to delete profile');
    }
  };

  const handleInterest = (item) => {
    const interests = JSON.parse(localStorage.getItem("interests")) || [];
    if (!interests.find(i => i.id === item.id)) {
      interests.push(item);
      localStorage.setItem("interests", JSON.stringify(interests));
      alert(`💌 Interest shown in ${item.name}`);
    } else {
      alert('Already interested.');
    }
  };

  const handleContact = (item) => {
    alert(`📞 Contact ${item.name}\nPhone: 99999-99999\nEmail: ${item.name.replace(/\s/g, '').toLowerCase()}@gmail.com`);
  };

  if (loading) return <p>Loading profiles...</p>;
  if (!profile.length) return <p>No profiles found.</p>;

  return (
    <div className="card-container">
      {profile.map((x) => (
        <div className="card" key={x.id}>
          <img src={x.image} alt={x.name} className="profile-img" />
          <h2>{x.name}</h2>
          <p>ID: {x.id}</p>
          <ul className="profile-details">
            <li><strong>About:</strong> {x.about}</li>
            <li>🎂 Age: {x.age}, {x.height}</li>
            <li>🧬 Caste: {x.caste}</li>
            <li>🎓 Education: {x.education}</li>
            <li>📍 Location: {x.location}</li>
          </ul>
          <div className="card-buttons">
            <button onClick={() => handleInterest(x)}>💌 Interest</button>
            <button onClick={() => handleContact(x)}>📞 Contact</button>
            {x.source === 'AddDetails' && (
              <button onClick={() => handleDelete(x.id)} style={{backgroundColor:'red' ,color:'white'}}>🗑️ Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PData;
