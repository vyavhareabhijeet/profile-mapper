import React from 'react';
import './ProfileDetails.css'; // You can define your CSS styles for ProfileDetails

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      {/* Additional profile details go here */}
    </div>
  );
};

export default ProfileDetails;
