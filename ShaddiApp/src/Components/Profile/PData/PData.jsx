import React, { useEffect, useState } from 'react';
import './PData.css'; // Make sure you create this CSS file

const PData = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://684a93b0165d05c5d3595dea.mockapi.io/marriages")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfile(data[0].profiles); // Correct here
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="card-container">
      {profile.map((x) => (
        <div className="card" key={x.id}>
          <img src={x.image} alt={x.name} className="profile-img" />
          <h2>{x.name}</h2>
          <p>Age: {x.age}</p>
          <p>Caste: {x.caste}</p>
          <p>Location: {x.location}</p>
          <div className="card-buttons">
            <button>📞 Call</button>
            <button>💬 WhatsApp</button>
            <button>❤️ Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PData;
