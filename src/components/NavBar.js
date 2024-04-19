// NavBar.js
import React from 'react';

const NavBar = ({ searchQuery, onSearch }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Profile Display</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={onSearch} // Call the onSearch function when the input value changes
        />
      </div>
    </nav>
  );
};

export default NavBar;
