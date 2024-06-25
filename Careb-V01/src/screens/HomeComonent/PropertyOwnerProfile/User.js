import React, { Component } from 'react';
import './User.css'

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [1, 2, 3, 4, 5],
      isSmallScreen: false // Track if the screen size is small
    };
  }

  componentDidMount() {
    // Check if the screen size is small when the component mounts
    this.checkScreenSize();
    // Add a listener to handle screen size changes
    window.addEventListener('resize', this.checkScreenSize);
  }

  componentWillUnmount() {
    // Remove the listener when the component is unmounted
    window.removeEventListener('resize', this.checkScreenSize);
  }

  // Function to check if the screen size is small
  checkScreenSize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 768 }); // Adjust the breakpoint as needed
  };

  render() {
    const { isSmallScreen } = this.state;
    return (
      <div className={`user-card ${isSmallScreen ? 'small-screen' : ''}`}>
        <div className="user-info">
          <img className="user-image" src={require('../../../assets/Ellipse 11 (1).png')} alt='' />
          <div className="user-details">
            <label className="user-name">John Doe</label>
            <label className="user-address">2972 Westheimer Rd. Santa Ana, Illinois 85486</label>
            <div className="user-ratings">
              {this.state.rating.map((val, index) =>
                <img key={index} className="star-rating" src={require('../../../assets/Vector(1).png')} alt='' />
              )}
              <label className="rating-count">(200)</label>
            </div>
           
          </div>
          <div className="buttons-row">
          {isSmallScreen ? (
            <div className="small-screen-image-container">
              <img className="small-screen-image" src={require('../../../assets/icons8-location-94.png')} alt='' />
            
            </div>
          ) : (
            <div className="button-container">
              <button className="view-location-button">View Location</button>
            </div>
          )}
        </div>
        </div>
        <div className="buttons-row">
          {isSmallScreen ? (
            <div className="small-screen-image-container">
              {/* <img className="small-screen-image" src={require('../../../assets/icons8-location-94.png')} alt='' /> */}
              <img style={{marginTop:'10px'}} className="small-screen-image" src={require('../../../assets/icons8-message-48.png')} alt='' />
            </div>
          ) : (
            <div className="button-container">
              {/* <button className="view-location-button">View Location</button> */}
              <button className="message-button">Message</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
