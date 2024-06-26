import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationHeader.css';

const RegistrationHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleBecomeUserClick = () => {
    navigate('/');
  };

  return (
      <div className='top-nav'>
        <nav style={{ borderBottom: '1px solid #E5E7EB' }} className="navbar navbar-expand-lg navbar-white">
          <div style={{width: '90%', height: 70}} className="container-fluid">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img style={{width: 50, height: 45}} alt='' src={require('../Image/Group1.png')}/>
              <Link to='/' style={{height: '30px', width: '155px', marginTop: 6}}>
                <img style={{height: '28px', width: '165px', marginLeft: 10}} alt="Group"
                     src={require('../../assets/name logo.png')}/>
              </Link>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbar"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
                onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div style={{justifyContent: 'flex-end'}} className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
                 id="navbar">
              <div className='submit-btn'>
                <button className="me-2 btn btn-outline-dark" type="button" onClick={handleBecomeUserClick}>Become a
                  User
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default RegistrationHeader;
