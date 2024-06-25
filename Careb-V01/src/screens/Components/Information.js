import React, { Component } from 'react';
import BaseUrl from '../Server/BaseUrl';
import './Deshbord/ClientProfile/Information.css';
const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "" //this is where our error message gets across
};

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      dob: '',
      password: '',
      confirm_password: '',
      errorMessage: '',
      user_id: localStorage.user_id,
  
        email: { ...txtFieldState, fieldName: "Email", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format" },
        firstname: { ...txtFieldState, fieldName: "First Name", required: true, requiredTxt: "First Name is required" },
        lastname: { ...txtFieldState, fieldName: "Last Name", required: false, requiredTxt: "Last Name is required" },
        allFieldsValid: false
   
}
    };
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNextClick = () => {
    const {
      first_name,
      last_name,
      email,
      dob,
      password,
      confirm_password,
      user_id,
    } = this.state;
    console.log('user_id', user_id);

    if (
      !first_name ||
      !last_name ||
      !email ||
      !dob ||
      !password ||
      !confirm_password
    ) {
      this.setState({ errorMessage: 'All fields are required.' });
      alert('All fields are required');
      return;
    }

    if (password !== confirm_password) {
      this.setState({
        errorMessage: 'Password and confirm password do not match.',
      });
      alert('Password and confirm password do not match.');
      return;
    }

    const userData = {
      user_id,
      first_name,
      last_name,
      email,
      dob,
      password,
      confirm_password,
    };

    fetch(BaseUrl.BaseUrl + `/auth/update/${user_id}`, {
      method: 'PUT', // Change the method to PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response data:', data);
        if (data.error) {
          this.setState({ errorMessage: data.error.message });
          alert('Error: ' + data.error.message);
        } else {
          console.log('Update successful:', data);
          this.props.NextCallBack({
            navigationTo: 'Upload_Profile',
            id: 2,
            type: 'Next',
          });
        }
      })

      .catch((error) => {
        alert('API request error: ' + error);
        console.error('API request error:', error);
      });
  };

  render() {
    return (
      <div className="information-container">
        <label className="step-label">Step 1/8</label>
        <h4 className="section-title">Personal Information</h4>
        <h5 className="section-description">
         
        </h5>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">First Name</label>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label className="input-label">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Email</label>
            <input
              className="input"
              type="Email"
              placeholder="Enter Email"
              name="Emailvalue"
              value={this.state.Emailvalue}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Date of Birth</label>
            <input
              className="input"
              type="date"
              placeholder="DD/MM/YYYY"
              name="dob"
              value={this.state.dob}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Confirm Password</label>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="button-container" onClick={this.handleNextClick}>
          <button className="next-button">Next</button>
        </div>
      </div>
    );
  }
}
