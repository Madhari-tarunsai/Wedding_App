import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../FireBase/FireBase";
import "./AddCard.css";

const AddCard = () => {
  const [cards, setCards] = useState([]);
  const userId = localStorage.getItem("loggedInUserId") || "test_user_123";

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(dataBase, "addedCards"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCards(data);
    };
    fetchData();
  }, [userId]);

  return (
    <div className="add-card-container">
      <h2>💖 My Added Profiles</h2>
      <div className="table-wrapper">
        <table className="profile-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Height</th>
              <th>Caste</th>
              <th>Education</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={index}>
                <td>{card.name}</td>
                <td>{card.age}</td>
                <td>{card.height}</td>
                <td>{card.caste}</td>
                <td>{card.education}</td>
                <td>{card.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCard;
