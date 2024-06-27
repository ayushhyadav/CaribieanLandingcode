import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import './HomePop.css'
import BaseUrl from '../Server/BaseUrl'

const list = [
  {
    img: require('../../assets/Country.png'),
    title: 'Antigua',
  },
  {
    img: require('../../assets/bahamas.png'),
    title: 'bahamas',
  },
  {
    img: require('../../assets/cuba.png'),
    title: 'Cuba',
  },
  {
    img: require('../../assets/dominican republic.png'),
    title: 'Dominican',
  },
  {
    img: require('../../assets/grenada.png'),
    title: 'Grenada',
  },
  {
    img: require('../../assets/haiti.png'),
    title: 'Haiti',
  },
  {
    img: require('../../assets/barbados.png'),
    title: 'Barbados',
  },
  {
    img: require('../../assets/Saint Kitts.png'),
    title: 'Saint Kitts',
  },
  {
    img: require('../../assets/jamaica.png'),
    title: 'Jamaica',
  },
  {
    img: require('../../assets/st lucia.png'),
    title: 'Saint Lucia ',
  },
  {
    img: require('../../assets/st vincent and the grenadines.png'),
    title: 'Saint Vincent',
  },
  {
    img: require('../../assets/trinidad and tobago.png'),
    title: 'Trinidad',
  },]

const Amenities = [

  { Item: 'Wifi' },
  { Item: 'Washer' },
  { Item: 'Kitchen' },
  { Item: 'dryer' },
  { Item: 'Air Conditioning' },
  { Item: 'Heating' },
  { Item: 'Dedicated Workspace' },
  { Item: 'TV' },

];

const user = [

  { Item2: 'Hair Dryer' },
  { Item2: 'Iron' },

];

const Feature = [
  { item: 'Pool' },
  { item: 'Breakfast' },
  { item: 'Smoking allowed' },
  { item: 'Indoor fireplace' },
  { item: 'Rafting' },
  { item: 'Exotic Food' },
];

