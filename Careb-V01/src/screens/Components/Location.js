
              
              import React, { Component } from 'react';
              import './Location.css';
              import { Country, State, City } from 'country-state-city';
              
              export default class Located extends Component {
                constructor(props) {
                  super(props);
                  this.state = {
                    currentLocation: null,
                    useCurrentLocation: false,
                    countryRegion: '',
                    state: '',
                    city: '',
                    streetAddress: '',
                    states: [],
                    cities: [],
                  };
                }
              
                handleSaveDataToLocalStorage = () => {
                  const { currentLocation, countryRegion, state, city, streetAddress } = this.state;
              
                  if (!streetAddress) {
                    alert('Street Address is required!');
                    return;
                  }
              
                  const dataToSave = {
                    currentLocation,
                    countryRegion,
                    state,
                    city,
                    streetAddress,
                  };
              
                  localStorage.setItem('propertyData', JSON.stringify(dataToSave));
              
                  this.props.NextCallBack({ navigationTo: 'property_Images', id: 7, bt_type: 'Next' });
                  console.log('Data saved to localStorage:', dataToSave);
                };
              
                handleUseCurrentLocation = () => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      async (position) => {
                        const { latitude, longitude } = position.coords;
              
                  
              const apiKey = 'AIzaSyAPGUoanvIaJoN2G2asrYqts3_xX3HCKXQ';
              const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&latlng=${latitude},${longitude}`;
                        try {
                          const response = await fetch(url);
                          const data = await response.json();
                          console.log('Geocoding data:', data);
              
                          if (data.status === 'OK') {
                            const addressComponents = data.results[0].address_components;
              
                            const country = addressComponents.find((component) =>
                              component.types.includes('country')
                            )?.long_name;
                            const state = addressComponents.find((component) =>
                              component.types.includes('administrative_area_level_1')
                            )?.long_name;
                            const city = addressComponents.find((component) =>
                              component.types.includes('locality')
                            )?.long_name;
                            const streetAddress = data.results[0].formatted_address;
              
                            this.setState({
                              currentLocation: { latitude, longitude },
                              countryRegion: country,
                              state,
                              city,
                              useCurrentLocation: true, // Update state to reflect current location usage
                              streetAddress, // Update street address from geolocation
                              states: State.getStatesOfCountry(country),
                              cities: City.getCitiesOfState(country, state),
                            });
                          } else {
                            console.error('Geocoding request failed:', data.status);
                            alert('Failed to retrieve location information.');
                          }
                        } catch (error) {
                          console.error('Error getting geolocation data:', error);
                          alert('Error getting geolocation data.');
                        }
                      },
                      (error) => {
                        console.error('Error getting current location:', error);
                        alert('Error getting current location.');
                      }
                    );
                  } else {
                    console.error('Geolocation is not supported by your browser.');
                    alert('Geolocation is not supported by your browser.');
                  }
                };
              
                handleCountryChange = (e) => {
                  const selectedCountry = e.target.value;
                  this.setState({
                    countryRegion: selectedCountry,
                    state: '',
                    city: '',
                    states: State.getStatesOfCountry(selectedCountry),
                    cities: [],
                  });
                };
              
                handleStateChange = (e) => {
                  const selectedState = e.target.value;
                  const { countryRegion } = this.state;
                  this.setState({
                    state: selectedState,
                    city: '',
                    cities: City.getCitiesOfState(countryRegion, selectedState),
                  });
                };
              
                render() {
                  const { useCurrentLocation, countryRegion, state, city, streetAddress, states, cities } = this.state;
              
                  return (
                    <div className="main-section" style={{ width: '90%', padding: 20 }}>
                      <label style={{ fontSize: 17, fontWeight: '500', marginLeft: 20 }}>Step 6/8</label>
                      <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Where are you Located</h4>
                      <label style={{ fontSize: 16, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
                        Please Complete these Location info of your property
                      </label>
                      <div style={{ width: '90%', justifyContent: 'center', marginLeft: 20, height: 500 }}>
                        <div className="opt-Located" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                          <div className='min-opt' style={{ marginTop: 6, width: '30%' }}>
                            <label>Select Country/Region</label>
                            <select
                              id="countryRegion"
                              style={{
                                width: '98%',
                                height: '2.6rem',
                                borderColor: '#E2E8F0',
                                borderRadius: 7,
                                background: 'none'
                              }}
                              value={countryRegion}
                              onChange={this.handleCountryChange}
                              // Disable if using current location
                            >
                              <option value="">Select Country</option>
                              {Country.getAllCountries().map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className='type-p' style={{ marginTop: 15, width: '30%' }}>
                            <label>State</label>
                            <select
                              id="state"
                              style={{
                                width: '98%',
                                height: '2.2rem',
                                borderColor: '#E2E8F0',
                                borderRadius: 7,
                                background: 'none'
                              }}
                              value={state}
                              onChange={this.handleStateChange}
                              disabled={!countryRegion} // Disable if no country selected or using current location
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className='type-p' style={{ marginTop: 15, width: '30%' }}>
                            <label>City</label>
                            <select
                              id="city"
                              style={{
                                width: '100%',
                                height: '2.2rem',
                                borderColor: '#E2E8F0',
                                borderRadius: 7,
                                background: 'none'
                              }}
                              value={city}
                              onChange={(e) => this.setState({ city: e.target.value })}
                              disabled={!state } // Disable if no state selected or using current location
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city.name} value={city.name}>{city.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div style={{ width: '100%', marginTop: 25 }}>
                          <label style={{ color: '#474554', fontSize: 17 }}>Street Address</label>
                          <br />
                          <input
                            style={{
                              width: '100%',
                              height: 45,
                              borderWidth: 0.1,
                              marginTop: 5,
                              borderColor: '#E2E8F0',
                              borderRadius: 7
                            }}
                            type="text"
                            placeholder="Enter Your Street Address"
                            value={streetAddress}
                            onChange={(e) => this.setState({ streetAddress: e.target.value })}
                            // disabled={useCurrentLocation} // Disable if using current location
                          />
                        </div>
                        <button
                          style={{
                            color: 'white',
                            height: 45,
                            width: '100%',
                            marginTop: 25,
                            borderRadius: 10,
                            border: 'none',
                            background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
                          }}
                          onClick={this.handleUseCurrentLocation}
                          // disabled={useCurrentLocation} // Disable if already using current location
                        >
                          Use Current Location
                        </button>
                      </div>
                      <div style={{ display: 'flex', marginTop: 30, width: '92%', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <button
                          className='back-btn'
                          style={{ width: '10%', borderRadius: 10, height: '45px', borderWidth: 0, background: 'white', color: 'black' }}
                          onClick={() => this.props.NextCallBack({ navigationTo: 'property_Location', id: 5, currentid: 6, bt_type: 'Back' })}
                        >
                          Back
                        </button>
                        <button
                          className='next-btn'
                          style={{ color: 'white', background: '#F15A29', width: '10%', borderRadius: 10, height: '45px', marginLeft: 10 }}
                          onClick={this.handleSaveDataToLocalStorage}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  );
                }
              }
              