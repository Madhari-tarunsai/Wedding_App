import React, { useEffect, useState } from "react";
import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { dataBase } from "../../../FireBase/FireBase";
import "./AddCard.css";

const AddCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const loggedinuser = JSON.parse(localStorage.getItem("logginuser"));
  const User = loggedinuser?.user?.displayName;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        if (!User) {
          console.error("User not found in localStorage.");
          setLoading(false);
          return;
        }

        const docRef = doc(dataBase, "User", User);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const addedCards = userData?.Addcard || [];
          setCards(Array.isArray(addedCards) ? addedCards : []);
        } else {
          console.warn("No such document for user:", User);
          setCards([]);
        }
      } catch (error) {
        console.error("Error fetching added cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [User]);

  // ❌ Delete selected card from Firestore and local state
  const handleDelete = async (card) => {
    try {
      const docRef = doc(dataBase, "User", User);
      await updateDoc(docRef, {
        Addcard: arrayRemove(card),
      });
      setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
      alert("Card deleted successfully!");
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="add-card-container">
      <h2>💖 My Added Profiles</h2>
      {loading ? (
        <p>Loading your added cards...</p>
      ) : cards.length === 0 ? (
        <p>No profiles added yet.</p>
      ) : (
        <div className="table-wrapper">
          <table className="profile-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Caste</th>
                <th>Education</th>
                <th>Location</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card, index) => (
                <tr key={index}>
                  <td><img src={card.image} alt={card.name} width="60" /></td>
                  <td>{card.name}</td>
                  <td>{card.age}</td>
                  <td>{card.height}</td>
                  <td>{card.caste}</td>
                  <td>{card.education}</td>
                  <td>{card.location}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(card)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddCard;
