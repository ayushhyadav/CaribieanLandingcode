import React, { Component } from 'react';
import BaseUrl from '../Server/BaseUrl';
import './Deshbord/ClientProfile/Information.css';

const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "" // this is where our error message gets across
};

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      dob: '',
      current_password: '',
      confirm_password: '',
      errorMessage: '',
      user_id: localStorage.user_id,

      email: { ...txtFieldState, fieldName: "Email", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format" },
      firstname: { ...txtFieldState, fieldName: "First Name", required: true, requiredTxt: "First Name is required" },
      lastname: { ...txtFieldState, fieldName: "Last Name", required: false, requiredTxt: "Last Name is required" },
      allFieldsValid: false
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = async () => {
    try {
      const response = await fetch(BaseUrl.BaseUrl + `/auth/user?user_id=${this.state.user_id}`);
      const data = await response.json();
      console.log('data', data);

      if (response.ok) {
        this.setState({
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          email: data.user.email,
          dob: data.user.dob,
          current_password: '',
          confirm_password: ''
        });
      } else {
        this.setState({ errorMessage: data.message });
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.setState({ errorMessage: 'Failed to fetch user data' });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNextClick = async () => {
    const {
      first_name,
      last_name,
      email,
      dob,
      current_password,
      confirm_password,
      user_id,
    } = this.state;

    if (!first_name || !last_name || !email || !dob || !current_password || !confirm_password) {
      this.setState({ errorMessage: 'All fields are required.' });
      alert('All fields are required.');
      return;
    }

    if (current_password !== confirm_password) {
      this.setState({ errorMessage: 'Passwords must match.' });
      alert('Passwords must match.');
      return;
    }

    const userData = {
      user_id,
      first_name,
      last_name,
      email,
      dob,
      current_password,
      confirm_password
    };

    try {
      const response = await fetch(BaseUrl.BaseUrl + `/auth/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();

      if (response.ok) {
        alert('User updated successfully');
        console.log('data', data);
        this.props.NextCallBack({
          navigationTo: 'Upload_Profile',
          id: 2,
          type: 'Next',
        });
        this.fetchUserData();
      } else {
        this.setState({ errorMessage: data.message });
        alert(data.message);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      this.setState({ errorMessage: 'Failed to update user data' });
    }
  };

  render() {
    return (
      <div className="information-container">
        <label className="step-label">Step 1/8</label>
        <h4 className="section-title">Personal Information</h4>
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
              type="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
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
              required
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Current Password</label>
            <input
              className="input"
              type="password"
              placeholder="Current Password"
              name="current_password"
              value={this.state.current_password}
              onChange={this.handleInputChange}
              required
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
              required
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
