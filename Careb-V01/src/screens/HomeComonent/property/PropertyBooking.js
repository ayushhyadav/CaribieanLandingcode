// import React, { Component } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import './PropertyBooking.css';
// import BaseUrl from '../../Server/BaseUrl';
//
// const PAYPAL_CLIENT_ID = 'AYjAKU2nevKuH9Q9eRN8IgIpgF3IHmnIOYmmWR101W0rpUNJbvAravn4yaP1ISkKFqSOpXxt90A7Puv8';
//
// const Order = [
//   {
//     item: 'Rafting',
//     price: 200,
//   },
//   {
//     item: 'Exotic Food',
//     price: 300,
//   },
//   {
//     item: 'Pick and Drop',
//     price: 400,
//   },
// ];
//
// const Order2 = [
//   {
//     item2: 'BBQ',
//     price: 150,
//   },
//   {
//     item2: 'BreakFast',
//     price: 250,
//   },
// ];
//
// export default class PropertyBooking extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       checkInDate: '',
//       checkOutDate: '',
//       totalPrice: 0,
//       basePrice: 0,
//       numNights: 0,
//       selectedServices: [],
//       rate_per_night: 0,
//       paymentCompleted: false,
//     };
//   }
//
//   handleDateChange = (event) => {
//     const { id, value } = event.target;
//     if (id === 'checkIn') {
//       this.setState({ checkInDate: value });
//     } else {
//       this.setState({ checkOutDate: value }, () => this.calculateTotalPrice());
//     }
//   };
//
//   handleServiceClick = (item, price) => {
//     this.setState((prevState) => {
//       const selectedServices = [...prevState.selectedServices];
//       const index = selectedServices.findIndex((service) => service.item === item);
//
//       if (index !== -1) {
//         selectedServices.splice(index, 1);
//       } else {
//         selectedServices.push({ item, price });
//       }
//
//       this.setState({ selectedServices }, () => this.calculateTotalPrice());
//     });
//   };
//
//   calculateTotalPrice() {
//     const { checkInDate, checkOutDate, selectedServices } = this.state;
//
//     if (checkInDate && checkOutDate) {
//       const startDate = new Date(checkInDate);
//       const endDate = new Date(checkOutDate);
//       const numNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//
//       const basePrice = numNights * this.state.rate_per_night;
//
//       let amount = 0;
//       selectedServices.forEach((value) => (amount += value.price));
//
//       const totalPrice = basePrice + amount;
//       this.setState({ totalPrice, numNights, basePrice });
//     } else {
//       let amount = 0;
//       selectedServices.forEach((value) => (amount += value.price));
//
//       const totalAmount = this.state.numNights * this.state.rate_per_night;
//       this.setState({ totalPrice: totalAmount + amount });
//     }
//   }
//
//   handlePaymentSuccess = (details, data) => {
//     console.log('Payment successful:', details);
//
//     const { checkInDate, checkOutDate, totalPrice, selectedServices } = this.state;
//     const user_id = "2"; // Replace with actual user ID
//     const property_id = "12"; // Replace with actual property ID
//
//     const bookingData = {
//       user_id,
//       property_id,
//       entry_date: checkInDate,
//       exit_date: checkOutDate,
//       extra_services: selectedServices,
//       total_amount: totalPrice,
//     };
//
//     fetch(`${BaseUrl}/booking`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(bookingData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('API response:', data);
//         if (data.error) {
//           this.setState({ errorMessage: data.error.message });
//           alert('Error: ' + data.error.message);
//         } else {
//           console.log('Booking successful:', data);
//           this.setState({ paymentCompleted: true });
//         }
//       })
//       .catch((error) => {
//         console.error('API request failed:', error);
//       });
//   };
//
//   render() {
//     const { propertyData } = this.props;
//     this.state.rate_per_night = propertyData?.price_per_night;
//     const { selectedValue } = this.props;
//
//     return (
//       <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
//         <div className="booking-container mobile-res">
//           <form className="booking-form">
//             <div className="booking-content">
//               <div className='top-section'>
//                 <div className='heding-opo'>
//                   <label className="night-label">From</label>
//                   <label className="price-label">${this.state.rate_per_night}</label>
//                   <label className="night-label">/night</label>
//                 </div>
//                 <div className='close-btn'>
//                   <button style={{ border: 'none', background: 'none' }} onClick={() => this.props.closeModule()}>
//                     <img style={{ float: 'left' }} src={require('../../../assets/close-circle.png')} alt="Close" />
//                   </button>
//                 </div>
//               </div>
//
//               <div className="input-group">
//                 <label htmlFor="checkIn">Check In</label>
//                 <input
//                   className="date-input"
//                   style={{ borderRadius: 10 }}
//                   type="date"
//                   id="checkIn"
//                   onChange={this.handleDateChange}
//                 />
//
//                 {/* Display the selectedValue near the checkIn date input */}
//                 {selectedValue && (
//                   <div className="selected-value">
//                     Selected Value: {selectedValue.startDate}
//                   </div>
//                 )}
//
//                 <label style={{ fontSize: 14, marginTop: 20 }} htmlFor="checkOut">Check Out</label>
//                 <input
//                   className="date-input"
//                   style={{ borderRadius: 10 }}
//                   type="date"
//                   id="checkOut"
//                   onChange={this.handleDateChange}
//                 />
//
//                 {/* Display the selectedValue near the checkOut date input */}
//                 {selectedValue && (
//                   <div className="selected-value">
//                     Selected Value: {selectedValue.startDate}
//                   </div>
//                 )}
//               </div>
//
//               <div className="service-options">
//                 <label>Choose Extra Service</label>
//                 <div
//                   style={{
//                     display: 'flex',
//                     marginTop: 10,
//                     width: '100%',
//                     justifyContent: 'flex-start',
//                     flexWrap: 'wrap'
//                   }}
//                 >
//                   {Order.map((service, index) => (
//                     <ul
//                       style={{
//                         listStyleType: 'none',
//                         padding: 0,
//                         margin: 6,
//                       }}
//                       key={index}
//                     >
//                       <li
//                         onClick={() => this.handleServiceClick(service.item, service.price)}
//                         style={{
//                           background: this.state.selectedServices.some((s) => s.item === service.item)
//                             ? '#F15A29'
//                             : '#F3F4F6',
//                           borderRadius: 5,
//                           color: this.state.selectedServices.some((s) => s.item === service.item)
//                             ? 'white'
//                             : '#6B7280',
//                           fontSize: 15,
//                           cursor: 'pointer',
//                           padding: '7px 15px'
//                         }}
//                       >
//                         {service.item}
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//
//                 <div style={{ display: 'flex' }}>
//                   {Order2.map((service, index) => (
//                     <ul
//                       style={{
//                         listStyleType: 'none',
//                         padding: 0,
//                         margin: 6,
//                       }}
//                       key={index}
//                     >
//                       <li
//                         onClick={() => this.handleServiceClick(service.item2, service.price)}
//                         style={{
//                           background: this.state.selectedServices.some((s) => s.item === service.item2)
//                             ? '#F15A29'
//                             : '#F3F4F6',
//                           borderRadius: 5,
//                           color: this.state.selectedServices.some((s) => s.item === service.item2)
//                             ? 'white'
//                             : '#6B7280',
//                           fontSize: 15,
//                           padding: '7px 15px'
//                         }}
//                       >
//                         {service.item2}
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>
//
//               <div className="billing">
//                 <h5 style={{ fontSize: 14, fontWeight: 600 }}>Billing</h5>
//                 <div className="billing-row">
//                   <h6 style={{ fontSize: 18 }}>{this.state.numNights} Nights</h6>
//                   <h6>${this.state.basePrice}</h6>
//                 </div>
//                 {this.state.selectedServices.map((service, index) => (
//                   <div className="billing-row" key={index}>
//                     <h6>{service.item}</h6>
//                     <h6>${service.price}</h6>
//                   </div>
//                 ))}
//                 <div style={{ borderTop: '1px solid #E5E7EB', padding: 5 }} className="billing-row">
//                   <h6>Subtotal</h6>
//                   <h6 className="subtotal-amount">${this.state.totalPrice}</h6>
//                 </div>
//               </div>
//               {this.state.paymentCompleted ? (
//                 <div>Payment successful! Thank you for booking.</div>
//               ) : (
//                 <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [
//                         {
//                           amount: {
//                             currency_code: 'USD',
//                             value: this.state.totalPrice,
//                           },
//                         },
//                       ],
//                     });
//                   }}
//                   onApprove={( data, actions) => {
//                     return actions.order.capture().then((details) => {
//                       this.handlePaymentSuccess(details, data);
//                     });
//                   }}
//                 />
//               )}
//             </div>
//           </form>
//         </div>
//       </PayPalScriptProvider>
//     );
//   }
// }
//
// import React, { Component } from 'react';
// import './PropertyBooking.css';
// import BaseUrl from '../../Server/BaseUrl';
//
// const Order = [
//   {
//     item: 'Rafting',
//     price: 200,
//   },
//   {
//     item: 'Exotic Food',
//     price: 300,
//   },
//   {
//     item: 'Pick and Drop',
//     price: 400,
//   },
// ];
//
// const Order2 = [
//   {
//     item2: 'BBQ',
//     price: 150,
//   },
//   {
//     item2: 'BreakFast',
//     price: 250,
//   },
// ];
//
// export default class PropertyBooking extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       checkInDate: '',
//       checkOutDate: '',
//       totalPrice: 0,
//       basePrice: 0,
//       numNights: 0,
//       selectedServices: [],
//       rate_per_night: 0,
//       bookingCompleted: false,
//       errorMessage: '',
//     };
//   }
//
//   handleDateChange = (event) => {
//     const { id, value } = event.target;
//     if (id === 'checkIn') {
//       this.setState({ checkInDate: value });
//     } else {
//       this.setState({ checkOutDate: value }, () => this.calculateTotalPrice());
//     }
//   };
//
//   handleServiceClick = (item, price) => {
//     this.setState((prevState) => {
//       const selectedServices = [...prevState.selectedServices];
//       const index = selectedServices.findIndex((service) => service.item === item);
//
//       if (index !== -1) {
//         selectedServices.splice(index, 1);
//       } else {
//         selectedServices.push({ item, price });
//       }
//
//       this.setState({ selectedServices }, () => this.calculateTotalPrice());
//     });
//   };
//
//   calculateTotalPrice() {
//     const { checkInDate, checkOutDate, selectedServices } = this.state;
//
//     if (checkInDate && checkOutDate) {
//       const startDate = new Date(checkInDate);
//       const endDate = new Date(checkOutDate);
//       const numNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//
//       const basePrice = numNights * this.state.rate_per_night;
//
//       let amount = 0;
//       selectedServices.forEach((value) => (amount += value.price));
//
//       const totalPrice = basePrice + amount;
//       this.setState({ totalPrice, numNights, basePrice });
//     } else {
//       let amount = 0;
//       selectedServices.forEach((value) => (amount += value.price));
//
//       const totalAmount = this.state.numNights * this.state.rate_per_night;
//       this.setState({ totalPrice: totalAmount + amount });
//     }
//   }
//
//   handleBooking = (event) => {
//     event.preventDefault();
//
//     const { checkInDate, checkOutDate, totalPrice, selectedServices } = this.state;
//     console.log('propsID ',this.props.propertyData.property_id)
//
//     const propertyId = this.props.propertyData.property_id;
//     // const userId = "1718186414253";
//     const userId = localStorage.getItem('user_id');
//     // const propertyId = "1716531692041c2221b093dff4";
//     console.log('userid',userId)
//     const data = {
//       user_id: userId,
//       property_id: propertyId,
//       entry_date: checkInDate,
//       exit_date: checkOutDate,
//       extra_services: selectedServices,
//       total_amount: totalPrice,
//     };
//
//     fetch(BaseUrl.BaseUrl + '/booking', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           console.log('Error: ' + data.error);
//         } else {
//           console.log('Booking successful!',data);
//           // window.location.href = '/checkout';
//         }
//       })
//       .catch((error) => {
//         console.error('API request failed:', error);
//         alert('Error submitting booking. Please try again.');
//       });
//   };
//
//
//   render() {
//     const { propertyData } = this.props;
//     this.state.rate_per_night = propertyData?.price_per_night;
//     const { selectedValue } = this.props;
//
//     return (
//       <div className="booking-container mobile-res">
//         <form className="booking-form">
//           <div className="booking-content">
//             <div className='top-section'>
//               <div className='heding-opo'>
//                 <label className="night-label">From</label>
//                 <label className="price-label">${this.state.rate_per_night}</label>
//                 <label className="night-label">/night</label>
//               </div>
//               <div className='close-btn'>
//                 <button style={{ border: 'none', background: 'none' }} onClick={() => this.props.closeModule()}>
//                   <img style={{ float: 'left' }} src={require('../../../assets/close-circle.png')} alt="Close" />
//                 </button>
//               </div>
//             </div>
//
//             <div className="input-group">
//               <label htmlFor="checkIn">Check In</label>
//               <input
//                 className="date-input"
//                 style={{ borderRadius: 10 }}
//                 type="date"
//                 id="checkIn"
//                 onChange={this.handleDateChange}
//               />
//
//               {/* Display the selectedValue near the checkIn date input */}
//               {selectedValue && (
//                 <div className="selected-value">
//                   Selected Value: {selectedValue.startDate}
//                 </div>
//               )}
//
//               <label style={{ fontSize: 14, marginTop: 20 }} htmlFor="checkOut">Check Out</label>
//               <input
//                 className="date-input"
//                 style={{ borderRadius: 10 }}
//                 type="date"
//                 id="checkOut"
//                 onChange={this.handleDateChange}
//               />
//
//               {/* Display the selectedValue near the checkOut date input */}
//               {selectedValue && (
//                 <div className="selected-value">
//                   Selected Value: {selectedValue.startDate}
//                 </div>
//               )}
//             </div>
//
//             <div className="service-options">
//               <label>Choose Extra Service</label>
//               <div
//                 style={{
//                   display: 'flex',
//                   marginTop: 10,
//                   width: '100%',
//                   justifyContent: 'flex-start',
//                   flexWrap: 'wrap'
//                 }}
//               >
//                 {Order.map((service, index) => (
//                   <ul
//                     style={{
//                       listStyleType: 'none',
//                       padding: 0,
//                       margin: 6,
//                     }}
//                     key={index}
//                   >
//                     <li
//                       onClick={() => this.handleServiceClick(service.item, service.price)}
//                       style={{
//                         background: this.state.selectedServices.some((s) => s.item === service.item)
//                           ? '#F15A29'
//                           : '#F3F4F6',
//                         borderRadius: 5,
//                         color: this.state.selectedServices.some((s) => s.item === service.item)
//                           ? 'white'
//                           : '#6B7280',
//                         fontSize: 15,
//                         cursor: 'pointer',
//                         padding: '7px 15px'
//                       }}
//                     >
//                       {service.item}
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//
//               <div style={{ display: 'flex' }}>
//                 {Order2.map((service, index) => (
//                   <ul
//                     style={{
//                       listStyleType: 'none',
//                       padding: 0,
//                       margin: 6,
//                     }}
//                     key={index}
//                   >
//                     <li
//                       onClick={() => this.handleServiceClick(service.item2, service.price)}
//                       style={{
//                         background: this.state.selectedServices.some((s) => s.item === service.item2)
//                           ? '#F15A29'
//                           : '#F3F4F6',
//                         borderRadius: 5,
//                         color: this.state.selectedServices.some((s) => s.item === service.item2)
//                           ? 'white'
//                           : '#6B7280',
//                         fontSize: 15,
//                         padding: '7px 15px'
//                       }}
//                     >
//                       {service.item2}
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//             </div>
//
//             <div className="billing">
//               <h5 style={{ fontSize: 14, fontWeight: 600 }}>Billing</h5>
//               <div className="billing-row">
//                 <h6 style={{ fontSize: 18 }}>{this.state.numNights} Nights</h6>
//                 <h6>${this.state.basePrice}</h6>
//               </div>
//               {this.state.selectedServices.map((service, index) => (
//                 <div className="billing-row" key={index}>
//                   <h6>{service.item}</h6>
//                   <h6>${service.price}</h6>
//                 </div>
//               ))}
//               <div style={{ borderTop: '1px solid #E5E7EB', padding: 5 }} className="billing-row">
//                 <h6>Subtotal</h6>
//                 <h6 className="subtotal-amount">${this.state.totalPrice}</h6>
//               </div>
//             </div>
//
//             {this.state.bookingCompleted ? (
//               <div>Booking successful! Thank you for booking.</div>
//             ) : (
//               <button type="button" onClick={this.handleBooking} className="confirm-booking-btn">
//                 Confirm Booking
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import './PropertyBooking.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import BaseUrl from '../../Server/BaseUrl';

