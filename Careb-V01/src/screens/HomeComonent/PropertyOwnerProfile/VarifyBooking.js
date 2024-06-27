import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import HomeHeader from '../HomeHeader';
import './VerifyBooking.css';
import BaseUrl from '../../Server/BaseUrl';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default class VerifyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: countryList().getData(),
      checkInDate: '',
      checkOutDate: '',
      totalPrice: 0,
      selectedServices: [],
      paypalTransactionId: '',
      cardType: '', // Store card details
      cardLastFourDigits: '', // Store card details
      bookingCompleted: false,
    };
  }

  componentDidMount() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    console.log('booking',bookingData)
    if (bookingData) {
      this.setState({
        checkInDate: bookingData.checkInDate,
        checkOutDate: bookingData.checkOutDate,
        totalPrice: bookingData.totalPrice,
        basePrice: bookingData.basePrice,
        numNights: bookingData.numNights,
        selectedServices: bookingData.selectedServices,
        ratePerNight: bookingData.ratePerNight,
      });
    }
  }
  

  changeHandler = (selectedOption) => {
    this.setState({ value: selectedOption });
  };

  handleBooking = () => {
    const { checkInDate, checkOutDate, totalPrice, selectedServices, paypalTransactionId, cardType, cardLastFourDigits } = this.state;
    const propertyId = this.props.location.state.bookingData.property_id;
    const userId = localStorage.getItem('user_id');

    const data = {
      user_id: userId,
      property_id: propertyId,
      entry_date: checkInDate,
      exit_date: checkOutDate,
      extra_services: selectedServices,
      total_amount: totalPrice,
      paypal_transaction_id: paypalTransactionId, // Pass PayPal transaction ID to backend
      card_type: cardType, // Pass card details to backend
      card_last_four_digits: cardLastFourDigits, // Pass card details to backend
    };

    fetch(BaseUrl.BaseUrl + '/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log('Error: ' + data.error);
        } else {
          console.log('Booking successful!', data);
          this.setState({ bookingCompleted: true });
        }
      })
      .catch((error) => {
        console.error('API request failed:', error);
        alert('Error submitting booking. Please try again.');
      });
  };

  render() {
    const { value, options } = this.state;

    return (
      <div>
        <HomeHeader />
        <div className='main-heading' style={{ margin: '0 auto', display: 'grid', justifyContent: 'center', marginTop: "5vh" }}>
          <h2 style={{ color: '#000000', fontWeight: 'bold' }}>Verify Before Booking</h2>
        </div>
        <div className='box-width' style={{ width: '60%', padding: 30, justifyContent: 'center', display: 'grid', margin: '0 auto' }}>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: 28, fontWeight: '700', color: '#000000', textAlign: 'center' }}>Passport/ID Verification</h4>
            <label style={{ paddingTop: 5, fontSize: 14, fontWeight: '400', width: '80%', color: '#0F172A' }}>
              Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
              cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
              by the camera's flash.
            </label>
          </div>

          <div className='media-box' style={{ width: '80%', height: '20%', padding: 20, margin: '0 auto' }}>
            <label style={{ color: '#474554' }}>Country</label>
            <br />
            <Select
              options={options} value={value} onChange={this.changeHandler} />
            <br />

            <input type="radio" /> Passport <br />
            <input type="radio" /> National ID <br />

          </div>

          <div className='drop-box' style={{ width: '80%', height: '30%', padding: 20, margin: '0 auto' }}>
            <label style={{ color: '#474554' }}>{this.props.title}</label><br />
            <div style={{ width: '100%',  padding: 20 }}>
   
   <label
     htmlFor="fileInput"
     style={{
       width: '100%',
       justifyContent: 'center',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       height: 114,
       borderWidth: 0.1,
       marginTop: 5,
       borderColor: '#94A3B8',
       color: '#94A3B8',
       border: '1.5px dashed',
       borderRadius: 7,
       cursor: 'pointer',
     }}
   >
     <div style={{ display: 'flex' }}>
       <label style={{ fontSize: 16, fontWeight: '600', color: '#94A3B8' }}>Drag your files or Browse</label>
       <input type="file" id="fileInput" style={{ display: 'none' }}  />
       { <p>Selected file: </p>}
     </div>
     <label style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>Add Both Side Image of Certificate</label>
   </label>
 </div>
            
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', alignItems: 'center', justifyContent: 'flex-end',width:'100%' }}>
            {this.state.bookingCompleted ? (
              <div>Booking successful! Thank you for booking.</div>
            ) : (
              <PayPalScriptProvider options={{ "client-id": "AWPh3PQrXOHJQYviQ7qoL1Vk0Z20PRWaSy09L8LT0uQT09Kd9GHfedOAGbJp7Gp6gZNIfd1Jt59JImLN" }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: this.state.totalPrice.toFixed(2),
                        },
                      }],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      alert('Transaction completed by ' + details.payer.name.given_name);
                      this.setState({
                        paypalTransactionId: details.id, // Store PayPal transaction ID
                        // cardType: details.payer.funding_instruments[0].card.type, // Example: Store card details
                        // cardLastFourDigits: details.payer.funding_instruments[0].card.last4 // Example: Store card details
                      }, () => {
                        this.handleBooking(); // Call backend booking function after successful payment
                      });
                    });
                  }}
                />
              </PayPalScriptProvider>
            )}
          </div>
          </div>

       
        </div>
      
      </div>
    );
  }
}
