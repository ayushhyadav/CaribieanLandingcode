import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import HomePop from "./HomePop";
import './crousel.css';
import { Link } from 'react-router-dom';
import CountryList from 'react-select-country-list';
import Select, { components } from 'react-select';
import ReactCountryFlag from 'react-country-flag';

const Crousel = ({ CallBackFun }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [persons, setPersons] = useState('');
  // List of Caribbean countries
  const caribbeanCountries = [
    'AG', // Antigua and Barbuda
    'BS', // Bahamas
    'BB', // Barbados
    'CU', // Cuba
    'DM', // Dominica
    'DO', // Dominican Republic
    'GD', // Grenada
    'HT', // Haiti
    'JM', // Jamaica
    'KN', // Saint Kitts and Nevis
    'LC', // Saint Lucia
    'VC', // Saint Vincent and the Grenadines
    'TT'  // Trinidad and Tobago
  ];

  // Fetching all country options and filtering for Caribbean countries
  const allCountryOptions = CountryList().getData();
  const countryOptions = allCountryOptions.filter(country => caribbeanCountries.includes(country.value));

  const customSingleValue = ({ data }) => (
      <div style={{marginTop: '-25px'}}>
        <ReactCountryFlag countryCode={data.value} svg style={{ marginRight: '10px' }} />
        {data.label}
      </div>
  );

  const customOption = (props) => {
    const { data } = props;
    return (
        <components.Option {...props}>
          <ReactCountryFlag countryCode={data.value} svg style={{ marginRight: '10px' }} />
          {data.label}
        </components.Option>
    );
  };

  const handleButtonClick = () => {
    if (CallBackFun) {
      CallBackFun({
        country: selectedCountry,
        city: selectedCity,
        property_type: selectedPropertyType,
        persion: persons,
      });
    }
  };

  const list = [
    { img: require('../../assets/Country.png'), title: 'Antigua' },
    { img: require('../../assets/bahamas.png'), title: 'Bahamas' },
    { img: require('../../assets/cuba.png'), title: 'Cuba' },
    { img: require('../../assets/dominican republic.png'), title: 'Dominican' },
    { img: require('../../assets/grenada.png'), title: 'Grenada' },
    { img: require('../../assets/haiti.png'), title: 'Haiti' },
    { img: require('../../assets/barbados.png'), title: 'Barbados' },
    { img: require('../../assets/Saint Kitts.png'), title: 'Saint Kitts' },
    { img: require('../../assets/jamaica.png'), title: 'Jamaica' },
    { img: require('../../assets/st lucia.png'), title: 'Saint Lucia' },
    { img: require('../../assets/st vincent and the grenadines.png'), title: 'Saint Vincent' },
    { img: require('../../assets/trinidad and tobago.png'), title: 'Trinidad' },
  ];

  return (
      <div className="carousel-container">
        <div className="btn-top">
          <Link to='/Registration'>
            <button style={{ marginLeft: 10, height: 48, background: 'none', width: '10rem', padding: 5 }} className="me-2 btn btn-outline-dark host">
              Become a Host
            </button>
          </Link>
          <Link className='hind-b' style={{ marginLeft: 20 }} to='/Signup'>
            <button style={{ height: 48, width: '10rem', border: 'none', borderRadius: 11, color: 'white', background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)' }} className="me-2 btn btn-outline-dark hind-b">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="carousel-list">
          {list.map((item) => (
              <div className="list-item" key={item.title}>
                <img className="list-item-img" src={item.img} alt={item.title} />
                <label className="list-item-label">{item.title}</label>
              </div>
          ))}
          {/*<div className="arrow-icon">*/}
          {/*  <img*/}
          {/*      src={require('../../assets/Untitled_design.jpeg')}*/}
          {/*      style={{ height: 50, width: 50, borderRadius: '30px', cursor: 'pointer', marginBottom: 15, filter: 'invert(100%)' }}*/}
          {/*      alt="arrow"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
        <div className="content-section">
          <h1 className="main-title">A Free Mind To your Journey</h1>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <div className="filter-container">
              {/* <div className="filter-item">
              <span className="span-spacing">Caribbeaneaze Country</span>
              <div className="select-container">
                <img className="select-img" src={require('../../assets/Country.png')} alt="Country" />
                <select
                  className="select-box"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option value="Antigua">Antigua</option>
                </select>
              </div>
            </div> */}
              <div className="filter-item">
                <span className="span-spacing">Caribbeaneaze Country</span>
                <div className="select-container">
                  <Select
                      className="select-box-country"
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      options={countryOptions}
                      components={{ SingleValue: customSingleValue, Option: customOption }}
                      // isSearchable={false}
                  />
                </div>
              </div>

              <div className="filter-item">
                <span className="span-spacing">Select City</span>
                <select
                    className="select-box"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  <option value="India">India</option>
                  {/* Add more city options as needed */}
                </select>
              </div>
              <div className="filter-item">
                <span className="span-spacing">Select Property Type</span>
                <select
                    className="select-box"
                    value={selectedPropertyType}
                    onChange={(e) => setSelectedPropertyType(e.target.value)}
                >
                  <option value="">Select Property Type</option>
                  <option value="Localeaze">Localeaze</option>
                  <option value="Middleaze">Middleaze</option>
                  <option value="Higheaze">Higheaze</option>
                </select>
              </div>
              <div className="filter-item">
                <span className="span-spacing d-block">Person</span>
                <input
                    type="number"
                    placeholder="Add Person"
                    className="input-field"
                    value={persons}
                    onChange={(e) => setPersons(e.target.value)}
                    style={{ border: 'none', maxWidth: '97px', fontSize: 13, background: 'transparent', fontWeight: '' }}
                />
              </div>
              <div className="check-in">
                <div className="filter-item" style={{ borderLeft: '1px solid #b8b8b8' }}>
                  <span className="span-spacing" style={{ marginLeft: '8px' }}>Check In</span>
                  <input
                      className="input"
                      type="date"
                      placeholder="dd/mm/yyyy"
                      style={{ background: 'transparent' }}
                  />
                </div>
                <div className="filter-item" style={{ borderLeft: '1px solid #b8b8b8' }}>
                  <span className="span-spacing" style={{ marginLeft: '8px' }}>Check Out</span>
                  <input
                      className="input"
                      type="date"
                      style={{ background: 'transparent' }}
                  />
                </div>
              </div>
              <div className="filter-item d-flex justify-content-center">
                <a onClick={handleButtonClick} className="search-button">
                  <img src={require('../../assets/search-normal.png')} className="search-icon" alt="search" />
                </a>
              </div>
            </div>
          </div>
          <div className="advance-filter-button">
            <Popup
                shouldCloseOnOverlayClick={false}
                closeOnDocumentClick={false}
                trigger={
                  <button style={{
                    height: 48, width: '10%', border: 'none', borderRadius: 12,
                    color: 'white', background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
                  }}>
                    Advance Filter
                  </button>
                }
                modal
                contentStyle={{ height: '900px', overflow: 'auto' }}
            >
              {close => (
                  <div>
                    <HomePop closeModule={() => close()} />
                  </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
  );
};

export default Crousel;