import React, { Component } from 'react';
import RegistrationHeader from './HomeHeader';
import { Link, useParams } from 'react-router-dom';
import './Checkout.css'


export default class Checkout extends Component {
  // componentDidMount() {
  //   // Make a GET request when the component mounts
  //   fetch('https://localhost:4000/booking/3') // Replace with your API endpoint
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the data from the API response
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('Error fetching data:', error);
  //     });
  // }

  
  componentDidMount() {

    const userId = useParams.userId;
    fetch(`https://localhost:4000/booking/${userId}`)
      .then(response => {
        this.setState({ apiData: response.data });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  
//   const starIcon = [      img: require('../../assets/Country.png'),
// ];

  render() {
    return (
      <div>
        <RegistrationHeader />

        <div className='main-section' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='side-section' style={{marginBottom: '2%', width: '30%', border: '1px solid rgba(229, 231, 235, 1)', marginTop: '1.8%', borderRadius: 8 }}>
            <div style={{  display: 'flex', justifyContent: 'space-evenly', marginTop: 20 }}>
              <div>
                <img style={{width: 180}} src={require('../../assets/Rectangle 12.png')} /><br />
              </div>
              <div className='pay-heading'>
                <label>Latimer Grand Oaks</label><br />
                <div>
                  <label style={{ fontSize: '80%' }}>From</label>
                  <label style={{ fontSize: '170%', color: '#F15A29', fontWeight: 750 }}>$1,119</label>
                  <label style={{ fontSize: '80%' }}>/night</label><br />
                </div>
                {/* <div>
                  {starIcon.map((item, index) => (
                    <img key={index} src={starIcon} alt={'Star ${index + 1}'} />
                  ))}
                </div> */}
                <img src={require('../../assets/Vector (1).png')} />
                <img src={require('../../assets/Vector (1).png')} />
                <img src={require('../../assets/Vector (1).png')} />
                <img src={require('../../assets/Vector (1).png')} />
                <img src={require('../../assets/Vector (1).png')} />
                <label style={{marginLeft: 5, marginTop: 2 }}>(200)</label>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '9%', justifyContent: 'space-between' }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                Check In
              </div>
              <div style={{ color: '#474554', marginRight: 20 }}>
                9/12/2022
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'space-between' }}>
              <div style={{ color: '#474554', marginLeft: 22, marginTop: '2%' }}>
                Check Out
              </div>
              <div style={{ color: '#474554', marginTop: '2%', marginRight: 20 }}>
                9/12/2022
              </div>
            </div>
            <h4 style={{ marginLeft: '5.5%', marginTop: 30, fontSize: 18 }}>Billing</h4>
            <div style={{ display: 'flex', marginTop: 15, justifyContent: 'space-between'  }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                5 Nights
              </div>
              <div style={{ color: '#474554', marginRight: 20  }}>
                $5,595
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 12 , justifyContent: 'space-between' }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                Rafting
              </div>
              <div style={{ color: '#474554', marginRight: 20  }}>
                $200
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 12 , justifyContent: 'space-between' }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                Breakfast
              </div>
              <div style={{ color: '#474554', marginRight: 20  }}>
                $500
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 12, justifyContent: 'space-between'  }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                Service Fee
              </div>
              <div style={{ color: '#474554', marginRight: 20  }}>
                $400
              </div>
            </div>
            <hr style={{ color: '#474554', width: '92%' }} />
            <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'space-between' }}>
              <div style={{ color: '#474554', marginLeft: 22 }}>
                Subtotal
              </div>
              <div>
                <label style={{ fontSize: 26, fontWeight: 750, marginRight: 20  }}>$6,695</label>
              </div>
            </div>
            <Link to='/VarifyBooking'>
              <button style={{marginBottom: 20, border: '1px solid black', width: '92%', marginTop: '3.5%', height: 40, border: 'none', background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)', color: '#FFFFFF', marginLeft: '3.5%', textAlign: 'center', borderRadius: 10 }}>
                Pay $6,695
              </button>
            </Link>
          </div>

          <div className='Payment-Option'>
            <h1>Payment Option</h1>
            <div className='sec-section' style={{ marginTop: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type='radio' style={{ border: "1px solid black", height: 20, width: 20, borderRadius: '100%' }}></input>&nbsp;&nbsp;
                <label>Credit Card</label>&nbsp;&nbsp;
                <img src={require('../../assets/Visa.png')} />&nbsp;&nbsp;
                <img src={require('../../assets/Mastercard.png')} />
              </div>
              <div className='First-Name' style={{ display: 'flex' }}>
                <div style={{ marginTop: 20, width: '100%' }}>
                  <label>First Name</label><br />
                  <input style={{ width: '100%', height: 42, borderRadius: 10, border: '2px solid #E2E8F0', marginTop: '2%', paddingLeft: 10 }} type='text' placeholder='First Name' />
                </div>
                <div className='lastname' style={{ marginLeft: '2%', marginTop: '2.5%', width: '100%' }}>
                  <label>Last Name</label><br />
                  <input style={{ width: '100%', height: 42, borderRadius: 10, border: '1px solid #E2E8F0', marginTop: '2%', paddingLeft: 10 }} type='text' placeholder='Last Name' />
                </div>
              </div>
              <div style={{ marginTop: 20, width: '100%' }}>
                <label>Card Number</label><br />
                <input style={{ width: '100%', height: 42, border: '1px solid #E2E8F0', borderRadius: 10, marginTop: '1%', paddingLeft: 10 }} type='number' placeholder='' />
              </div>
              <div className='First-Name' style={{ display: 'flex', marginTop: 20, }}>
                <div style={{ width: '100%' }}>
                  <label>Expiration Date</label><br />
                  <input style={{ width: '100%', height: 42, border: '2px solid #E2E8F0', borderRadius: 10, marginTop: '2%', paddingLeft: 10 }} type='text' />
                </div>
                <div className='code-secu' style={{ marginLeft: 20, width: '100%' }} >
                  <label style={{ color: '#474554' }} >Security Code</label><br />
                  <input style={{ width: '100%', height: 42, border: '2px solid #E2E8F0', borderRadius: 10, marginTop: '2%', paddingLeft: 10 }} type='text' />
                </div>
              </div>
            </div>
            <div style={{ marginTop: 40, justifyContent: " ", display: 'flex', alignItems: 'center' }}>
              <input type='radio' style={{ border: "1px solid black", height: 20, width: 20, borderRadius: '100%' }}></input>&nbsp;&nbsp;
              <label style={{ fontSize: '125%' }}>PayPal</label>&nbsp;&nbsp;
              <img src={require('../../assets/PayPal.png')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

