import React, { useState } from 'react';
import './Signup.css';
import logo from '../screens/Image/Group.png';
import LogoText from '../assets/LogoText.png';
import Facebook from '../assets/Face.png';
import Faceboos from '../assets/Faceboos.png';
import Twitter from '../screens/Image/Twitter.png';
import Instagram from '../screens/Image/Instagram.png';
import Google from '../assets/Goo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BaseUrl from './Server/BaseUrl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Signup() {
  let navigate = useNavigate();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dob, setDob] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      numericRegex.test(password) &&
      specialCharRegex.test(password) &&
      password.length >= 6
    );
  };

  const SignupFun = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one numeric character, and one special character.');
      return;
    }

    if (password !== confirm_password) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Proceed with signup API call
    let data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      dob: dob,
      confirm_password: confirm_password,
    };

    fetch(BaseUrl.BaseUrl + '/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson?.error) {
          setErrorMessage(responseJson.error.message || JSON.stringify(responseJson.error));
        } else {
          console.log(responseJson);
          localStorage.setItem('token', responseJson.authToken);
          localStorage.setItem('user_id', responseJson.user_id);

          // Check for success message
          if (responseJson.message === 'User created successfully') {
            navigate('/Login'); // Redirect to login page
          } else if (responseJson.message) {
            // If there's any other message from the backend, alert it
            alert(responseJson.message);
          } else  {
            // If no specific message, alert a generic error
            alert(responseJson.message);
          }
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        setErrorMessage('An error occurred: ' + error.message);
      });
  };

  return (
    <div className='Main-Container'>
      <div className='Container'>
        <div className="row">
          <div className="col-md-6">
            <div className='signup-img'>
              <img style={{}} src={require('../assets/Rectangle 61.png')} alt='' />
              <div className='detail' style={{ padding: 20 }}>
                <div style={{ flexDirection: 'row', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Link to='/' style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ width: 45, height: 40, marginTop: 5 }} src={logo} alt='' />
                    <img src={LogoText} alt='' />
                  </Link>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <a href='https://www.facebook.com/profile.php?id=61557976032264&mibextid=ZbWKwL'> <img style={{ width: 25, height: 25, marginRight: 10 }} src={Faceboos} alt='' /></a>
                    <a href='https://x.com/caribbeaneaze?t=2E6AWgzQswNNT2x_gdjYLw&s=08'> <img style={{ width: 25, height: 25, marginRight: 10 }} src={Twitter} alt='' /></a>
                    <a href='https://www.instagram.com/caribbeaneaze?igsh=MWZ2eTR0M3ByZ21h'> <img style={{ width: 25, height: 25, marginRight: 10 }} src={Instagram} alt='' /></a>
                  </div>
                </div>
                <div className='signup-descap'>
                  <p>
                    Welcome to Caribbeaneaze – A Free Mind to Your Journey<br />
                    Discover our collection of Caribbean properties, from luxurious villas and cozy cottages to
                    beachfront homes and budget-friendly stays. Whether you seek tranquility or adventure,
                    Caribbeaneaze connects you with unique hosts and unforgettable experiences.<br />
                    Log in or create an account to start your journey. Follow us on social media for the latest
                    listings and offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ width: '85%', margin: '0 auto' }}>
              <div className='regis-heading d-flex justify-content-between mt-2'>
                <p>Registration</p>
              </div>
              <div className='d-flex align-items-center mt-2'>
                <div className='social-btn'>
                  <img src={Facebook} alt='' />
                  <label>Facebook</label>
                </div>
                <div className='social-btn' style={{ marginLeft: 108 }}>
                  <img src={Google} alt='' />
                  <label>Google</label>
                </div>
              </div>
              <div className='fieldtext' style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between', gap: 10 }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={first_name}
                  onChange={e => setFirst_name(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={last_name}
                  onChange={e => setLast_name(e.target.value)}
                />
              </div>
              <div className='fieldtext' style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between', gap: 10 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="date"
                  value={dob}
                  onChange={e => setDob(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className='fieldtext' style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between', gap: 10 }}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton style={{ width: 30, height: 30, background: "none" }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirm_password}
                  onChange={e => setConfirm_password(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton style={{ width: 30, height: 30, background: "none" }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <p style={{ color: 'red' }}>{errorMessage}</p>
              <button className='signup-btn' onClick={SignupFun}>
                Sign Up
              </button>
              <div className='signup-footer' style={{ marginTop: 20, textAlign: 'center' }}>
                <span>Already have an account? <NavLink to='/Login' className='link'>Sign In</NavLink></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
