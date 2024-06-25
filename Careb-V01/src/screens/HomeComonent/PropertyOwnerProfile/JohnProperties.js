import React, { Component } from "react";
import './john.css'

export default class JohnProperties extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        1,
        2,
        3,
        4,
        5,
        {
          img: require("../../../assets/BgImage.png"),
          title: "Latimer Grand Oaks",
          rating: "5.0",
          desc: "Tanzaniza-Unguja -Beach View"
        }
      ]
    };
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <label className="title">John's Properties</label>
        </div>
        <div className="grid-container">
          {this.state.data.map((val, index) => (
            <div key={index} className="listing-card">
              <div className="image-container">
                <img
                  src={require("../../../assets/BgImage.png")}
                  alt="Background"
                  className="card-image"
                />
               

              </div>
              <div className="card-content">
                <div className="card-row">
                  <label className="card-heading">Latimer Grand Oaks</label>
                  <label className="card-rating">5.0</label>
                </div>
                <div className="card-row">
                  <label className="card-description">
                    Tanzaniza-Unguja -Beach View
                  </label>
                  <label className="card-location">Middleaze</label>
                </div>
                <div className="card-price">
                  <div className="price">
                    <label className="price-label">From</label>
                    <label className="price-value">$1,170</label>
                    <label className="price-unit">/Night</label>
                  </div>
                  <label className="distance">2000 km Away</label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '100'}}>
          <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '19px', fontWeight: '700', lineHeight: '21px', display: "flex", marginTop: 69 }}>About John Doe</label>

          <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '600', lineHeight: '23px', display: "flex", marginTop: 30 }}>Boi</label>

          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '16px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu dictum aliquam nisl maecenas mattis molestie velit.</label>

          <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '600', lineHeight: '23px', display: "flex", marginTop: 29 }}>Description</label>

          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '16px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean.<br></br> Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo<br></br> pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.</label>

          <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '600', lineHeight: '23px', display: "flex", marginTop: 29 }}>Reviews</label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img style={{ width: "65px", height: '65px', marginTop: 40 }}
              src={require('../../../assets/Ellipse 33.png')} alt='' />

            <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '400', lineHeight: '23px', display: "flex", marginLeft: 20, marginTop: 62 }}>Yaroslove K.</label>

            <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '12px', fontWeight: '100', lineHeight: '24px', display: "flex", marginTop: 62 }}>20 May 2020</label>


          </div>
          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '16px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 29 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean.<br></br> Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo<br></br> pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.</label>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <img style={{ width: "65px", height: '65px', marginTop: 40 }}
              src={require('../../../assets/Ellipse 34.png')} alt='' />

            <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '400', lineHeight: '23px', display: "flex", marginLeft: 20, marginTop: 62 }}>Yaroslove K.</label>

            <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '12px', fontWeight: '100', lineHeight: '24px', display: "flex", marginTop: 62 }}>20 May 2020</label>


          </div>
          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '16px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 29 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean.<br></br> Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo<br></br> pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.</label>
        </div>
      </div>
    );
  }


}







