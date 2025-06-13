import React from 'react';
import './Profile.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiLockedHeart } from "react-icons/gi";
import PData from './PData/PData';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleClickAddCard = () => {
    navigate('/addcard');
  };


  const handleClickAddDetails = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); 
      alert("Hey boss, come on! Add your details...!");
      navigate('/addDetails')
    } catch (error) {
      console.error("Something went wrong while handling AddDetails:", error);
    }
  };

  const handleClickMarriageBound = () => {
    navigate('/rashi');
  };

  return (
    <div className="profile-container">
      <div className='main-nav'>
        <div className='left-nav'>
          <button onClick={handleClickAddCard}>
            AddCard <GiLockedHeart />
          </button>
          <button onClick={handleClickAddDetails}>
            AddDetails <MdDriveFileRenameOutline />
          </button>
          <button onClick={handleClickMarriageBound}>
            Check our marriageBound
          </button>
        </div>
        <div className='right-content'>
          <PData />
        </div>
      </div>
    </div>
  );
};

export default Profile;
