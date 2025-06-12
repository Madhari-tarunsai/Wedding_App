import React from 'react';
import './Profile.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import PData from './PData/PData';

const Profile = () => {
  return (
    <div>
      <div className='main-nav'>
        <div className='left-nav'>
          <button>All</button>
          <button>AddCard</button>
          <button>AddFav</button>
          <button>Upload My Details <MdDriveFileRenameOutline /></button>
        </div>
        <div className='right-content'>
        <PData/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
