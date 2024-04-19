// Profile.js
import React from 'react';
import ProfileDetail from './ProfileDetail';
import './Profile.css';
import ReactDOM from 'react-dom';


const Profile = ({ profile }) => {
  const handleSummaryClick = () => {
    const popupWindow = window.open('', '_blank', 'width=600,height=600');
    popupWindow.document.title = `Profile - ${profile.name}`;
    popupWindow.document.body.innerHTML = `<div id="profile-detail-container"></div>`;
    const profileDetailContainer = popupWindow.document.getElementById('profile-detail-container');
    ReactDOM.render(<ProfileDetail profile={profile} />, profileDetailContainer);
  };

  return (
    <div className="profile">
      <h3 onClick={handleSummaryClick}>{profile.name}</h3>
      <img src={profile.photo} alt={profile.name} className="profile-photo" onClick={handleSummaryClick} />
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