const Order = [
  { item: 'Rafting', price: 200 },
  { item: 'Exotic Food', price: 300 },
  { item: 'Pick and Drop', price: 400 },
];

const Order2 = [
  { item2: 'BBQ', price: 150 },
  { item2: 'BreakFast', price: 250 },
];

export default class PropertyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      checkOutDate: '',
      totalPrice: 0,
      basePrice: 0,
      numNights: 0,
      selectedServices: [],
      rate_per_night: 0,
      bookingCompleted: false,
      errorMessage: '',
      paypalTransactionId: '', // Store PayPal transaction ID
      cardType: '', // Store card details
      cardLastFourDigits: '', // Store card details
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Example of triggering backend booking function after successful payment capture
    if (this.state.paypalTransactionId && !prevState.paypalTransactionId) {
      this.handleBooking();
    }
  }


  handleDateChange = (event) => {
    const { id, value } = event.target;
    if (id === 'checkIn') {
      this.setState({ checkInDate: value });
    } else {
      this.setState({ checkOutDate: value }, () => this.calculateTotalPrice());
    }
  };

  handleServiceClick = (item, price) => {
    this.setState((prevState) => {
      const selectedServices = [...prevState.selectedServices];
      const index = selectedServices.findIndex((service) => service.item === item);

      if (index !== -1) {
        selectedServices.splice(index, 1);
      } else {
        selectedServices.push({ item, price });
      }

      this.setState({ selectedServices }, () => this.calculateTotalPrice());
    });
  };

  calculateTotalPrice() {
    const { checkInDate, checkOutDate, selectedServices, rate_per_night } = this.state;

    if (checkInDate && checkOutDate) {
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      const numNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

      const basePrice = numNights * rate_per_night;

      let amount = 0;
      selectedServices.forEach((value) => (amount += value.price));

      const totalPrice = basePrice + amount;
      this.setState({ totalPrice, numNights, basePrice });
    } else {
      let amount = 0;
      selectedServices.forEach((value) => (amount += value.price));

      const totalAmount = this.state.numNights * rate_per_night;
      this.setState({ totalPrice: totalAmount + amount });
    }
  }

  handleBooking = () => {
    const { checkInDate, checkOutDate, totalPrice, selectedServices, paypalTransactionId, cardType, cardLastFourDigits } = this.state;
    const propertyId = this.props.propertyData.property_id;
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
    const { propertyData } = this.props;
    this.state.rate_per_night = propertyData?.price_per_night;
    const { selectedValue } = this.props;

    return (
        <div className="booking-container mobile-res">
          <form className="booking-form">
            <div className="booking-content">
              <div className='top-section'>
                <div className='heding-opo'>
                  <label className="night-label">From</label>
                  <label className="price-label">${this.state.rate_per_night}</label>
                  <label className="night-label">/night</label>
                </div>
                <div className='close-btn'>
                  <button style={{ border: 'none', background: 'none' }} onClick={() => this.props.closeModule()}>
                    <img style={{ float: 'left' }} src={require('../../../assets/close-circle.png')} alt="Close" />
                  </button>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="checkIn">Check In</label>
                <input
                    className="date-input"
                    style={{ borderRadius: 10 }}
                    type="date"
                    id="checkIn"
                    onChange={this.handleDateChange}
                    min={new Date().toISOString().split('T')[0]}
                />

                {selectedValue && (
                    <div className="selected-value">
                      Selected Value: {selectedValue.startDate}
                    </div>
                )}

                <label style={{ fontSize: 14, marginTop: 20 }} htmlFor="checkOut">Check Out</label>
                <input
                    className="date-input"
                    style={{ borderRadius: 10 }}
                    type="date"
                    id="checkOut"
                    onChange={this.handleDateChange}
                    min={new Date().toISOString().split('T')[0]}
                />

                {selectedValue && (
                    <div className="selected-value">
                      Selected Value: {selectedValue.startDate}
                    </div>
                )}
              </div>

              <div className="service-options">
                <label>Choose Extra Service</label>
                <div
                    style={{
                      display: 'flex',
                      marginTop: 10,
                      width: '100%',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap'
                    }}
                >
                  {Order.map((service, index) => (
                      <ul
                          style={{
                            listStyleType: 'none',
                            padding: 0,
                            margin: 6,
                          }}
                          key={index}
                      >
                        <li
                            onClick={() => this.handleServiceClick(service.item, service.price)}
                            style={{
                              background: this.state.selectedServices.some((s) => s.item === service.item)
                                  ? '#F15A29'
                                  : '#F3F4F6',
                              borderRadius: 5,
                              color: this.state.selectedServices.some((s) => s.item === service.item)
                                  ? 'white'
                                  : '#6B7280',
                              fontSize: 15,
                              cursor: 'pointer',
                              padding: '7px 15px'
                            }}
                        >
                          {service.item}
                        </li>
                      </ul>
                  ))}
                </div>

                <div style={{ display: 'flex' }}>
                  {Order2.map((service, index) => (
                      <ul
                          style={{
                            listStyleType: 'none',
                            padding: 0,
                            margin: 6,
                          }}
                          key={index}
                      >
                        <li
                            onClick={() => this.handleServiceClick(service.item2, service.price)}
                            style={{
                              background: this.state.selectedServices.some((s) => s.item === service.item2)
                                  ? '#F15A29'
                                  : '#F3F4F6',
                              borderRadius: 5,
                              color: this.state.selectedServices.some((s) => s.item === service.item2)
                                  ? 'white'
                                  : '#6B7280',
                              fontSize: 15,
                              padding: '7px 15px'
                            }}
                        >
                          {service.item2}
                        </li>
                      </ul>
                  ))}
                </div>
              </div>

              <div className="billing">
                <h5 style={{ fontSize: 14, fontWeight: 600 }}>Billing</h5>
                <div className="billing-row">
                  <h6 style={{ fontSize: 18 }}>{this.state.numNights} Nights</h6>
                  <h6>${this.state.basePrice}</h6>
                </div>
                {this.state.selectedServices.map((service, index) => (
                    <div className="billing-row" key={index}>
                      <h6>{service.item}</h6>
                      <h6>${service.price}</h6>
                    </div>
                ))}
                <div style={{ borderTop: '1px solid #E5E7EB', padding: 5 }} className="billing-row">
                  <h6>Subtotal</h6>
                  <h6 className="subtotal-amount">${this.state.totalPrice.toFixed(2)}</h6>
                </div>
              </div>

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
          </form>
        </div>
    );
  }
}
