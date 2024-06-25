import React, { Component } from 'react';
import RegistrationHeader from '../HomeHeader';
import User from './User';
import JohnProperties from './JohnProperties';
import Map from './Map';
import './MyBooking.js'

export default class MyBooking extends Component {
  render() {
    return (
      <div>
        <RegistrationHeader />
        <User />
        <div
          className="booking-container"
          style={{ borderTop: '1px solid #E2E8F0' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Map />
              </div>
              <div className="col-md-9 ">
                <JohnProperties />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
