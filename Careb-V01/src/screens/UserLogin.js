import React, { useState } from 'react';
import './Signup.css';
import LogoText from '../assets/LogoText.png';
import logo from '../screens/Image/Group.png';
import Faceboos from '../assets/Faceboos.png';
import Twitter from '../screens/Image/Twitter.png';
import Instagram from '../screens/Image/Instagram.png';
import Google from '../assets/Goo.png';
import reCAPTCHA from '../screens/Image/reCAPTCHA.png';
import { NavLink, useNavigate } from 'react-router-dom';
import BaseUrl from './Server/BaseUrl';
import ForgotPasswordModal from './ForgotPasswordModal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const loginMethod = () => {
    const data = {
      email,
      password,
    };
    fetch(BaseUrl.BaseUrl + '/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson?.error) {
          alert(JSON.stringify(responseJson?.error));
        } else {
          localStorage.setItem('user_id', responseJson.user_id);
          navigate("/TermsConditionuser");
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  const handlePasswordChange = (email, newPassword, confirmPassword) => {
    const data = {
      email: email,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };
  
    fetch(BaseUrl.BaseUrl + '/auth/change_password', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson?.error) {
          alert(JSON.stringify(responseJson?.error));
        } else {
          alert(responseJson.message);
          setModalIsOpen(false);
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <div className="Main-Container">
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-6 p-0">
            <div className='signup-img'>
              <img style={{}} src={require('../assets/Rectangle 61.png')} />
              <div className='detail' style={{ padding: 20 }}>
                <div style={{
                  flexDirection: 'row',
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%'
                }}>
                  <Link to='/' style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img style={{width: 45, height: 40, marginTop: 5}} src={logo} alt=''/>
                    <img src={LogoText} alt=''/>
                  </Link>
                  <div style={{flexDirection: 'row', display: 'flex'}}>
                    <a href='https://www.facebook.com/profile.php?id=61557976032264&mibextid=ZbWKwL'> <img
                        style={{width: 25, height: 25, marginRight: 10}} src={Faceboos} alt=''/></a>
                    <a href='https://x.com/caribbeaneaze?t=2E6AWgzQswNNT2x_gdjYLw&s=08'> <img
                        style={{width: 25, height: 25, marginRight: 10}} src={Twitter} alt=''/></a>
                    <a href='https://www.instagram.com/caribbeaneaze?igsh=MWZ2eTR0M3ByZ21h'> <img
                        style={{width: 25, height: 25, marginRight: 10}} src={Instagram} alt=''/></a>
                  </div>
                </div>
                <div className='signup-descap'>
                  <p>
                    Welcome to Caribbeaneaze – A Free Mind to Your Journey<br/>
                    Discover our collection of Caribbean properties, from luxurious villas and cozy cottages to
                    beachfront homes and budget-friendly stays. Whether you seek tranquility or adventure,
                    Caribbeaneaze connects you with unique hosts and unforgettable experiences<br/>
                    Log in or create an account to start your journey. Follow us on social media for the latest
                    listings and offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div style={{ width: '85%', margin: '0 auto' }}>
              <div className='top-log' style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginTop: 25 }}>
                {/* <p style={{ fontWeight: '700', fontSize: 30, color: '#000' }}>Login</p> */}
                <div className='socical-mo' style={{ display: 'flex', flexDirection: 'row', borderColor: '#C4C4C4', backgroundColor: "#F8FAFC", width: '100%', height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'flex-start', padding: 10, justifyContent: 'center'}}>
                  <img style={{ width: 25, height: 25, marginLeft: 10 }} src={Google} alt="" />
                  <label style={{ marginLeft: 10, fontSize: 16, color: '#474554' }}>Continue with Google</label>
                </div>
              </div>
              <div className='or d-flex mt-3'>
                <div style={{ borderBottom: '1px solid #a4a4a4'}}></div>
                <h6>or</h6>
                <div style={{ borderBottom: '1px solid #a4a4a4'}}></div>
              </div>
              <div className='social-media'  style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                {/* <div style={{ display: 'flex', flexDirection: 'row', borderColor: '#C4C4C4', backgroundColor: "#F8FAFC", width: 'auto', height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'flex-start', padding: 10 }}>
                  <img style={{ width: 25, height: 25, marginLeft: 10 }} src={Facebook} alt="" />
                  <label style={{ marginLeft: 10, fontSize: 20, color: '#474554' }}>Facebook</label>
                </div> */}
              </div>
              <div style={{ height: '100%'}}>
                <div style={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    style={{ marginBottom: 15 }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton  style={{width:30,height:30,background:"none"}}
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 8 }}>
                  <button
                    style={{ fontSize: 14, color: '#0F172A', fontWeight: '500', alignSelf: 'flex-end', marginTop: 5 ,background:'none',width:150,border:'none'}}
                    onClick={() => setModalIsOpen(true)}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className='robot' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '60%', marginTop: 10, height: 75, boxShadow: `1px 1px 2px 2px ${'#D3D3D3'}`, background: '#F9F9F9' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input style={{ width: 25, height: 25 }} type="checkbox" />
                    <p style={{ fontSize: 18, padding: '0px  10px', color: '#000' }}>I'm not a robot</p>
                  </div>
                  <img style={{ width: 70, height: 65, marginRight: 10 }} src={reCAPTCHA} alt='' />
                </div>
                <button onClick={loginMethod} style={{ background: '#F15A29', width: '100%', height: 45, marginTop: 25, borderWidth: 0, borderRadius: 8, fontSize: 22, color: 'white', fontWeight: '500' }}>Login</button>
                <div className='accounr-reg' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 20 }}>
                  <label style={{ fontSize: 16, color: '#0F172A' }}>Don't have an account?</label>
                  <NavLink to='/usersignup' style={{ backgroundColor: 'white', fontSize: 16, border: 'none', color: '#0F172A', fontWeight: 'bold', padding: 5 }}>Register</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Forgot password modal */}
      <ForgotPasswordModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onPasswordChange={handlePasswordChange}
      />
    </div>
  );
}

export default Login;
