import React from 'react';
import './App.css';
import ProfileCard from "./components/ProfileCard";
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';
import SearchFilter from './components/SearchFilter';
import ProfileDetails from './components/ProfileDetails';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: 'Ravi Kumar',
      photo: 'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
      description: 'Software Engineer specializing in full-stack development. Proficient in JavaScript, React, Node.js. Currently working at a leading IT firm in Bangalore.',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    // Add more profiles as needed
  ];

  const selectedProfile = profiles[0]; // Sample selected profile

  return (
    <div className="App">
      <h1>Profile Mapper App</h1>

      {/* Profile Card */}
      <ProfileCard name={selectedProfile.name} photo={selectedProfile.photo} description={selectedProfile.description} />

      {/* Map */}
      <Map latitude={selectedProfile.latitude} longitude={selectedProfile.longitude} />

      {/* Admin Panel */}
      <AdminPanel />

      {/* Search Filter */}
      <SearchFilter />

      {/* Profile Details */}
      <ProfileDetails profile={selectedProfile} />
    </div>
  );
}

export default App;