export default class HomePop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [100, 10000],
            selectedAmenities: [],
            selectedUserItems: [],
            selectedFeatures: [],
            filteredProperties: [],
        };
    }

    rangeSelector = (event, newValue) => {
        this.setState({ value: newValue });
    };

    toggleSelection = (category, item) => {
        const { selectedAmenities, selectedUserItems, selectedFeatures } = this.state;

        switch (category) {
            case 'amenities':
                this.setState({
                    selectedAmenities: selectedAmenities.includes(item)
                        ? selectedAmenities.filter(selectedItem => selectedItem !== item)
                        : [...selectedAmenities, item],
                });
                break;
            case 'userItems':
                this.setState({
                    selectedUserItems: selectedUserItems.includes(item)
                        ? selectedUserItems.filter(selectedItem => selectedItem !== item)
                        : [...selectedUserItems, item],
                });
                break;
            case 'features':
                this.setState({
                    selectedFeatures: selectedFeatures.includes(item)
                        ? selectedFeatures.filter(selectedItem => selectedItem !== item)
                        : [...selectedFeatures, item],
                });
                break;
            default:
                break;
        }
    };

    filterProperties = async () => {
        const { value, selectedAmenities, selectedUserItems, selectedFeatures } = this.state;

        const filters = {
            country: this.state.selectedCountry,
            city: this.state.selectedCity,
            property_type: this.state.selectedPropertyType,
            person: this.state.selectedPerson,
            minimum_budget: value[0],
            maximum_budget: value[1],
            select_view: this.state.selectedView,
            amenities: selectedAmenities,
            extra_service: selectedUserItems.concat(selectedFeatures),
            check_in_date: this.state.checkInDate,
            check_out_date: this.state.checkOutDate,
        };
        // fetch(BaseUrl.BaseUrl + '/get_all_propertys')
        try {
            const response = await fetch(BaseUrl.BaseUrl + `/api/properties/filter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filters),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            this.setState({ filteredProperties: responseData.message.data });
        } catch (error) {
            console.error('Error filtering properties:', error);
        }
    };




  render() {
    const { value, selectedAmenities, selectedUserItems, selectedFeatures , filteredProperties } = this.state;

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>
          <div className='top-btn' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', margin: '0 auto', marginTop: 40 }}>
            <button style={{ border: 'none', background: 'none' }} onClick={() => this.props.closeModule()}>
              <img style={{ float: 'left' }} src={require('../../assets/close-circle.png')} alt="Close" />
            </button>
            <button
                style={{
                  borderRadius: 15,
                  border: 'none',
                  background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
                  width: '35%',
                  color: '#fff'
                }}
                className="me-2 btn btn-outline-dark"
                type="submit"
                onClick={this.filterProperties}

            >
                View Result
                {/* {filteredProperties.length} */}
            </button>
          </div>
          <div className='popup-country' style={{ marginTop: 30, fontWeight: 500, marginBottom: 10 }}>
            <label>Select Caribbean Country</label>
            <div className="carousel-list">
              {list.map((item) => (
                  <div className="list-item" key={item.title}>
                    <img className="list-item-img" src={item.img} alt="logo" />
                    <label className="list-item-label">{item.title}</label>
                  </div>
              ))}
              <div className="arrow-icon">
                <img src={require('../../assets/Untitled_design.jpeg')}
                     style={{ height: 50, width: 50, borderRadius: 30, color: 'white', cursor: 'pointer', borderRadius: '30px', marginBottom: 15, filter: 'color' }} />
              </div>
            </div>

          </div>
          <div style={{ marginTop: 30 }}>
            <label style={{ marginTop: 20, fontWeight: 500, marginBottom: 10 }}>Select City</label> <br />
            <select style={{ width: '55%', height: 45, borderRadius: 10, background: 'white', padding: 10, border: '1px solid #000' }}>
              {/* <option>Select City</option> */}
              {/* <option>Select Country</option>
              <option>Select Country</option> */}
            </select>
          </div>
          <div
              style={{
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                borderBottom: '1px solid #E5E7EB',
                marginBottom: 15,
                marginTop: 30
              }}
          >
            {/* <div style={{ width: '100%', marginTop: 20, padding: 10 }}>
            <label style={{ fontWeight: 500, marginBottom: 10 }}>Check In</label>
            <br />
            <div
              style={{
                width: '100%',
                height: 45,
                borderRadius: 10,
                background: 'white',
              }}
            >
              <input style={{ width: '100%', height: 45, borderRadius: 10, padding: 5, border: '1px solid #000' }} type='date' />
            </div>
          </div>
          <div style={{ width: '100%', marginTop: 20, padding: 10 }}>
            <label style={{ fontWeight: 500, marginBottom: 10 }}>Check Out</label>
            <br />
            <div
              style={{
                width: '100%',
                height: 45,
                borderRadius: 10,
                background: 'white',
              }}
            >
              <input style={{ width: '100%', height: 45, borderRadius: 10, padding: 5, border: '1px solid #000' }} type='date' />
            </div>
          </div>
          <div style={{ width: '100%', marginTop: 20, padding: 10 }}>
            <label style={{ fontWeight: 500, marginBottom: 10 }}>Select Person</label>
            <br />
            <input
              style={{
                width: '100%',
                height: 45,
                borderRadius: 10,
                border: '1px solid #000'
              }}
              type='number'
              placeholder="0"
            />
          </div> */}
            <div className="field-containerH">
              <label className="labelH">Check In</label>
              <div className="input-containerH">
                <input className="inputH" type='date' />
              </div>
            </div>

            <div className="field-containerH">
              <label className="labelH">Check Out</label>
              <div className="input-containerH">
                <input className="inputH" type='date' />
              </div>
            </div>

            <div className="field-containerH">
              <label className="labelH">Select Person</label>
              <input className="select-personH" type='number' placeholder="0" />
            </div>

          </div>
          <div style={{ marginTop: 25 }}>
            <label style={{ fontWeight: 500, }}>Select Price Range</label>
            <div
                style={{
                  display: 'block',
                  width: '100%',
                  color: '#F15A29',
                  justifyContent: 'space-between'
                }}
            >
              <Slider
                  value={value}
                  onChange={this.rangeSelector}
                  valueLabelDisplay="auto"
                  style={{ color: '#F15A29', width: '100%' }}
                  min={100} // Set min value
                  max={10000} // Set max value
              />
              <div style={{ justifyContent: 'space-between', textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>
                ${value[0]} <span style={{ border: '2px solid white', padding: 15 }}> To</span>  ${value[1]}
              </div>
            </div>
          </div>
          <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 20,
              }}
          >
            <div style={{ width: '80%' }}>
              <label style={{ fontWeight: 500, }}>Min Budget</label>
              <br />
              <input
                  style={{ height: 48, borderRadius: 12, padding: 10, marginTop: 15, width: '90%', border: '1px solid #000' }}
                  type="number"
                  placeholder="$85"
              />
            </div>
            <div style={{ width: '80%' }}>
              <label style={{ fontWeight: 500, }}>Max Budget</label>
              <br />
              <input
                  style={{ height: 48, borderRadius: 12, padding: 10, marginTop: 15, width: '90%', border: '1px solid #000' }}
                  type="number"
                  placeholder="$150"
              />
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', marginTop: 20 }}>
            <div style={{ width: '50%' }}>
              <label style={{ fontWeight: 500, }}>Select Property Type</label><br />
              <select style={{ width: '90%', height: 45, borderRadius: 10, background: 'white', padding: 5, marginTop: 15, border: '1px solid #000' }}>
                <option>Localeaze</option>
                <option>Middleaze</option>
                <option>Higheaze</option>
              </select>
            </div>
            <div style={{ width: '50%' }}>
              <label style={{ fontWeight: 500, }}>Select Property View</label><br />
              <select style={{
                width: '90%',
                height: 45,
                borderRadius: 10,
                background: 'white',
                padding: 5,
                marginTop: 15.,
                border: '1px solid #000'
              }}>
                <option>Beach View</option>
                <option>Mountain View</option>
                <option>Uptown </option>
                <option>Downtown</option>
                <option>River View</option>
                <option>Ecotourism</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: 25 }}>
            <label style={{ fontWeight: 500, }}>Amenities</label>
            <div className='Amenities' style={{ display: 'flex', width: '100%', marginTop: 10 }}>
              {Amenities.map((amenity) => (
                  <ul
                      key={amenity.Item}
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
                        onClick={() => this.toggleSelection('amenities', amenity.Item)}
                        style={{
                          background: selectedAmenities.includes(amenity.Item) ? '#F15A29' : '#F3F4F6',
                          width: '99%',
                          height: 30,
                          borderRadius: 5,
                          textAlign: 'center',
                          color: selectedAmenities.includes(amenity.Item) ? 'white' : '#6B7280',
                          fontSize: 13,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                    >
                      {amenity.Item}
                    </li>
                  </ul>
              ))}
            </div>
            <div className='Amenities' style={{ display: 'flex', marginTop: 10 }}>
              {user.map((userItem) => (
                  <ul key={userItem.Item2} style={{ listStyleType: 'none', width: '12%' }}>
                    <li
                        onClick={() => this.toggleSelection('userItems', userItem.Item2)}
                        style={{
                          background: selectedUserItems.includes(userItem.Item2) ? '#F15A29' : '#F3F4F6',
                          width: '100%',
                          height: 25,
                          borderRadius: 5,
                          color: selectedUserItems.includes(userItem.Item2) ? 'white' : '#6B7280',
                          fontSize: 14,
                          textAlign: 'center',
                        }}
                    >
                      {userItem.Item2}
                    </li>
                  </ul>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <label>Feature</label>
            <div className='Amenities' style={{ display: 'flex', marginTop: 10 }}>
              {Feature.map((feature) => (
                  <ul key={feature.item} style={{ listStyleType: 'none', width: '50%' }}>
                    <li
                        onClick={() => this.toggleSelection('features', feature.item)}
                        style={{
                          background: selectedFeatures.includes(feature.item) ? '#F15A29' : '#F3F4F6',
                          width: '100%',
                          height: 35,
                          borderRadius: 5,
                          color: selectedFeatures.includes(feature.item) ? 'white' : '#6B7280',
                          fontSize: 14,
                          textAlign: 'center',
                        }}
                    >
                      {feature.item}
                    </li>
                  </ul>
              ))}
            </div>
          </div>
        </div>
    );
  }
}