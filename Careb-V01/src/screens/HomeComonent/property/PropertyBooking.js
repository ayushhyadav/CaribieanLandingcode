import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyBooking.css';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, IconButton } from '@mui/material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import BaseUrl from '../../Server/BaseUrl';

const countryTaxRates = {
  "Albania": 0.2,
  "Armenia": 0.2,
  "Australia": 0.1,
  "Austria": 0.2,
  "Bahamas": 0.12,
  "Belgium": 0.21,
  "Bermuda": 0.045,
  "British Virgin Islands": 0.1,
  "Costa Rica": 0.13,
  "Canada": {
    "base": 0.05,
    "Ontario": 0.13,
    "British Columbia": 0.13,
    "Saskatchewan": 0.11,
    "Manitoba": 0.12,
    "Quebec": 0.159,
    "cities": {
      "Barrie": 0.13,
      "Brockville": 0.167,
      "Cornwall": 0.13,
      "Mississauga": 0.13,
      "Greater Sudbury": 0.13,
      "Ottawa": 0.13,
      "Toronto": 0.13,
      "Waterloo": 0.13,
      "Windsor": 0.13
    }
  },
  "Chile": 0.19,
  "Colombia": 0.19,
  "Croatia": 0.25,
  "Cyprus": 0.19,
  "Czech Republic": 0.21,
  "Denmark": 0.25,
  "Egypt": 0.14,
  "Estonia": 0.22,
  "Finland": 0.24,
  "France": { "base": 0.05, "additional": 0.20 },
  "Germany": { "base": 0.055, "additional": 0.19 },
  "Georgia": 0.18,
  "Greece": 0.24,
  "Hungary": 0.27,
  "Indonesia": 0.11,
  "India": 0.18,
  "Ireland": 0.23,
  "Iceland": 0.24,
  "Italy": 0.22,
  "Japan": 0.10,
  "Kenya": 0.16,
  "Kosovo": 0.18,
  "Latvia": 0.21,
  "Lithuania": 0.21,
  "Luxembourg": 0.17,
  "Malaysia": 0.08,
  "Malta": 0.18,
  "Mexico": 0.16,
  "Netherlands": { "base": 0.21, "touristTax": 0.125 },
  "New Zealand": 0.21,
  "Norway": 0.25,
  "Poland": 0.23,
  "Portugal": 0.23,
  "Romania": 0.19,
  "Senegal": 0.18,
  "Serbia": 0.20,
  "Saudi Arabia": { "base": 0.05, "additional": 0.15 },
  "Singapore": 0.09,
  "Slovakia": { "base": 0.20, "touristTax": 0.03 },
  "Slovenia": 0.22,
  "South Africa": 0.15,
  "South Korea": 0.10,
  "Spain": 0.21,
  "Sweden": 0.25,
  "Switzerland": { "base": 0.081, "touristTax": 0.035 },
  "Taiwan": 0.05,
  "Uruguay": 0.22,
  "Ukraine": 0.20,
  "United Arab Emirates": 0.05,
  "Uganda": 0.18,
  "Turkey": 0.18,
  "Thailand": 0.07,
  "Tanzania": 0.18,
  "USA": {
    "Alabama": 0.045,
    "Alaska": 0.12,
    "Arizona": 0.055,
    "Arkansas": 0.065,
    "California": 0.10,
    "Colorado": 0.029,
    "Connecticut": 0.15,
    "District of Columbia": 0.159,
    "Florida": 0.06,
    "Georgia": 0.04,
    "Idaho": 0.06,
    "Illinois": 0.0598,
    "Indiana": 0.07,
    "Iowa": 0.05,
    "Kansas": 0.065,
    "Kentucky": 0.06,
    "Louisiana": 0.045,
    "Maine": 0.09,
    "Maryland": 0.06,
    "Massachusetts": "register_required",
    "Michigan": 0.06,
    "Minnesota": 0.06875,
    "Mississippi": 0.07,
    "Missouri": 0.04225,
    "Montana": 0.04,
    "Nebraska": 0.055,
    "Nevada": 0.13,
    "New Hampshire": 0.085,
    "New Jersey": 0.06625,
    "New Mexico": 0.05125,
    "New York": 0.04,
    "North Carolina": 0.0675,
    "North Dakota": 0.05,
    "Ohio": 0.03,
    "Oklahoma": 0.045,
    "Oregon": 0.015,
    "Pennsylvania": 0.06,
    "Puerto Rico": 0.07,
    "Rhode Island": 0.07,
    "South Carolina": 0.05,
    "South Dakota": 0.045,
    "Tennessee": 0.07,
    "Texas": 0.06,
    "Us Virgin Island": 0.125,
    "Utah": 0.0595,
    "Vermont": 0.09,
    "Virginia": 0.053,
    "Washington": 0.07,
    "West Virginia": 0.06,
    "Wisconsin": 0.05,
    "Wyoming": 0.04
  }
};

