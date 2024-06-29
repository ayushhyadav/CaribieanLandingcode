import React, { Component } from 'react';

import Popup from 'reactjs-popup'; // Import Popup component from reactjs-popup
import PropertyBooking from './PropertyBooking'; // Import your PropertyBooking component here
import './popup.css'; 

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: null, // Initialize propertyData if needed
      showButton: true, // Control visibility of the button
    };
  }

//   handleCalendarCallback = (value) => {
//     // Define your callback function to handle calendar value
//     this.props.callBackFun(value);
//   };

  render() {
    const { propertyData, showButton } = this.state;

    return (
      <div className='userbooking'>
        {/* <Calander callBack={this.handleCalendarCallback} /> Render your Calendar component */}
        {showButton && (
          <Popup
            shouldCloseOnOverlayClick={false}
            closeOnDocumentClick={false}
            trigger={<button >Book Property</button>}
            modal
            nested
            contentStyle={{ minHeight: "100px", width: '90%', overflow: 'scroll' }}
            onOpen={() => { document.body.style.overflow = 'hidden'; }} // Disable body scroll on open
            onClose={() => { document.body.style.overflow = 'auto'; }} // Enable body scroll on close
          >
            {(close) => (
              <div style={{ height: 'auto', overflow: 'scroll' }}>
                <PropertyBooking propertyData={propertyData} /> {/* Render your PropertyBooking component */}
              </div>
            )}
          </Popup>
        )}
      </div>
    );
  }
}

export default YourComponent;
