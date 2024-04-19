import React, { useState } from 'react';
import Profile from './components/Profile';
import profilesData from './components/profilesData';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = filterProfiles(profilesData, searchQuery);

  return (
    <div className="app">
      <NavBar searchQuery={searchQuery} onSearch={handleSearch} /> {/* Pass onSearch prop to NavBar */}
      <div className="profiles-container">
        {filteredProfiles.map(profile => (
          <Profile key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

// Function to filter profiles based on search query
const filterProfiles = (profiles, searchQuery) => {
  return profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default App;