const regionBaseServiceFees = {
  "Caribbean": 0.02,
  "Europe": 0.025,
  "North America": 0.0225,
  "Asia": 0.0225,
  "South America": 0.02,
  "Africa": 0.02,
  "Oceania": 0.0225
};

const countryRegions = {
  "USA": "North America",
  "Canada": "North America",
  "UK": "Europe",
  "France": "Europe",
  "Germany": "Europe",
  "India": "Asia",
  "Australia": "Oceania",
  "Japan": "Asia",
  "Albania": "Europe",
  "Armenia": "Europe",
  "Austria": "Europe",
  "Bahamas": "Caribbean",
  "Belgium": "Europe",
  "Bermuda": "North America",
  "British Virgin Islands": "Caribbean",
  "Costa Rica": "Central America",
  "Chile": "South America",
  "Colombia": "South America",
  "Croatia": "Europe",
  "Cyprus": "Europe",
  "Czech Republic": "Europe",
  "Denmark": "Europe",
  "Egypt": "Africa",
  "Estonia": "Europe",
  "Finland": "Europe",
  "Georgia": "Asia",
  "Greece": "Europe",
  "Hungary": "Europe",
  "Indonesia": "Asia",
  "Ireland": "Europe",
  "Iceland": "Europe",
  "Italy": "Europe",
  "Kenya": "Africa",
  "Kosovo": "Europe",
  "Latvia": "Europe",
  "Lithuania": "Europe",
  "Luxembourg": "Europe",
  "Malaysia": "Asia",
  "Malta": "Europe",
  "Mexico": "North America",
  "Netherlands": "Europe",
  "New Zealand": "Oceania",
  "Norway": "Europe",
  "Poland": "Europe",
  "Portugal": "Europe",
  "Romania": "Europe",
  "Senegal": "Africa",
  "Serbia": "Europe",
  "Saudi Arabia": "Middle East",
  "Singapore": "Asia",
  "Slovakia": "Europe",
  "Slovenia": "Europe",
  "South Africa": "Africa",
  "South Korea": "Asia",
  "Spain": "Europe",
  "Sweden": "Europe",
  "Switzerland": "Europe",
  "Taiwan": "Asia",
  "Uruguay": "South America",
  "Ukraine": "Europe",
  "United Arab Emirates": "Middle East",
  "Uganda": "Africa",
  "Turkey": "Middle East",
  "Thailand": "Asia",
  "Tanzania": "Africa",
  "Vietnam": "Asia",
  "Zimbabwe": "Africa",
  "Argentina": "South America",
  "Aland Islands": "Europe",
  "Andorra": "Europe",
  "Åland Islands": "Europe",
  "American Samoa": "Oceania",
  "Anguilla": "Caribbean",
  "Antarctica": "Antarctica",
  "Antigua and Barbuda": "Caribbean",
  "Benin": "Africa",
  "Bolivia": "South America",
  "Botswana": "Africa",
  "Burundi": "Africa",
  "Cabo Verde": "Africa",
  "Cameroon": "Africa",
  "Cayman Islands": "Caribbean",
  "Central African Republic": "Africa",
  "Chad": "Africa",
  "Comoros": "Africa",
  "Congo": "Africa",
  "Cuba": "Caribbean",
  "Djibouti": "Africa",
  "Dominica": "Caribbean",
  "Dominican Republic": "Caribbean",
  "Ecuador": "South America",
  "El Salvador": "Central America",
  "Equatorial Guinea": "Africa",
  "Eswatini": "Africa",
  "Fiji": "Oceania",
  "Gabon": "Africa",
  "Gambia": "Africa",
  "Ghana": "Africa",
  "Grenada": "Caribbean",
  "Guatemala": "Central America",
  "Guinea": "Africa",
  "Guinea-Bissau": "Africa",
  "Guyana": "South America",
  "Haiti": "Caribbean",
  "Honduras": "Central America",
  "Iran": "Middle East",
  "Iraq": "Middle East",
  "Israel": "Middle East",
  "Jamaica": "Caribbean",
  "Jordan": "Middle East",
  "Kiribati": "Oceania",
  "Kuwait": "Middle East",
  "Lebanon": "Middle East",
  "Lesotho": "Africa",
  "Liberia": "Africa",
  "Libya": "Africa",
  "Liechtenstein": "Europe",
  "Madagascar": "Africa",
  "Malawi": "Africa",
  "Mali": "Africa",
  "Marshall Islands": "Oceania",
  "Mauritania": "Africa",
  "Mauritius": "Africa",
  "Micronesia": "Oceania",
  "Monaco": "Europe",
  "Mongolia": "Asia",
  "Montserrat": "Caribbean",
  "Morocco": "Africa",
  "Mozambique": "Africa",
  "Myanmar": "Asia",
  "Namibia": "Africa",
  "Nauru": "Oceania",
  "Nicaragua": "Central America",
  "Niger": "Africa",
  "Nigeria": "Africa",
  "Niue": "Oceania",
  "North Macedonia": "Europe",
  "Oman": "Middle East",
  "Pakistan": "Asia",
  "Palau": "Oceania",
  "Palestine": "Middle East",
  "Panama": "Central America",
  "Papua New Guinea": "Oceania",
  "Paraguay": "South America",
  "Peru": "South America",
  "Philippines": "Asia",
  "Qatar": "Middle East",
  "Rwanda": "Africa",
  "Saint Kitts and Nevis": "Caribbean",
  "Saint Lucia": "Caribbean",
  "Saint Vincent and the Grenadines": "Caribbean",
  "Samoa": "Oceania",
  "San Marino": "Europe",
  "Sao Tome and Principe": "Africa",
  "Seychelles": "Africa",
  "Sierra Leone": "Africa",
  "Solomon Islands": "Oceania",
  "Somalia": "Africa",
  "South Sudan": "Africa",
  "Sri Lanka": "Asia",
  "Sudan": "Africa",
  "Suriname": "South America",
  "Syria": "Middle East",
  "Tajikistan": "Asia",
  "Timor-Leste": "Asia",
  "Togo": "Africa",
  "Tokelau": "Oceania",
  "Tonga": "Oceania",
  "Trinidad and Tobago": "Caribbean",
  "Tunisia": "Africa",
  "Turkmenistan": "Asia",
  "Tuvalu": "Oceania",
  "Vanuatu": "Oceania",
  "Vatican City": "Europe",
  "Venezuela": "South America",
  "Wallis and Futuna": "Oceania",
  "Western Sahara": "Africa",
  "Yemen": "Middle East",
};


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
  const [cancellationprice,setcancellationprice]=useState(0)
  const [numNights, setNumNights] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [ratePerNight, setRatePerNight] = useState(0);
  const [ serviceTaxprice,setserviceTax]=useState(0);

  const navigate = useNavigate();
  console.log('properdasa',propertyData)
  const serviceFeeRates = {
    Flexible: { host: 0.03, guest: 0.13 },
    Moderate: { host: 0.05, guest: 0.10 },
    Firm: { host: 0.07, guest: 0.08 },
    Strict: { host: 0.07, guest: 0.08 } // Same as Firm
  };
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
  
      // Call calculateTotalPrice with the updated services
      calculateTotalPrice(checkOutDate, updatedServices);
  
      return updatedServices;
    });
  };
