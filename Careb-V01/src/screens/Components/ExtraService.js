import './ExtraService.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import BaseUrl from '../Server/BaseUrl';
import Storage from '../Server/Storage';
import {  Box, Typography, Button,TextField, Grid } from '@mui/material';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Amenities = [
  {
    id: 1,
    item: 'Wifi',
  },
  {
    id: 2,
    item: 'Washer',
  },
  {
    id: 3,
    item: 'Kitchen',
  },
  {
    id: 4,
    item: 'Dryer',
  },
  {
    id: 5,
    item: 'Air Conditioning',
  },
  {
    id: 6,
    item: 'Heating',
  },
  {
    id: 7,
    item: 'Dedicated Workspace',
  },
];

const User = [
  {
    id: 1,
    item2: 'Hair Dryer',
  },
  {
    id: 2,
    item2: 'Iron',
  },
  {
    id: 3,
    item2: 'TV',
  },
];

const Extra = [
  {
    id: 1,
    item: 'Rafting',
    description:"",
    number_of_guest:"",
    price:""

  },
  {
    id: 2,
    item: 'Exotic Food',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 3,
    item: 'Pick and Drop',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 4,
    item: 'BBQ',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 5,
    item: 'Breakfast',
    description:"",
    number_of_guest:"",
    price:""
  },
];

