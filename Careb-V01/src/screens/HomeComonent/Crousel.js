// import React, { useState, useEffect } from "react";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import HomePop from "./HomePop";
// import './crousel.css';
// import { Link } from 'react-router-dom';
// import CountryList from 'react-select-country-list';
// import Select, { components } from 'react-select';
// import ReactCountryFlag from 'react-country-flag';
//
// const Crousel = ({ CallBackFun },props) => {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedPropertyType, setSelectedPropertyType] = useState('');
//   const [persons, setPersons] = useState('');
//   // List of Caribbean countries
//   const caribbeanCountries = [
//     'AG', // Antigua and Barbuda
//     'BS', // Bahamas
//     'BB', // Barbados
//     'CU', // Cuba
//     'DM', // Dominica
//     'DO', // Dominican Republic
//     'GD', // Grenada
//     'HT', // Haiti
//     'JM', // Jamaica
//     'KN', // Saint Kitts and Nevis
//     'LC', // Saint Lucia
//     'VC', // Saint Vincent and the Grenadines
//     'TT'  // Trinidad and Tobago
//   ];
//
//   // Fetching all country options and filtering for Caribbean countries
//   const allCountryOptions = CountryList().getData();
//   const countryOptions = allCountryOptions.filter(country => caribbeanCountries.includes(country.value));
//
//   const customSingleValue = ({ data }) => (
//       <div style={{marginTop: '-25px'}}>
//         <ReactCountryFlag countryCode={data.value} svg style={{ marginRight: '10px' }} />
//         {data.label}
//       </div>
//   );
//
//   const customOption = (props) => {
//     const { data } = props;
//     return (
//         <components.Option {...props}>
//           <ReactCountryFlag countryCode={data.value} svg style={{ marginRight: '10px' }} />
//           {data.label}
//         </components.Option>
//     );
//   };
//
//   const handleButtonClick = () => {
//     if (CallBackFun) {
//       CallBackFun({
//         country: selectedCountry,
//         city: selectedCity,
//         property_type: selectedPropertyType,
//         persion: persons,
//       });
//     }
//   };
//
//   const list = [
//     { img: require('../../assets/Country.png'), title: 'Antigua' },
//     { img: require('../../assets/bahamas.png'), title: 'Bahamas' },
//     { img: require('../../assets/cuba.png'), title: 'Cuba' },
//     { img: require('../../assets/dominican republic.png'), title: 'Dominican' },
//     { img: require('../../assets/grenada.png'), title: 'Grenada' },
//     { img: require('../../assets/haiti.png'), title: 'Haiti' },
//     { img: require('../../assets/barbados.png'), title: 'Barbados' },
//     { img: require('../../assets/Saint Kitts.png'), title: 'Saint Kitts' },
//     { img: require('../../assets/jamaica.png'), title: 'Jamaica' },
//     { img: require('../../assets/st lucia.png'), title: 'Saint Lucia' },
//     { img: require('../../assets/st vincent and the grenadines.png'), title: 'Saint Vincent' },
//     { img: require('../../assets/trinidad and tobago.png'), title: 'Trinidad' },
//   ];
//
//   return (
//       <div className="carousel-container">
//         <div className="btn-top">
//           <Link to='/Registration'>
//             <button style={{ marginLeft: 10, height: 48, background: 'none', width: '10rem', padding: 5 }} className="me-2 btn btn-outline-dark host">
//               Become a Host
//             </button>
//           </Link>
//           <Link className='hind-b' style={{ marginLeft: 20 }} to='/Signup'>
//             <button style={{ height: 48, width: '10rem', border: 'none', borderRadius: 11, color: 'white', background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)' }} className="me-2 btn btn-outline-dark hind-b">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//         <div className="carousel-list">
//           {list.map((item) => (
//               <div className="list-item" key={item.title}>
//                 <img className="list-item-img" src={item.img} alt={item.title} />
//                 <label className="list-item-label">{item.title}</label>
//               </div>
//           ))}
//           {/*<div className="arrow-icon">*/}
//           {/*  <img*/}
//           {/*      src={require('../../assets/Untitled_design.jpeg')}*/}
//           {/*      style={{ height: 50, width: 50, borderRadius: '30px', cursor: 'pointer', marginBottom: 15, filter: 'invert(100%)' }}*/}
//           {/*      alt="arrow"*/}
//           {/*  />*/}
//           {/*</div>*/}
//         </div>
//         <div className="content-section">
//           <h1 className="main-title">A Free Mind To your Journey</h1>
//           <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
//             <div className="filter-container">
//               {/* <div className="filter-item">
//               <span className="span-spacing">Caribbeaneaze Country</span>
//               <div className="select-container">
//                 <img className="select-img" src={require('../../assets/Country.png')} alt="Country" />
//                 <select
//                   className="select-box"
//                   value={selectedCountry}
//                   onChange={(e) => setSelectedCountry(e.target.value)}
//                 >
//                   <option value="">Select Country</option>
//                   <option value="Antigua">Antigua</option>
//                 </select>
//               </div>
//             </div> */}
//               <div className="filter-item">
//                 <span className="span-spacing">Caribbeaneaze Country</span>
//                 <div className="select-container">
//                   <Select
//                       className="select-box-country"
//                       value={selectedCountry}
//                       onChange={setSelectedCountry}
//                       options={countryOptions}
//                       components={{ SingleValue: customSingleValue, Option: customOption }}
//                       // isSearchable={false}
//                   />
//                 </div>
//               </div>
//
//               <div className="filter-item">
//                 <span className="span-spacing">Select City</span>
//                 <select
//                     className="select-box"
//                     value={selectedCity}
//                     onChange={(e) => setSelectedCity(e.target.value)}
//                 >
//                   <option value="">Select City</option>
//                   <option value="India">India</option>
//                   {/* Add more city options as needed */}
//                 </select>
//               </div>
//               <div className="filter-item">
//                 <span className="span-spacing">Select Property Type</span>
//                 <select
//                     className="select-box"
//                     value={selectedPropertyType}
//                     onChange={(e) => setSelectedPropertyType(e.target.value)}
//                 >
//                   <option value="">Select Property Type</option>
//                   <option value="Localeaze">Localeaze</option>
//                   <option value="Middleaze">Middleaze</option>
//                   <option value="Higheaze">Higheaze</option>
//                 </select>
//               </div>
//               <div className="filter-item">
//                 <span className="span-spacing d-block">Person</span>
//                 <input
//                     type="number"
//                     placeholder="Add Person"
//                     className="input-field"
//                     value={persons}
//                     onChange={(e) => setPersons(e.target.value)}
//                     style={{ border: 'none', maxWidth: '97px', fontSize: 13, background: 'transparent', fontWeight: '' }}
//                 />
//               </div>
//               <div className="check-in">
//                 <div className="filter-item" style={{ borderLeft: '1px solid #b8b8b8' }}>
//                   <span className="span-spacing" style={{ marginLeft: '8px' }}>Check In</span>
//                   <input
//                       className="input"
//                       type="date"
//                       placeholder="dd/mm/yyyy"
//                       style={{ background: 'transparent' }}
//                   />
//                 </div>
//                 <div className="filter-item" style={{ borderLeft: '1px solid #b8b8b8' }}>
//                   <span className="span-spacing" style={{ marginLeft: '8px' }}>Check Out</span>
//                   <input
//                       className="input"
//                       type="date"
//                       style={{ background: 'transparent' }}
//                   />
//                 </div>
//               </div>
//               <div className="filter-item d-flex justify-content-center">
//                 <a onClick={handleButtonClick} className="search-button">
//                   <img src={require('../../assets/search-normal.png')} className="search-icon" alt="search" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="advance-filter-button">
//             <Popup
//                 shouldCloseOnOverlayClick={false}
//                 closeOnDocumentClick={false}
//                 trigger={
//                   <button style={{
//                     height: 48, width: '10%', border: 'none', borderRadius: 12,
//                     color: 'white', background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
//                   }}>
//                     Advance Filter
//                   </button>
//                 }
//                 modal
//                 contentStyle={{ height: '900px', overflow: 'auto' }}
//             >
//               {close => (
//                   <div>
//                     <HomePop closeModule={() => close()} callBackFun={(res)=>{props.GetResponceFun(res);close()}} />
//                   </div>
//               )}
//             </Popup>
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default Crousel;




