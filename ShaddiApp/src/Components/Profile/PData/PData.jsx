import React, { useEffect, useState } from 'react';
import './PData.css';
import { dataBase } from '../../../FireBase/FireBase';
import { updateDoc, arrayUnion, doc } from 'firebase/firestore';
import axios from 'axios';

const PData = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const loggedinuser = JSON.parse(localStorage.getItem('logginuser'));
  const user = loggedinuser?.user?.displayName;

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("https://684a93b0165d05c5d3595dea.mockapi.io/marriages");
        console.log("API response:", res.data);

        
        if (Array.isArray(res.data) && res.data[0] && !res.data[0].profiles) {
          setProfile(res.data);
        }
     
        else {
          setProfile(res.data[0]?.profiles || []);
        }

      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handlerClick = async (cardData) => {
    if (!user) {
      alert("Please log in to shortlist profiles.");
      return;
    }

    try {
      const docRef = doc(dataBase, 'User', user);
      await updateDoc(docRef, { Addcard: arrayUnion(cardData) });
      alert('🛒 Profile added to your card!');
    } catch (err) {
      console.error("Error adding profile to card:", err);
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading profiles...</p>
      </div>
    );
  }

  if (!profile.length) {
    return <p>No profiles found.</p>;
  }

  return (
    <div className="card-container">
      {profile.map((x) => (
        <div className="card" key={x.id}>
          <div className="image-container">
            <img src={x.image} alt={x.name} className="profile-img" />
            <button className="shortlist-btn">♡ Like</button>
          </div>
          <h2>{x.name}</h2>
          <p className="profile-id">ID: {x.id} | Last seen: Recently</p>
          <ul className="profile-details">
            <li><strong style={{ color: 'green' }}>About:</strong> {x.about}</li>
            <li>🎂 DOB: {x.age} Yrs, {x.height}</li>
            <li>🧬 CASTE: {x.caste}</li>
            <li>🎓 EDUCATION: {x.education}</li>
            <li>📍 LOCATION: {x.location}</li>
          </ul>
          <div className="card-buttons">
            <button onClick={() => handlerClick(x)}>💌 Interest</button>
            <button className="interest">📞 Contact</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PData;
