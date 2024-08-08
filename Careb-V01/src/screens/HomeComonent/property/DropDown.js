import React, { useState, useEffect } from 'react';
import './dropdown.css'; // Make sure to create this CSS file or include your styles

const Dropdown = () => {


  const handleClickOutside = (event) => {
    if (!event.target.matches('.dropbtn')) {
    //   setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <div className={`dropdown-content ${ 'show'}`} id="myDropdown">
      <h3>Notification</h3>
        <a href="#link1">No Notification Found</a>
        
      </div>
    </div>
  );
};

export default Dropdown;
