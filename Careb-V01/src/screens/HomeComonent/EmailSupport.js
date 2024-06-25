import React, { Component } from 'react'
import RegistrationHeader from './HomeHeader'

export default class EmailSupport extends Component {
  render() {
    return (
      <div>
        <RegistrationHeader />
        <div className='Email-support' style={{ display: 'flex', width: '100%', }}>
          <div className='emailsupt' style={{ width: '23%', borderRight: '1px solid', borderColor: "#E2E8F0", display: 'flex', justifyContent: 'flex-end' }}>
            <label style={{ borderLeft: '1px solid', borderLeftColor: "#F15A29", borderLeftWidth: "4px", borderleftheight: "29px", backgroundColor: "#F8FAFC", display: "flex", width: "70%", padding: '4px 8px', height: 30, marginTop: 4, fontWeight: "600", fontSize: 14, marginTop: 15 }}> Email Support </label>
          </div>
          <div className='support' style={{ width: '60%', marginLeft: 50, marginBottom: 45}}>


            <label style={{ fontSize: '23px', fontWeight: '600', lineHeight: '28px', display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: 35 }}> Submit a request </label>

            <label style={{ fontSize: '14px', fontWeight: '400', lineHeight: '17px', display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: 10 }}> Please enter the details of your request. A member of our support staff will respond as soon as possible. </label>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', marginTop: 40, }}>Are you owner or service provider</label>

            <select style={{ width: "80%", marginLeft: "11%", justifyContent: "center", marginTop: 8 }} className="form-select ">

              <option> Select </option>
              <option value="1"> One </option>
              <option value="2"> Two </option>
              <option value="3"> Three </option>

            </select>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', lineHeight: '17px', marginTop: 35, marginRight: "40%" }}>Your Name</label>

            <div style={{ width: '80%', margin: "0 11%",}} class="input-group mb-3">
              <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', lineHeight: '17px', marginTop: 20, marginRight: "35%" }}>Your Email Address</label>

            <div style={{ width: "80%", margin: "0 11%" }} class="input-group mb-3">
              <input type="text" class="form-control" placeholder="" aria-label="Useremail" aria-describedby="basic-addon1" />
            </div>


            <div style={{ width: "80%", marginLeft: "11%" }} class="mb-3">
              <label style={{ display: "flex", marginTop: 35 }} for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea style={{ height: 180 }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className='btn-sub'>
              <button type="button" class="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

