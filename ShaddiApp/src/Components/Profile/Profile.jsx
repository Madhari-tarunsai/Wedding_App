import React from 'react';
import './Profile.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiLockedHeart } from "react-icons/gi";
import PData from './PData/PData';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  const handlerclick=()=>{
    navigate('/addcard')
  }
  const handlersubmit=()=>{
    navigate('/upload')
  }
  return (
    <div>
      <div className='main-nav'>
        <div className='left-nav'>
          <button>All</button>
          <button onClick={handlerclick}>AddCard <GiLockedHeart/></button>
          <button onClick={handlersubmit}>Upload My Details <MdDriveFileRenameOutline /></button>
        </div>
        <div className='right-content'>
          <PData/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
