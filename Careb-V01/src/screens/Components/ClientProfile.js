import React, { Component } from 'react'

export default class ClientProfile extends Component {
  render() {
    return (
      <div style={{ width: '90%', margin: '0 auto', height: '70vh' }}>

        <div className='profile-clint ' style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ width: "65px", height: '65px', marginTop: 40 }}
            src={require('../../assets/Ellipse 33.png')} alt='' />

          <label className='profile-decp' style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '400', lineHeight: '23px', display: "flex", marginLeft: 20, marginTop: 62 }}>Yaroslove K.</label>

          <label className='profile-decp' style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '12px', fontWeight: '100', lineHeight: '24px', display: "flex", marginTop: 62 }}>20 May 2020</label>


        </div>
        <div className='profile-clint '>
          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '20px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 29 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum.<br /> Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et,<br /> accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc.<br /> Magna leo pulvinar diam ut sed arcu semper pharetra. Erat <br />pellentesque sed est tempus senectus et.</label>

        </div>

        <div className='profile-clint ' style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ width: "65px", height: '65px', marginTop: 40 }}
            src={require('../../assets/Ellipse 34.png')} alt='' />
          <div className='profile-decp'>

            <label style={{ fontFamily: 'plus Jakarta sans', fontSize: '17px', fontWeight: '400', lineHeight: '23px', display: "flex", marginTop: 62 }}>Yaroslove K.</label>

            <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '12px', fontWeight: '100', lineHeight: '24px', display: "flex", marginTop: 62 }}>20 May 2020</label>
          </div>
          <label style={{ fontFamily: 'plus Jakarta sans', color: "#64748B", fontSize: '20px', fontWeight: '400', lineHeight: '24px', display: "flex", marginTop: 29 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum.<br /> Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et,<br /> accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc.<br /> Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus <br />senectus et.</label>
        </div>

      </div>
    )
  }
}