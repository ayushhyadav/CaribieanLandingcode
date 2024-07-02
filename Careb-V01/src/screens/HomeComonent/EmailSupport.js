import React, { Component } from 'react';
import RegistrationHeader from './HomeHeader';
import BaseUrl from '../Server/BaseUrl';
export default class EmailSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service_provider: '',
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit = () => {
    const { service_provider, name, email, message } = this.state;

    fetch(`${BaseUrl.BaseUrl}/help/support`, { // Updated fetch URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_provider,
        name,
        email,
        message
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Request submitted successfully:', data);
      alert('Your request have been submitted succussfully')
      // Optionally, reset form fields or show a success message
    })
    .catch(error => {
      console.error('Error submitting request:', error);
      // Optionally, show an error message to the user
    });
  };

  render() {
    return (
      <div>
        <RegistrationHeader />
        <div className='Email-support' style={{ display: 'flex', width: '100%' }}>
          <div className='emailsupt' style={{ width: '23%', borderRight: '1px solid', borderColor: "#E2E8F0", display: 'flex', justifyContent: 'flex-end' }}>
            <label style={{ borderLeft: '1px solid', borderLeftColor: "#F15A29", borderLeftWidth: "4px", borderleftheight: "29px", backgroundColor: "#F8FAFC", display: "flex", width: "70%", padding: '4px 8px', height: 30, marginTop: 4, fontWeight: "600", fontSize: 14, marginTop: 15 }}> Email Support </label>
          </div>
          <div className='support' style={{ width: '60%', marginLeft: 50, marginBottom: 45}}>

            <label style={{ fontSize: '23px', fontWeight: '600', lineHeight: '28px', display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: 35 }}> Submit a request </label>

            <label style={{ fontSize: '14px', fontWeight: '400', lineHeight: '17px', display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: 10 }}> Please enter the details of your request. A member of our support staff will respond as soon as possible. </label>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', marginTop: 40, }}>Are you owner or service provider</label>

            <select
              style={{ width: "80%", marginLeft: "11%", justifyContent: "center", marginTop: 8 }}
              className="form-select"
              onChange={(e) => this.setState({ service_provider: e.target.value })}
              value={this.state.service_provider}
            >
              <option value="">Select</option>
              <option value="owner">Owner</option>
              <option value="service_provider">Service Provider</option>
            </select>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', lineHeight: '17px', marginTop: 35, marginRight: "40%" }}>Your Name</label>

            <div style={{ width: '80%', margin: "0 11%", }} className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <label style={{ marginLeft: "11%", fontSize: '14px', fontWeight: '400', lineHeight: '17px', marginTop: 20, marginRight: "35%" }}>Your Email Address</label>

            <div style={{ width: "80%", margin: "0 11%" }} className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div style={{ width: "80%", marginLeft: "11%" }} className="mb-3">
              <label style={{ display: "flex", marginTop: 35 }} htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea
                style={{ height: 180 }}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              ></textarea>
            </div>

            <div className='btn-sub'>
              <button type="button" className="btn" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