const cancellationPolicy=propertyData?.cancellationPolicy
;
// console.log('pros',cancellationPolicy)
const calculateTotalPrice = (newCheckOutDate = checkOutDate, newSelectedServices = selectedServices) => {
  const amount = newSelectedServices.reduce((sum, service) => sum + service.price, 0);
  console.log('amount',amount)

  if (checkInDate && newCheckOutDate) {
    const startDate = new Date(checkInDate);
    const endDate = new Date(newCheckOutDate);
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    const base = nights * ratePerNight;

    const serviceTaxRate = countryTaxRates[propertyData.country] || 0;
    const serviceTax = (base + amount) * serviceTaxRate;

    const region = countryRegions[propertyData.country] || "Other";
    const regionServiceFee = regionBaseServiceFees[region] || 0;
    const cancellationServiceFee = serviceFeeRates[cancellationPolicy]?.guest || 0;
    
    const regionServiceTax = (amount + base) * (regionServiceFee + cancellationServiceFee);
    console.log('base',base)
    console.log('tax',regionServiceFee)
    console.log('cancellation',cancellationServiceFee)
    console.log('total',amount)
    console.log('region service tax',regionServiceTax)

    const total = base + amount + serviceTax + regionServiceTax;
    setTotalPrice(total);
    setNumNights(nights);
    setBasePrice(base);
    setcancellationprice(regionServiceTax);
    setserviceTax(serviceTax);

  } else {
    // When dates are not selected, we'll just update the amount
    setTotalPrice(amount);
  }

  // Always update these values
  setSelectedServices(newSelectedServices);
  console.log('useramount', amount);
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

    const isLoggedIn = localStorage.user_id;

    if (!isLoggedIn) {
      navigate('/userlogin');
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

    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    navigate('/VarifyBooking');
  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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

          <Box display="flex" flexDirection="column" style={{marginTop:10}} gap={2}>
            <TextField
              label="Check In"
              type="date"
              id="checkIn"
              value={checkInDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split('T')[0] }}
            />
            <TextField
              label="Check Out"
              type="date"
              id="checkOut"
              value={checkOutDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: new Date().toISOString().split('T')[0] }}
            />
          </Box>

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
              {propertyData?.extra_service?.map((service, index) => (
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

            {/* <div style={{ display: 'flex' }}>
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
                    onClick={() => handleServiceClick(service.item2,service.price)}
                    style={{
                      background: selectedServices.some((s) => s.item === service.item2)
                        ? '#F15A29'
                        : '#F3F4F6',
                      borderRadius: 5,
                      color: selectedServices.some((s) => s.item === service.item2)
                        ? 'white'
                        : '#6B7280',
                      fontSize: 15,
                      padding: '7px 15px',
                      cursor: 'pointer'
                    }}
                  >
                    {service.item2}
                  </li>
                </ul>
              ))}
            </div> */}
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
            <div className="billing-row">
              <h6>Taxes 
                {/* ({(countryTaxRates[propertyData?.country] || 0) * 100}%) */}
                </h6>
              <h6>${(serviceTaxprice).toFixed(2)}</h6>
            </div>
            <div className="billing-row">
              <h6>Service Fee 
                {/* ({(regionBaseServiceFees[countryRegions[propertyData?.country]] || 0) * 100}%) */}
                </h6>
              <h6>${cancellationprice}</h6>
            </div>
            <div style={{ borderTop: '1px solid #E5E7EB', padding: 5 }} className="billing-row">
              <h6>Subtotal</h6>
              <h6 className="subtotal-amount">${totalPrice.toFixed(2)}</h6>
            </div>
          </div>

          <button style={{border:'none'}} type="button" onClick={handleBooking} className="confirm-booking-btn">
            Confirm Booking
          </button>

          {propertyData?.cancellationPolicy && (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 15.5 ,padding:2,paddingLeft:5}}>
          <div>Host follows {propertyData?.cancellationPolicy} cancellation policy</div>
          <Tooltip title="View Details">
            <IconButton onClick={toggleDetails} style={{ width:10,background:'none',marginLeft:10,  }}>
            <InfoIcon style={{color:'#2E6DF5' }} color='#F15A29' />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {showDetails && (
        <div style={{ marginTop: 10, fontSize: 14, color: '#555' }}>
          {getDetailedCancellationPolicy(propertyData?.cancellationPolicy)}
        </div>
      )}
        </div>
   
      </form>
    </div>
  );
};


const getDetailedCancellationPolicy = (policy) => {
  switch (policy) {
    case 'Flexible':
      return 'Flexible:-  Allows guests to receive a full refund if they cancel at least 24 hours before check-in (local time). Hosts will also forfeit the cleaning fee. If a guest cancels less than 24 hours before check-in, they will still be charged for the first night but are entitled to a refund for the remaining nights. If a guest cancels their reservation after checking in, they may be eligible for a partial refund for the remaining nights of the reservation.';
    case 'Moderate':
      return 'Moderate: This policy allows fewer cancellations. Guests must cancel the reservation at least 5 days before the reservation date to receive a full refund of the accommodation fees. If the guest cancels within 5 days of the reservation start date, the first night and the service fee is non-refundable. They also only get 50% of the booking fees back. If the customer decides to cancel the reservation after check-in, 50% of the remaining nightly accommodation fees will be refunded. However, they still pay for nights spent.';
    case 'Firm':
      return 'Firm: Guests must cancel at least 30 days prior to check-in to receive a full refund. This policy allows for a 50% refund if your guests cancel between 7 and 30 days prior to check-in.If a guest cancels less than seven days prior to check-in, the host will still receive 100% of everything (nights booked). This is a good middle ground between strict and flexible cancellation policies.In addition, guests can receive a full refund if they cancel within 48 hours of the booking date, as long as they cancel at least 14 days before check-in.';
    case 'Strict':
      return 'Strict: Guests receive a full refund if they cancel within 48 hours of booking and at least 14 days before the property`s local check-in time. After 48 hours, guests are only entitled to a 50% refund, regardless of how far in advance the check-in date is.Guests will also receive a 50% refund of accommodation fees if they cancel 7-14 days before the check-in date. They also get the cleaning fee back, but not the service fee. If the customer cancels the reservation less than 7 days in advance, he is not entitled to a refund.';
    default:
      return 'No detailed policy available.';
  }
};
export default PropertyBooking;