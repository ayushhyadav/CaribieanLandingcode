import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyBooking.css';
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

const PropertyBooking = ({ propertyData, selectedValue, onClose }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [numNights, setNumNights] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [ratePerNight, setRatePerNight] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (propertyData) {
      setRatePerNight(propertyData.price_per_night);
    }
  }, [propertyData]);

  const handleDateChange = (event) => {
    const { id, value } = event.target;
    if (id === 'checkIn') {
      setCheckInDate(value);
    } else {
      setCheckOutDate(value);
      calculateTotalPrice(value);
    }
  };

  const handleServiceClick = (item, price) => {
    setSelectedServices((prevSelectedServices) => {
      const updatedServices = [...prevSelectedServices];
      const index = updatedServices.findIndex((service) => service.item === item);

      if (index !== -1) {
        updatedServices.splice(index, 1);
      } else {
        updatedServices.push({ item, price });
      }

      calculateTotalPrice(null, updatedServices);
      return updatedServices;
    });
  };

  const calculateTotalPrice = (newCheckOutDate = checkOutDate, newSelectedServices = selectedServices) => {
    if (checkInDate && newCheckOutDate) {
      const startDate = new Date(checkInDate);
      const endDate = new Date(newCheckOutDate);
      const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

      const base = nights * ratePerNight;
      let amount = 0;
      newSelectedServices.forEach((value) => (amount += value.price));

      const total = base + amount;
      setTotalPrice(total);
      setNumNights(nights);
      setBasePrice(base);
    } else {
      let amount = 0;
      newSelectedServices.forEach((value) => (amount += value.price));

      const totalAmount = numNights * ratePerNight;
      setTotalPrice(totalAmount + amount);
    }
  };

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both Check In and Check Out dates.');
      return;
    }
    if (!totalPrice) {
      alert('Total Price is missing.');
      return;
    }
  
    // Check if user is logged in or user ID is available (replace with your actual check)
    const isLoggedIn = localStorage.getItem('userId'); // Example: Check if userId exists in localStorage or your auth context
  
    if (!isLoggedIn) {
      // Redirect user to login page if not logged in
      navigate('/login');
      return;
    }
  
    const bookingData = {
      checkInDate,
      checkOutDate,
      totalPrice,
      basePrice,
      numNights,
      selectedServices,
      ratePerNight,
    };
  
    // Store bookingData in localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  
    // Navigate to VerifyBooking component
    navigate('/VerifyBooking');
  };
  

  return (
    <div className="booking-container mobile-res">
      <form className="booking-form">
        <div className="booking-content">
          <div className='top-section'>
            <div className='heding-opo'>
              <label className="night-label">From</label>
              <label className="price-label">${ratePerNight}</label>
              <label className="night-label">/night</label>
            </div>
            <div className='close-btn'>
              <button style={{ border: 'none', background: 'none' }} onClick={onClose}>
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
              value={checkInDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
            />

            <label style={{ fontSize: 14, marginTop: 20 }} htmlFor="checkOut">Check Out</label>
            <input
              className="date-input"
              style={{ borderRadius: 10 }}
              type="date"
              id="checkOut"
              value={checkOutDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
            />
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
                    onClick={() => handleServiceClick(service.item, service.price)}
                    style={{
                      background: selectedServices.some((s) => s.item === service.item)
                        ? '#F15A29'
                        : '#F3F4F6',
                      borderRadius: 5,
                      color: selectedServices.some((s) => s.item === service.item)
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
                    onClick={() => handleServiceClick(service.item2, service.price)}
                    style={{
                      background: selectedServices.some((s) => s.item === service.item2)
                        ? '#F15A29'
                        : '#F3F4F6',
                      borderRadius: 5,
                      color: selectedServices.some((s) => s.item === service.item2)
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
              <h6 style={{ fontSize: 18 }}>{numNights} Nights</h6>
              <h6>${basePrice}</h6>
            </div>
            {selectedServices.map((service, index) => (
              <div className="billing-row" key={index}>
                <h6>{service.item}</h6>
                <h6>${service.price}</h6>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #E5E7EB', padding: 5 }} className="billing-row">
              <h6>Subtotal</h6>
              <h6 className="subtotal-amount">${totalPrice.toFixed(2)}</h6>
            </div>
          </div>

          <button type="button" onClick={handleBooking} className="confirm-booking-btn">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyBooking;
