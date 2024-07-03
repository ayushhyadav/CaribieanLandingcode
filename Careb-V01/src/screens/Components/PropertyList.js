import React, { Component } from 'react';
import Storage from '../Server/Storage';
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, Tooltip, Typography, TextareaAutosize } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import './PropertyList.css';

const Data = [
  { title: 'Localeaze' },
  { title: 'Middleaze' },
  { title: 'Higheaze' },
];

const Listing = [
  { title: 'Uptown' },
  { title: 'Downtown' },
  { title: 'Mountains' },
  { title: 'Beach' },
  { title: 'River' },
  { title: 'Ecotourism' },
];


export default class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: '',
      view: '',
      propertyType: '',
      pricePerNight: '',
      guestCapacity: '',
      bedroomCount: '',
      bathroomCount: '',
      description: '',
      rules: '',
      formValid: false  // State to track form validity
    };
  }

  // Method to handle form validation
  validateForm = () => {
    const {
      property_name,
      view,
      propertyType,
      pricePerNight,
      guestCapacity,
      bedroomCount,
      bathroomCount,
      description,
      rules
    } = this.state;

    // Check if all required fields are filled
    const isValid = property_name && view && propertyType && pricePerNight && guestCapacity && bedroomCount && bathroomCount && description;
    
    this.setState({ formValid: isValid });
    return isValid;
  };

  // Method to save data to localStorage and proceed to next step
  handleSaveDataToLocalStorage = () => {
    if (!this.validateForm()) {
      alert('Please fill in all required fields.');
      // Form is not valid, do not proceed
      return;
    }

    const dataToSave = {
      property_name: this.state.property_name,
      view: this.state.view,
      propertyType: this.state.propertyType,
      pricePerNight: this.state.pricePerNight,
      guestCapacity: this.state.guestCapacity,
      bedroomCount: this.state.bedroomCount,
      bathroomCount: this.state.bathroomCount,
      description: this.state.description,
      rules: this.state.rules,
    };

    localStorage.setItem('propertyList', JSON.stringify(dataToSave));
    console.log('Data saved to localStorage:', localStorage.getItem('propertyList'));

        // Proceed to next step
        this.props.NextCallBack({ navigationTo: 'property_Location', id: 6, bt_type: 'Next' });
  };

  render() {
    return (
      <Box className='list-box' sx={{ width: '95%', p: 3, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <Box href='/divercify'   sx={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', mb: 2 }}>
          <Typography sx={{ fontSize: 17, fontWeight: 500, ml: 1 }}>Step 5/8</Typography>
          <Button 
          // href='/divercify' 
           variant="outlined" sx={{ width: '200px' ,background:'none'}}>Diversify Property
            {/* <InfoIcon /> */}
            <Tooltip title="Diversify property for long-stay bookings offers varied accommodations like serviced apartments, extended-stay hotels, and rental homes for 1-2 month or 6+ month stays, featuring amenities such as kitchens, laundry facilities, wifi, workspaces etc.,  Coming Soon!!">
              <Box sx={{ display: 'inline-block' }}>
                <InfoIcon />
              </Box>
            </Tooltip>
          </Button>
        </Box>
        <Typography variant="h4" sx={{ fontSize: 29, fontWeight: 700, ml: 2 }}>List Your Property</Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#0F172A', ml: 2 }}>
          Please Complete these information for Listing Property
        </Typography>
        <Box sx={{ width: '90%', justifyContent: 'center', ml: 2 }}>
          <Box className='list-input' sx={{ display: 'flex', mt: 2, justifyContent: 'space-between' }}>
            <Box className='type-p' sx={{ width: '50%', m: 1 }}>
              {/* <InputLabel htmlFor="property-name" sx={{ color: '#474554' }}>Property Name</InputLabel> */}
              <TextField
                label="Property Name"
                id="property-name"
                fullWidth
                variant="outlined"
                placeholder='Enter property Name'
                value={this.state.property_name}
                onChange={(e) => this.setState({ property_name: e.target.value })}
                sx={{ mt: 1 }}
              />
            </Box>
            <Box className="listing-box" sx={{ width: '50%', m: 1 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="view-select" sx={{ color: '#474554' }}>What kind of view are you listing</InputLabel>
                <Select
                  id="view-select"
                  value={this.state.view}
                  onChange={(e) => this.setState({ view: e.target.value })}
                  sx={{ mt: 1 }}
                >
                  {Data.map((item) => (
                    <MenuItem key={item.title} value={item.title}>{item.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box className='list-input' sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Box className='type-p' sx={{ width: '50%', m: 1 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="property-type-select" sx={{ color: '#474554' }}>Property Type</InputLabel>
                <Select
                  id="property-type-select"
                  value={this.state.propertyType}
                  onChange={(e) => this.setState({ propertyType: e.target.value })}
                  sx={{ mt: 1 }}
                >
                  {Listing.map((item) => (
                    <MenuItem key={item.title} value={item.title}>{item.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className='type-p' sx={{ width: '50%', m: 1 }}>
              {/* <InputLabel htmlFor="price-per-night" sx={{ color: '#474554' }}>Price Per Night</InputLabel> */}
              <TextField
              label="Price Per Night"
                id="price-per-night"
                fullWidth
                variant="outlined"
                type="number"
                placeholder='$0'
                value={this.state.pricePerNight}
                onChange={(e) => this.setState({ pricePerNight: e.target.value })}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Box className='list-input-number' sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Box className='input-fild' sx={{ width: '33%', m: 1 }}>
              <InputLabel htmlFor="guest-capacity" sx={{ color: '#474554', fontSize: 17 }}>How many guests you can accommodate</InputLabel>
              <TextField
                id="guest-capacity"
                fullWidth
                type="number"
                variant="outlined"
                placeholder=''
                value={this.state.guestCapacity}
                onChange={(e) => this.setState({ guestCapacity: e.target.value })}
                sx={{ mt: 1 }}
              />
            </Box>
            <Box className='input-fild' sx={{ width: '33%', m: 1 }}>
              <InputLabel htmlFor="bedroom-count" sx={{ color: '#474554', fontSize: 17 }}>How many bedrooms guests can use</InputLabel>
              <TextField
                id="bedroom-count"
                type="number"
                fullWidth
                variant="outlined"
                placeholder=''
                value={this.state.bedroomCount}
                onChange={(e) => this.setState({ bedroomCount: e.target.value })}
                sx={{ mt: 1 }}
              />
            </Box>
            <Box className='input-fild' sx={{ width: '33%', m: 1 }}>
              <InputLabel htmlFor="bathroom-count" sx={{ color: '#474554', fontSize: 17 }}>How many bathrooms guests can use</InputLabel>
              <TextField
                id="bathroom-count"
                type="number"
                fullWidth
                variant="outlined"
                placeholder=''
                value={this.state.bathroomCount}
                onChange={(e) => this.setState({ bathroomCount: e.target.value })}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <InputLabel htmlFor="description" sx={{ mt: 2, color: '#474554' }}>Property Description</InputLabel>
          <TextareaAutosize
            id="description"
            minRows={4}
            placeholder='Enter Your Property Description'
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            style={{ width: '92%', padding: 10, color: 'black', borderColor: '#E2E8F0', borderRadius: 10, marginTop: 8 }}
          />

          <InputLabel htmlFor="rules" sx={{ mt: 2, color: '#474554' }}>Property Rules</InputLabel>
          <TextareaAutosize
            id="rules"
            minRows={4}
            placeholder='Enter Your Property Rules'
            value={this.state.rules}
            onChange={(e) => this.setState({ rules: e.target.value })}
            style={{ width: '92%', padding: 10, color: 'black', borderColor: '#E2E8F0', borderRadius: 10, marginTop: 8 }}
          />
        </Box>

        {/* <Box sx={{ display: 'flex', mt: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            // className='back-btn'
            sx={{ width: '10%', borderRadius: 10, height: 45, backgroundColor: 'none', color: '#000' }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'List_property', id: 4, currentid: 5, bt_type: 'Back' })}
          >
            Back
          </Button>
          <Button
            variant="contained"
            // className='next-btn'
            sx={{ color: 'white', backgroundColor: '#F15A29', width: '10%', borderRadius: 10, height: 50, ml: 1 }}
            onClick={() => {
              this.handleSaveDataToLocalStorage();
              // this.props.NextCallBack({ navigationTo: 'property_Location', id: 6, bt_type: 'Next' });
            }}
          >
            Next
          </Button>
        </Box> */}

<div style={{ display: 'flex', marginTop: 30, alignItems: 'center', justifyContent: 'flex-end' }}>
          <button className='back-btn'
            style={{ width: '10%', borderRadius: 10, height: '45px', borderWidth: 0, background: 'white', color: '#000' }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'List_property', id: 4, currentid: 5, bt_type: 'Back' })}
          >
            Back
          </button>
          <button className='next-btn'
            style={{ color: 'white', background: '#F15A29', width: '10%', borderRadius: 10, height: '50px', marginLeft: 10 }}
            onClick={() => {
              this.handleSaveDataToLocalStorage();
              // this.props.NextCallBack({ navigationTo: 'property_Location', id: 6, bt_type: 'Next' });
            }}
          >
            Next
          </button>
        </div>
      </Box>
    );
  }
}