export default class ExtraService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmenities: [],
      selectedUser: [],
      selectedExtra: [],
      selectedFile: null,
      cancellationPolicy: '',
      custome_extra_service:"Enter....",
        isPropertyAccepted: false,
        pollingInterval: null,
        acceptTerms: false,
        showTerms: false,
        showModal: false,
        showTax:false,
    };
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAmenityClick = (item) => {
    this.setState((prevState) => ({
      selectedAmenities: prevState.selectedAmenities.includes(item)
        ? prevState.selectedAmenities.filter((i) => i !== item)
        : [...prevState.selectedAmenities, item],
    }));
  };

  handleUserClick = (item) => {
    this.setState((prevState) => ({
      selectedUser: prevState.selectedUser.includes(item)
        ? prevState.selectedUser.filter((i) => i !== item)
        : [...prevState.selectedUser, item],
    }));
  };

  // handleExtraClick = (item) => {
  //   let selectedExtra = [...this.state.selectedExtra]
  //
  //   console.log('itemsss ',selectedExtra)
  //
  //   if(selectedExtra.includes(item)){
  //      selectedExtra = selectedExtra.filter((data)=> data?.item !== item?.item)
  //   }
  //   else{
  //     selectedExtra.push(item)
  //   }
  //   this.setState({selectedExtra:selectedExtra})
  //   // this.setState((prevState) => ({
  //   //   selectedExtra: prevState.selectedExtra.includes(data)
  //   //     ? prevState.selectedExtra.filter((i) => i.item !== item)
  //   //     : [...prevState.selectedExtra, data],
  //   // }));
  //   // console.log('valueee ',this.state.selectedExtra)
  // };
  
  handleExtraClick = (item) => {
    this.setState((prevState) => {
      const selectedExtra = prevState.selectedExtra.some(extra => extra.item === item.item)
        ? prevState.selectedExtra.filter(extra => extra.item !== item.item)
        : [...prevState.selectedExtra, { ...item, description: '', number_of_guest: '', price: '' }];

      return { selectedExtra };
    });
  };

    // handleFileChange = (event, name) => {
    //     const selectedFile = event.target.files[0];
    //     this.setState((prevState) => ({
    //         selectedFiles: {
    //             ...prevState.selectedFiles,
    //             [name]: selectedFile,
    //         }
    //     }));
    // };

    handleFileChange = (event, name) => {
        const selectedFile = event.target.files[0];
        this.setState({ selectedFile });
    };

    renderExtraServiceFields() {
      return this.state.selectedExtra.map((extra) => {
          return (
              <Box key={extra.id} sx={{ mt: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                      {extra.item}
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                      <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                              Select Service for Number of Guests
                          </Typography>
                          <TextField
                              fullWidth
                              variant="outlined"
                              margin="normal"
                              type="number"
                              name="number_of_guest"
                              value={extra.number_of_guest}
                              onChange={(e) => this.handleExtraServiceChange(e, extra.id)}
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <Typography variant="body2" color="textSecondary">
                              Price
                          </Typography>
                          <TextField
                              fullWidth
                              variant="outlined"
                              margin="normal"
                              type="number"
                              name="price"
                              value={extra.price}
                              onChange={(e) => this.handleExtraServiceChange(e, extra.id)}
                          />
                      </Grid>
                  </Grid>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                      Description
                  </Typography>
                  <TextField
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      multiline
                      rows={4}
                      placeholder={`Enter ${extra.item} Description`}
                      name="description"
                      value={extra.description}
                      onChange={(e) => this.handleExtraServiceChange(e, extra.id)}
                  />
              </Box>
          );
      });
  }

  renderCancellationPolicy = () => {
    return (
      <FormControl component="fieldset" sx={{ mt: 4 }}>
        <FormLabel style={{color:'#000',fontWeight:'700'}} component="legend">Choose Cancellation Policy</FormLabel>
        <RadioGroup
          aria-label="cancellation policy"
          name="cancellationPolicy"
          value={this.state.cancellationPolicy}
          onChange={this.handleCancellationPolicyChange}
        >
          <FormControlLabel
            value="Flexible"
            control={<Radio />}
            label="Flexible:-  Allows guests to receive a full refund if they cancel at least 24 hours before check-in (local time). Hosts will also forfeit the cleaning fee. If a guest cancels less than 24 hours before check-in, they will still be charged for the first night but are entitled to a refund for the remaining nights. If a guest cancels their reservation after checking in, they may be eligible for a partial refund for the remaining nights of the reservation. "
          /><br/>
          <FormControlLabel
            value="Moderate"
            control={<Radio />}
            label="Moderate: This policy allows fewer cancellations. Guests must cancel the reservation at least 5 days before the reservation date to receive a full refund of the accommodation fees. If the guest cancels within 5 days of the reservation start date, the first night and the service fee is non-refundable. They also only get 50% of the booking fees back. If the customer decides to cancel the reservation after check-in, 50% of the remaining nightly accommodation fees will be refunded. However, they still pay for nights spent."
          /><br/>
          <FormControlLabel
            value="Firm"
            control={<Radio />}
            label="Firm: Guests must cancel at least 30 days prior to check-in to receive a full refund. This policy allows for a 50% refund if your guests cancel between 7 and 30 days prior to check-in.If a guest cancels less than seven days prior to check-in, the host will still receive 100% of everything (nights booked). This is a good middle ground between strict and flexible cancellation policies.In addition, guests can receive a full refund if they cancel within 48 hours of the booking date, as long as they cancel at least 14 days before check-in."
          /><br/>
          <FormControlLabel
            value="Strict"
            control={<Radio />}
            label="Strict: Guests receive a full refund if they cancel within 48 hours of booking and at least 14 days before the property's local check-in time. After 48 hours, guests are only entitled to a 50% refund, regardless of how far in advance the check-in date is.Guests will also receive a 50% refund of accommodation fees if they cancel 7-14 days before the check-in date. They also get the cleaning fee back, but not the service fee. If the customer cancels the reservation less than 7 days in advance, he is not entitled to a refund."
          />
        </RadioGroup>
      </FormControl>
    );
  };


  renderServiceFees = () => {
    const { cancellationPolicy } = this.state;
    let hostFee = 0;
    let guestFee = 0;

    switch (cancellationPolicy) {
      case 'Flexible':
        hostFee = 0.03; // 3% for host
        guestFee = 0.13; // 13% for guest
        break;
      case 'Moderate':
        hostFee = 0.05; // 5% for host
        guestFee = 0.10; // 10% for guest
        break;
      case 'Firm':
        hostFee = 0.07; // 7% for host
        guestFee = 0.08; // 8% for guest
        break;
        case 'Strict':
          hostFee = 0.10; // 10% for host
          guestFee = 0.06; // 6% for guest
          break;
      default:
        // Default to flexible fees if no policy selected
        hostFee = 0.03;
        guestFee = 0.13;
        break;
    }

    return (
      <Box sx={{ mt: 4 }}>
        <FormLabel component="legend">Service Fees</FormLabel>
        <ul>
          <li>Host: {hostFee * 100}%</li>
          <li>Guest: {guestFee * 100}%</li>
        </ul>
      </Box>
    );
  };
    handleExtraServiceChange = (e, id) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            selectedExtra: prevState.selectedExtra.map(extra =>
                extra.id === id ? { ...extra, [name]: value } : extra
            )
        }));
    };

  handleSaveData = () => {
      const { selectedExtra, selectedAmenities, selectedUser,acceptTerms , cancellationPolicy } = this.state;
      if (!acceptTerms) {
        alert("Please accept the terms and conditions.");
        return; // Stop further execution
      }
    const { history } = this.props;
    let PropertysData = JSON.parse(localStorage.getItem('propertyData'))
     console.log('dataa checkkkk ',PropertysData)
     let PropertysList = JSON.parse(localStorage.getItem('propertyList'))
     console.log('dataa checkkkk ',PropertysList)

    const formData = new FormData();

    // Add the fields to the FormData
    formData.append('user_id', localStorage.user_id);
    formData.append('property_name', PropertysList.property_name);
    formData.append('select_view', PropertysList.view);
    formData.append('property_type', PropertysList.propertyType);
    formData.append('price_per_night', PropertysList.pricePerNight);
    formData.append('guest_count', PropertysList.guestCapacity);
    formData.append('bedroom_count', PropertysList.bedroomCount);
    formData.append('bathroom_count', PropertysList.bathroomCount);
    // formData.append('Property_image', localStorage.Property_image);
    formData.append('property_description', PropertysList.description);
    formData.append('property_rules', PropertysList.rules);
    formData.append('country', PropertysData.countryRegion);
    formData.append('state', PropertysData.state);
    formData.append('city', PropertysData.city);
    formData.append('street_address', PropertysData.streetAddress);
    formData.append('cancellationPolicy', cancellationPolicy);
    Storage.propety_images.forEach((val,index)=> formData.append('property_images',Storage.propety_images[index]))

      // Storage.propety_images.forEach((image, index) => {
      //     formData.append('property_images', image);
      // });


    //   formData.append('amenties', this.state.selectedAmenities);
    // formData.append('extra_service', this.state.selectedExtra);
      formData.append('amenties', JSON.stringify(selectedAmenities));
      formData.append('extra_service', JSON.stringify(selectedExtra));

    // Make the POST request to your server
      fetch(BaseUrl.BaseUrl + '/property_add', {
          method: 'POST',
          body: formData,
      })
          .then((response) => response.json())
          .then((data) => {
              if (data.error) {
                  this.setState({ errorMessage: data.error });
                  alert("Fill all the required fields ", data.error);
                  console.error('Failed to post data');
              } else if (data.accepted) { // Assuming the server returns a field indicating if the property is accepted
                  this.setState({ isPropertyAccepted: true });
                  alert('Welcome aboard! 🚀 Your registration is complete. Explore our platform and make the most of your journey with us!');
                  const storedUserId = localStorage.getItem('user_id');
                  if (storedUserId) {
                      // window.location.href = `/PandingApproval/${storedUserId}`;
                  } else {
                      console.error('User ID not found in local storage');
                  }
              } else {
                  alert('Your property has been submitted and is pending For approval. You will be notified once it is approved.');
                  const storedUserId = localStorage.getItem('user_id');
                  if (storedUserId) {
                      // window.location.href = `/PandingApproval/${storedUserId}`;
                  } else {
                      console.error('User ID not found in local storage');
                  }
              }
          })
          .catch((error) => {
              console.error('Error:', error);
          });
  };

  toggleTermsModal = () => {
    this.setState((prevState) => ({ showTerms: !prevState.showTerms }));
  };
  toggleTaxModal = () => {
    this.setState((prevState) => ({ showTax: !prevState.showTax }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  handleAddCustomExtra = () => {
    const newExtraService = {
      id: Extra.length + 1,
      item: this.state.custome_extra_service,
      description: "",
      number_of_guest: "",
      price: "",
    };

    Extra.push(newExtraService);
    this.setState({ custome_extra_service: "Enter...." });
    this.toggleModal();
  };

  handleCancellationPolicyChange = (event) => {
    this.setState({ cancellationPolicy: event.target.value });
  };


    render() {

      const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height:'100%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        overflowY: 'auto',
      };
      const { selectedAmenities, selectedUser, acceptTerms, showTerms, showModal,showTax } = this.state;
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          height:'100%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          padding: '20px',
          borderRadius: '10px',
        },
      };
      const customStylese = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          gap:'10px',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '10px',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
          
        },
      };
  
    return (
      <div className='main-section' style={{ width: '100%', padding: 20 }}>
        <label style={{ marginLeft: 20 }}>Step 8/8</label>
        <h4 style={{ fontSize: 35, fontWeight: '700', marginLeft: 20 }}>
          Choose Amenities and Extra Services
        </h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          Choose Amenities & Extra Service which you are providing
        </label>
        <div  className="Extra-Services" style={{ display: 'flex', width: '100%', marginTop: 10 }}>
          {Amenities.map((item) => (
            <ul className='service-ex'
              key={item.item}
              style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                width: '15%',
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <li
                style={{
                  background: this.state.selectedAmenities.includes(item.item) ? '#F15A29' : '#F3F4F6',
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  textAlign: 'center',
                  color: this.state.selectedAmenities.includes(item.item) ? 'white' : '#6B7280',
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => this.handleAmenityClick(item.item)}
              >
                {item.item}
              </li>
            </ul>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          {User.map((item) => (
            <ul className='service-ex' key={item.item2} style={{ listStyleType: 'none', width: '12%' }}>
              <li
                style={{
                  background: this.state.selectedUser.includes(item.item2) ? '#F15A29' : '#F3F4F6',
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  color: this.state.selectedUser.includes(item.item2) ? 'white' : '#6B7280',
                  fontSize: 16,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => this.handleUserClick(item.item2)}
              >
                {item.item2}
              </li>
            </ul>
          ))}
        </div>
        <div style={{ marginTop: 6, width: '100%', }}>
          <label style={{ fontSize: 20, fontWeight: '550' }}>Extra Service</label>
          <div className="Extra-Services" style={{ display: 'flex', width: '60%', marginTop: 10 }}>
            {Extra.map((item) => (
              <ul className='service-ex'
                key={item.item}
                style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <li
                  style={{
                    background: this.state.selectedExtra.includes(item) ? '#F15A29' : '#F3F4F6',
                    width: '80%',
                    height: 45,
                    borderRadius: 5,
                    textAlign: 'center',
                    color: this.state.selectedExtra.includes(item) ? 'white' : '#6B7280',
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => this.handleExtraClick(item)}
                >
                  {item.item}
                </li>
              </ul>
            ))}
<div
              style={{
                height: 50,
                marginLeft: 10,
                width: 'auto',
                borderRadius: 25,
                borderWidth: 0.1,
                borderColor: 'gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                border: '1px solid gray',
                backgroundColor: '#FFFFFF',
                color: '#000000',
              }}
              onClick={this.toggleModal}
            >
              +
            </div>


          </div>
        </div>
 

        <Box>
        {this.renderExtraServiceFields()}
        {this.renderCancellationPolicy()}
        {this.renderServiceFees()}
      </Box>
        <Modal
          isOpen={showModal}
          onRequestClose={this.toggleModal}
          style={customStylese}
          contentLabel="Add Custom Extra Service"
        >
          <h2>Add Custom Extra Service</h2>
          {/* <input onChange={(e)=>this.setState({custome_extra_service:e?.target?.value})} type='text' /> */}
          <input
            type="text"
            value={this.state.custome_extra_service}
            onChange={(e) => this.setState({ custome_extra_service: e.target.value })}
          />
          <button style={{marginTop:10,width:180}} onClick={this.handleAddCustomExtra}>Add</button>
          <button style={{marginTop:10,width:180}} onClick={this.toggleModal}>Cancel</button>
        </Modal>

        <Modal
          isOpen={showTerms}
          onRequestClose={this.toggleTermsModal}
          style={customStyles}
          contentLabel="Terms and Conditions"
        >
<Box sx={modalStyle}>
  <Typography id="terms-and-conditions-title" variant="h4" component="h2" sx={{ color: '#1976D2', marginBottom: '10px' }}>
    Host Terms and Conditions
  </Typography>
  <Typography id="terms-and-conditions-description" sx={{ color: 'black' }}>
    <h3 style={{ color: '#1976D2' }}>1. Introduction</h3>
    <p>
      Welcome to Caribbeaneaze! These terms and conditions outline the rules and regulations for hosts listing their properties on our platform. By listing your property, you agree to comply with these terms.
    </p>
    <h3 style={{ color: '#1976D2' }}>2. Service Fees</h3>
    <p>
      Caribbeaneaze charges a service fee for each booking made through the platform. This fee helps cover the cost of secure transactions, customer support, and marketing efforts. The service fee is calculated based on the host's chosen cancellation policy and is deducted from the host's payout. The current service fee structure is as follows:
    </p>
    <ul>
      <li>Host pays either 2%, 2.25%, or 2.5% service fee to the platform, depending on location:</li>
      <li>Guest pays when choosing one of these policy options:</li>
      <ul>
        <li>Flexible: 13%</li>
        <li>Moderate: 8%</li>
        <li>Firm: 10%</li>
        <li>Strict: 6%</li>
      </ul>
    </ul>
    <h3 style={{ color: '#1976D2' }}>3. Payment Terms</h3>
    <p>
      Hosts will receive payments for bookings minus applicable fees. Payments are processed and transferred to the host's specified account within 30 days after the guest's check-in date.
    </p>
    <h3 style={{ color: '#1976D2' }}>4. Cancellation Policies</h3>
    <p>Hosts can choose from the following cancellation policies for their listings:</p>
    <ul>
      <li>
        <strong>Flexible:</strong> Guests receive a full refund if they cancel at least 24 hours before check-in. Hosts forfeit the cleaning fee if guests cancel within this period. If guests cancel less than 24 hours before check-in, they are charged for the first night but receive a refund for the remaining nights. If guests cancel after checking in, they may be eligible for a partial refund for the remaining nights.
      </li>
      <li>
        <strong>Moderate:</strong> Guests must cancel at least 5 days before the reservation date to receive a full refund of accommodation fees. If guests cancel within 5 days of the reservation start date, the first night and service fee are non-refundable, and only 50% of the booking fees are refunded. If guests cancel after checking in, 50% of the remaining nightly accommodation fees will be refunded, but guests still pay for nights spent.
      </li>
      <li>
        <strong>Firm:</strong> Guests must cancel at least 30 days prior to check-in to receive a full refund. If guests cancel between 7 and 30 days prior to check-in, they receive a 50% refund. If guests cancel less than seven days prior to check-in, hosts receive 100% of the booking fee. Guests can receive a full refund if they cancel within 48 hours of booking, provided they cancel at least 14 days before check-in.
      </li>
      <li>
        <strong>Strict:</strong> Guests receive a full refund if they cancel within 48 hours of booking and at least 14 days before the property's local check-in time. After 48 hours, guests are entitled to a 50% refund regardless of how far in advance the check-in date is. Guests receive a 50% refund of accommodation fees if they cancel 7-14 days before check-in.
      </li>
    </ul>
    <p><strong>Host Cancellation Policies</strong></p>
    <ul>
      <li>Cancellation Notice Period:</li>
      <ul>
        <li>More than 36 hours notice: No penalty.</li>
        <li>Less than 36 hours notice: Penalties apply.</li>
      </ul>
      <li>Penalties for Late Cancellations:</li>
      <ul>
        <li>Penalty Fee: $30 for cancellations made with less than 36 hours notice.</li>
        <li>Service Fee Forfeiture: The service fee for the canceled booking is non-refundable.</li>
        <li>Guest Compensation and Support:</li>
        <ul>
          <li>Guest Compensation: The $30 penalty fee will compensate the guest and Caribbeaneaze for the inconvenience.</li>
          <li>Rebooking Assistance: Guests will receive help finding alternative accommodations on our platform.</li>
        </ul>
        <li>Review Impact: Guests can leave a review about the cancellation on the host’s profile.</li>
        <li>Account Suspension: Multiple late cancellations may lead to temporary suspension or removal of the host’s account.</li>
      </ul>
    </ul>
    <h3 style={{ color: '#1976D2' }}>5. Host Responsibilities</h3>
    <p>
      Hosts are responsible for maintaining their properties and ensuring they are clean, safe, and accurately represented in their listings. Hosts must comply with all local laws and regulations related to their rental properties.
    </p>
    <h3 style={{ color: '#1976D2' }}>6. Insurance and Liability</h3>
    <p>
      Hosts are encouraged to obtain appropriate insurance coverage for their rental properties. Caribbeaneaze is not liable for any damages, injuries, or losses incurred during a guest's stay.
    </p>
    <h3 style={{ color: '#1976D2' }}>7. Termination</h3>
    <p>
      Caribbeaneaze reserves the right to remove a host's listing and terminate their account if they violate these terms and conditions or engage in any behavior deemed harmful to the platform or its users.
    </p>
    <h3 style={{ color: '#1976D2' }}>8. Amendments</h3>
    <p>
      Caribbeaneaze may update these terms and conditions from time to time. Hosts will be notified of any changes, and continued use of the platform constitutes acceptance of the updated terms.
    </p>
  </Typography>
  <Button style={{ width: 200, marginTop: 20 }} variant="contained" color="primary" onClick={() => this.setState({ acceptTerms: true, showTerms: false })}>Accept</Button>
</Box>


        </Modal>

        <Modal
          isOpen={showTax}
          onRequestClose={this.toggleTaxModal}
          style={customStyles}
          contentLabel="Terms and Conditions"
        >
<Box sx={modalStyle}>
  {/* <Typography id="terms-and-conditions-title" variant="h4" component="h2" sx={{ color: '#1976D2', marginBottom: '10px' }}>
      Taxes and Tax Obligations
  </Typography> */}
  <Typography id="terms-and-conditions-description" sx={{ color: 'black' }}>
    {/* <h3 style={{ color: '#1976D2' }}>1. Introduction</h3>
    <p>
      Welcome to Caribbeaneaze! These terms and conditions outline the rules and regulations for hosts listing their properties on our platform. By listing your property, you agree to comply with these terms.
    </p> */}

    <h3 style={{ color: '#1976D2' }}> Host Compliance for Taxes: Responsibilities and Accountability</h3>
    <p>
      As a valued host on our platform, it is essential to understand and adhere to the tax obligations that come with renting out your property. Compliance with tax regulations is crucial for maintaining the integrity of our platform and ensuring a seamless experience for all users. Below are the key responsibilities and accountability measures for hosts concerning taxes.
    </p>

    <h4>Responsibilities</h4>
    <ul>
      <li>
        <strong>Understanding Tax Obligations:</strong> It is the host’s responsibility to understand the tax obligations relevant to their rental activities. This includes but is not limited to local, state, and federal taxes such as income tax, staying tax, GST (Australia), VAT (European Union), and tourism fees for the Caribbean only if required.
      </li>
      <li>
        <strong>Accurate Reporting:</strong> Hosts must accurately report all income earned through the platform. This includes maintaining comprehensive records of all transactions, bookings, and related income.
      </li>
      <li>
        <strong>Timely Filing:</strong> Hosts are required to file their tax returns on time, as stipulated by the relevant tax authorities. Late filings can result in penalties and interest charges by the government.
      </li>
      <li>
        <strong>Compliance with Local Laws:</strong> Hosts must ensure that they comply with all local laws and regulations concerning short-term rentals. This includes obtaining any necessary licenses or permits required by local jurisdictions.
      </li>
      <li>
        <strong>Collection and Remittance of Taxes:</strong> Where applicable, hosts must collect and remit any taxes required by local authorities. This may include transient occupancy taxes, sales taxes in the country located, or other local taxes.
      </li>
    </ul>

    <h4>Accountability</h4>
    <ul>
      <li>
        <strong>Transparency:</strong> Hosts are expected to be transparent in their financial reporting. This includes providing accurate information to tax authorities and the platform when requested.
      </li>
      <li>
        <strong>Documentation:</strong> Hosts must keep detailed records of their rental income and expenses. This includes invoices, receipts, and any other documentation that supports their tax filings.
      </li>
      <li>
        <strong>Platform Policies:</strong> Hosts are required to comply with the platform’s policies on tax compliance. Failure to adhere to these policies may result in penalties, suspension, or termination of their hosting privileges.
      </li>
      <li>
        <strong>Professional Advice:</strong> Hosts are encouraged to seek professional tax advice to ensure full compliance with tax laws. This can help in understanding complex tax regulations and optimizing tax liabilities.
      </li>
      <li>
        <strong>Updates and Changes:</strong> Hosts must stay informed about changes in tax laws and regulations that may affect their rental activities. The platform may provide updates and resources to assist hosts, but the ultimate responsibility lies with the host.
      </li>
    </ul>

    <h4>Tax Handling by the Platform</h4>
    <ul>
      <li>
        <strong>Collection of Taxes:</strong> The platform will collect applicable taxes on behalf of the host at the time of booking.
      </li>
      <li>
        <strong>Returning Taxes to Hosts:</strong> Collected taxes will be returned to the host. Hosts are responsible for remitting these taxes to the appropriate tax authorities.
      </li>
      <li>
        <strong>Record Keeping:</strong> The platform will maintain detailed records of all tax collections and returns. This documentation serves as proof that taxes were returned to the host and can be provided to government authorities if required.
      </li>
      <li>
        <strong>Government Reporting:</strong> In the event of an audit or inquiry from tax authorities, the platform will cooperate fully by providing records demonstrating that the host received the collected taxes and is responsible for their remittance.
      </li>
    </ul>

    <h4>Support and Resources</h4>
    <p>
      Our platform is committed to supporting hosts in their tax compliance efforts. We provide resources and tools to help you understand your tax obligations and ensure compliance. If you have any questions or need assistance, please do not hesitate to contact our support team.
    </p>
  </Typography>
  <Button style={{ width: 200, marginTop: 20 }} variant="contained" color="primary" onClick={() => this.setState({  showTax: false })}>close</Button>
</Box>



        </Modal>
        <div style={{marginTop:30,marginLeft:10}} className="terms-checkbox">
        <input style={{ transform: 'scale(1.4)' }} type="checkbox" 
        checked={acceptTerms} onChange={this.handleCheckboxChange} />

      <Link style={{marginLeft:10}} to="#" onClick={this.toggleTermsModal}>
            <span>Terms and Conditions</span>
          </Link>
          <span> &</span>
          <Link style={{marginLeft:3}} to="#" onClick={this.toggleTaxModal}>
            <span>Tax info</span>
          </Link>
    </div>
       
        <div style={{ padding: 20,justifyContent:'flex-end',marginTop:40 }}>
          <div style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end', }}>
            <button className='back-btn'
              style={{ width: '10%', borderRadius: 10, height: '45px', borderWidth: 0, background: 'white' ,color:'black'}}
              onClick={() => this.props.NextCallBack({ navigationTo: 'Extra_Service', id: 7, currentid: 8, bt_type: 'Back' })}
            >Back</button>
           <button className='termaccept' disabled={!acceptTerms} onClick={this.handleSaveData} 
    style={{
    color: 'white',
    background: acceptTerms ? '#F15A29' : '#CCCCCC', 
    borderRadius: 10,
    height: '45px',
    marginLeft: 10,
    width: '150px',
    cursor: acceptTerms ? 'pointer' : 'not-allowed' 
  }}
>
  Finish
</button>

          </div>
        </div>
      </div>
    );
  }
}