import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import HomePop from "./HomePop";
import './crousel.css';
import { Link } from 'react-router-dom';
import CountryList from 'react-select-country-list';
import Select, { components } from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import { getCountries, getCities } from 'countries-cities';
import Flag from 'react-world-flags';
// import 'react-select/dist/react-select.css';
import {
  Box,
  
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
// import CloseIcon from '@mui
const Crousel = ({ CallBackFun }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [persons, setPersons] = useState('Add Person');
  const [selectedCountry2, setSelectedCountry2] = useState('');
  const [tropicalCountries, setTropicalCountries] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  // const [persons, setPersons] = useState(1); // Initialize with the default adult count
  useEffect(() => {
    // Fetch countries and set country options
    const countries = getCountries();
    const countryOptions = countries.map((country) => ({
      value: country,
      label: country,
      icon: <Flag code={country.toLowerCase()} style={{ width: 20, marginRight: 10 }} />
    }));
    setCountryOptions(countryOptions);
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    const cities = getCities(selectedOption.value);
    if (cities) {
      const cityOptions = cities.map((city) => ({
        value: city,
        label: city
        
      }));
      setCityOptions(cityOptions);
    } else {
      setCityOptions([]); // Reset city options if no cities found
    }
    setSelectedCity(''); // Reset city selection when country changes
  };


  useEffect(() => {
    const totalPersons = counts.adults + counts.children + counts.infants + counts.pets;
    setPersons(totalPersons);
  }, [counts]);

  const handleIncrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0,
    }));
  };


  useEffect(() => {
    const fetchTropicalCountries = async () => {
      try {
        // Fetch all countries data from REST Countries API
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // console.log("country",data)

        // Filter tropical countries based on criteria (e.g., countries in tropical regions)
        const filteredCountries = data.filter(country => {
          // Replace with your specific criteria for tropical countries
          // return country.region === 'Americas' || country.region === 'Asia' || country.subregion === 'Oceania';
        }).map(country => country.name.common); // Extract country names

        setTropicalCountries(filteredCountries);
      } catch (error) {
        console.error('Error fetching tropical countries:', error);
      }
    };

    fetchTropicalCountries();
  }, []);
  console.log("country222",tropicalCountries)

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

  // Cities mapping
  const caribbeanCities = {
    AG: ['Saint John\'s', 'All Saints', 'Liberta'],
    BS: ['Nassau', 'Freeport', 'West End'],
    BB: ['Bridgetown', 'Speightstown', 'Oistins'],
    CU: ['Havana', 'Santiago de Cuba', 'Camagüey'],
    DM: ['Roseau', 'Portsmouth', 'Marigot'],
    DO: ['Santo Domingo', 'Santiago de los Caballeros', 'La Romana'],
    GD: ['Saint George\'s', 'Gouyave', 'Grenville'],
    HT: ['Port-au-Prince', 'Cap-Haïtien', 'Les Cayes'],
    JM: ['Kingston', 'Montego Bay', 'Spanish Town'],
    KN: ['Basseterre', 'Charlestown', 'Dieppe Bay Town'],
    LC: ['Castries', 'Gros Islet', 'Vieux Fort'],
    VC: ['Kingstown', 'Barrouallie', 'Georgetown'],
    TT: ['Port of Spain', 'San Fernando', 'Chaguanas']
  };

  // Fetching all country options and filtering for Caribbean countries
  const allCountryOptions = CountryList().getData();
  // const countryOptions = allCountryOptions.filter(country => caribbeanCountries.includes(country.value));

  const customSingleValue = ({ data }) => (
      <div style={{ marginTop: '-25px' }}>
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

  // const handleCountryChange = (country) => {
  //   setSelectedCountry(country);
  //   setSelectedCity(''); // Reset city when country changes
  // };

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

  // const cityOptions = selectedCountry ? caribbeanCities[selectedCountry.value] : [];

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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="filter-container">
            <div className="filter-item">
        <span className="span-spacing">Warm Stay</span>
        <div className="select-container">
          <Select
            className="select-box-country"
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            getOptionLabel={(option) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {option.icon} {option.label}
              </div>
            )}
            getOptionValue={(option) => option.value}
          />
        </div>
      </div>
      <div className="filter-item">
        <span className="span-spacing">Select City</span>
        <Select
          className=""
          value={selectedCity}
          onChange={(selectedOption) => setSelectedCity(selectedOption)}
          options={cityOptions}
        />
      </div>
 {/* <div className="filter-item" style={{ borderLeft: '1px solid #E5E7Eb' }}>
                <span className="span-spacing">Tropical Countries</span>
                <select
                    className="select-box"
                    value={selectedCountry2}
                    onChange={(e) => setSelectedCountry2(e.target.value)}
                >
                  <option value="">Select</option>
                  {tropicalCountries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div> */}
              <div className="filter-item" >
                <span className="span-spacing">Select Property Type</span>
                <select
                    className="select-box"
                    value={selectedPropertyType}
                    onChange={(e) => setSelectedPropertyType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Localeaze">Localeaze</option>
                  <option value="Middleaze">Middleaze</option>
                  <option value="Higheaze">Higheaze</option>
                </select>
              </div>
              {/* favicon.ico */}
         
              <div className="check-in">
                <div className="filter-item2" >
                  <span className="span-spacing" style={{ marginLeft: '8px' }}>Check In</span><br/>
                  <input
                      className="input"
                      type="date"
                      placeholder="dd/mm/yyyy"
                      style={{marginLeft: '8px', }}
                  />
                </div>
                <div className="filter-item2" >
                  <span className="span-spacing" style={{ marginLeft: '8px' }}>Check Out</span><br/>
                  <input
                      className="input"
                      type="date"
                      style={{ background: 'white', marginLeft: '8px' }}
                  />
                </div>
                
              </div>
              <div className="guest-stay-container">
      <div
        className="filter-item"
        style={{ borderLeft: '1px solid #E5E7Eb', paddingBottom: -5 }}
        onClick={() => setShowBox(!showBox)}
      >
        <span className="span-spacing">Guest Stay</span> <br/>
        <input
          type="number"
          placeholder="Add Person"
          className="input-field2"
          value={persons}
          readOnly
          // style={{ height: 30, width: 120, padding: 10 }}
        />
      </div>
      {showBox && (
        <div className="guest-box">
          {['adults', 'children', 'infants', 'pets'].map((type, index) => (
            <div className="guest-row" key={index}>
              <span className="guest-label">
                {type.charAt(0).toUpperCase() + type.slice(1)}
                <span className="age-range">
                  {type === 'adults' && 'Ages 13 or above'}
                  {type === 'children' && 'Ages 2–12'}
                  {type === 'infants' && 'Under 2'}
                  {type === 'pets' && <a href="#"> Bringing a service animal?</a>}
                </span>
              </span>
              <div className="guest-counter">
                <button onClick={() => handleDecrement(type)}>-</button>
                <span>{counts[type]}</span>
                <button onClick={() => handleIncrement(type)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

              

              <div className="filter-itemss d-flex justify-content-center">
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