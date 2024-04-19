// ProfileDetail.js
import React from 'react';
import './ProfileDetail.css'; // Import CSS file

const ProfileDetail = ({ profile }) => {
  return (
    <div className="profile-detail">
      <div className="profile-header">
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
        <div className="profile-header-info">
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p>{profile.address.city}, {profile.address.country}</p>
        </div>
      </div>
      <div className="profile-summary">
        <h3>Summary</h3>
        <p>{profile.summary}</p>
      </div>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default ProfileDetail;
