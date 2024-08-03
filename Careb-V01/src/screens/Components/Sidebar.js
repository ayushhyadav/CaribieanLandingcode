import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [balance, setBalance] = useState(0);
  const [availableJobs, setAvailableJobs] = useState(0);
  const [earnedThisMonth, setEarnedThisMonth] = useState(0);
  const [expectedEarnings, setExpectedEarnings] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [paypalId, setPaypalId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://api.example.com/earnings')
      .then(response => response.json())
      .then(data => {
        setBalance(data.balance);
        setAvailableJobs(data.availableJobs);
        setEarnedThisMonth(data.earnedThisMonth);
        setExpectedEarnings(data.expectedEarnings);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleIconClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSuccessMessage(''); // Clear success message when popup is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the PayPal ID submission logic here
    console.log('PayPal ID:', paypalId);
    setSuccessMessage('Your PayPal ID has been submitted successfully!');
    setPaypalId(''); // Clear the input field

    // Close the popup after showing the success message
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000); // Adjust the timeout duration as needed
  };

  return (
    <div className="sidebar">
      <div className='earningcontent'>
        <h2>Earning</h2>
        <div className="balance">
          <p>Personal Balance</p>
          <h1>${balance}</h1>
          <p>Available</p>
          <h4>{availableJobs} Jobs (${availableJobs * 50})</h4>
          <p>Earned this Month</p>
          <h4>${earnedThisMonth}</h4>
          <p>Expected Earning</p>
          <h4>${expectedEarnings}</h4>
        </div>
        <div className="withdraw-method">
          <h2 style={{whiteSpace:'nowrap', fontSize:'20px'}}>Withdraw Method</h2>
          <div className="methods">
            <FontAwesomeIcon 
              icon={faPaypal} 
              size="2x" 
              onClick={handleIconClick} 
            />
            <FontAwesomeIcon icon={faUserPlus} size="2x" />
          </div>
        </div>
      </div>
      
      {isPopupVisible && (
        <div className="popup-overlay786">
          <div className="popup-content786">
            <h2>Enter Your PayPal ID</h2>
            <form style={{height:'1%'}} onSubmit={handleSubmit}>
              <input
                type="text"
                value={paypalId}
                onChange={(e) => setPaypalId(e.target.value)}
                placeholder="PayPal ID"
                required
              />
              <div className='ff'>
              <button style={{background:'transparent', color:'black', width:'auto', height:'25px',border:'1px solid black', fontWeight:'normal', fontSize:'12px'}} type="submit">Submit</button>
              <button style={{background:'transparent', color:'black', width:'auto', height:'25px', border:'1px solid black', fontSize:'12px'}} type="button" onClick={handleClosePopup}>Close</button>
</div>
            </form>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
