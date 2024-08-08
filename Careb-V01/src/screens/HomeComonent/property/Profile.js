import React, { useState } from 'react';
import './profile.css';

function Profile({ imageUrl, name, location , cancellationPolicy , rating, reviews, yearsHosting, school, languages, obsession }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="centered-container777">
      <div className="card456">
        <div className="card-header11">
          <img 
            src={imageUrl} 
            alt={name} 
          />
          <div className="superhost-badge">+</div>
          {/* <div className="edit">Edit</div> */}
          <a className="close" onClick={handleClose}>X</a>
        </div>
        <div className="card-body">
          <h2>{name}</h2>
          {/* <div className="rating">
            <span className="stars">{rating}★</span>
            <span className="reviews">{reviews} Reviews</span>
          </div> */}
          <div className="info">
            {/* <p><strong>Years hosting:</strong> {yearsHosting}</p> */}
            {/* <p><strong>Where I went to school:</strong> {school}</p> */}
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Cancellation Policy:</strong> {cancellationPolicy}</p>
            <p><strong>Speaks:</strong> {languages}</p>
            {/* <p><strong><i className='bx bx-heart'></i> I'm obsessed with:</strong> {obsession}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
