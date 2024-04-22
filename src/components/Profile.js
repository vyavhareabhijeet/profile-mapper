
import React from 'react';
import ProfileDetail from './ProfileDetail';
import './Profile.css';
import ReactDOM from 'react-dom';


const Profile = ({ profile }) => {
  const handleSummaryClick = () => {
    const popupWindow = window.open('', '_blank', 'width=600,height=600');
    popupWindow.document.title = `Profile - ${profile.name}`;
    
    // Check if the container element exists, if not, create it
    let profileDetailContainer = popupWindow.document.getElementById('profile-detail-container');
    if (!profileDetailContainer) {
      profileDetailContainer = popupWindow.document.createElement('div');
      profileDetailContainer.id = 'profile-detail-container';
      popupWindow.document.body.appendChild(profileDetailContainer);
    }
    
    // Render the ProfileDetail component into the container
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