import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ScreenHeader.css';


export default class RegistrationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  
    const userId = localStorage.getItem('user_id');
    const activeLinkStyle = { color: 'orange' };
    return (
      <nav style={{ borderBottom: '1px solid #E5E7EB',width:'95%' ,padding:20}} class="navbar navbar-expand-lg navbar-white  ">
        <div style={{ width: '95%', justifyContent: 'space-between' }} class="container-fluid main-cont">
        <div style={{display:'flex' ,justifyContent:'space-between'}}>
          <img style={{width: 50, height: 45}} alt='' src={require('../../Image/Group1.png')} />
          <Link to='/' style={{height:'30px',width:'155px',marginTop:6}} >
        <img  style={{height:'28px',width:'165px',marginLeft:10}} alt="Group" src={require('../../../assets/Group1.png')} />
             
    </Link>  
    </div>
          <button
          style={{ width: '120px' }}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div sty class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{marginLeft:90}} class="navbar-nav">
              <li class="nav-item">
                {/* Include user ID in the URL */}
                <Link class="nav-link active" aria-current="page" to={`/Dashboard/${userId}`} activeClassName="active">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/booking/${userId}`} activeClassName="active" activeStyle={{ color: 'orange' }}>
                  Booking History
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/earning/${userId}`} activeClassName="active">
                  Earning
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/mylisting/${userId}`} activeClassName="active">
                  My Listing
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ justifyContent: 'flex-end' }} class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to={`/ClientProfile/${userId}`}>
              <img src={require('../../../assets/sms.png')} alt='' />
            </Link>
            <img style={{ marginLeft: 15,width:25 }} src={require('../../../assets/notification.png')} alt='' />
            <Link to='/'>
              <button style={{ marginLeft: 15, height: 48 ,width: '170px' }} class="me-2 btn btn-outline-dark " type="submit">
                Become a User
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
