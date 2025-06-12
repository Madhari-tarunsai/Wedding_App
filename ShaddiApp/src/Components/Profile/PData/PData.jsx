import React, { useEffect, useState } from 'react';
import './PData.css';
import { dataBase } from '../../../FireBase/FireBase';
import { collection, addDoc } from 'firebase/firestore';

const PData = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("loggedInUserId") || "test_user_123";

  useEffect(() => {
    fetch("https://684a93b0165d05c5d3595dea.mockapi.io/marriages")
      .then(res => res.json())
      .then(data => {
        setProfile(data[0].profiles);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  const handlerClick = async (cardData) => {
    try {
      const cardWithUser = {
        ...cardData,
        userId: userId,
        createdAt: new Date()
      };

      await addDoc(collection(dataBase, "addedCards"), cardWithUser);
      alert("Card added successfully!");

      let savedCards = JSON.parse(localStorage.getItem("usercard")) || [];
      savedCards.push(cardWithUser);
      localStorage.setItem("usercard", JSON.stringify(savedCards));
    } catch (err) {
      console.error("Error adding card to Firebase:", err);
    }
  };

  return (
    <div className="card-container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading profiles...</p>
        </div>
      ) : (
        profile.map((x) => (
          <div className="card" key={x.id}>
            <div className="image-container">
              <img src={x.image} alt={x.name} className="profile-img" />
              <button className="shortlist-btn">♡ Shortlist</button>
            </div>
            <h2>{x.name}</h2>
            <p className="profile-id">ID: {x.id} | Last seen: Recently</p>
            <ul className="profile-details">
              <li><strong style={{ color: 'green' }}>About:</strong> {x.about}</li>
              <li>🎂 DOB: {x.age} Yrs, {x.height}</li>
              <li>🧬CASTE: {x.caste}</li>
              <li>🎓EDUCATION: {x.education}</li>
              <li>📍LOCATION: {x.location}</li>
            </ul>
            <div className="card-buttons">
              <button onClick={() => handlerClick(x)}>AddCart</button>
              <button className="interest">Shown Interest</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PData;
