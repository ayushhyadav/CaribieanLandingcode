// import React, { Component } from 'react'
// import ClientProfile from '../../Components/ClientProfile'
// import Calander from '../../Components/Deshbord/Calander'
// import ReactCountryFlag from "react-country-flag";
// import i18nIsoCountries from 'i18n-iso-countries';
// import Popup from 'reactjs-popup';
// import PropertyBooking from './PropertyBooking';

// i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
// const Amenities = [
//   {
//     Item: 'Wifi'
//   },
//   {
//     Item: 'Washer'
//   },
//   {
//     Item: 'Kitchen'
//   },
//   {
//     Item: 'dryer'
//   },
//   {
//     Item: 'Air Conditioning'
//   },
//   {
//     Item: 'Heating'
//   },
//   {
//     Item: 'Dedicated Workspace'
//   },

// ]
// const user = [
//   {
//     Item2: 'Hair Dryer'
//   },
//   {
//     Item2: 'Iron'
//   },
//   {
//     Item2: 'TV'
//   },
// ]
// const Extra = [
//   {
//     item: 'Rafting'
//   }
//   ,
//   {
//     item: 'Exotic Food'
//   },
//   {
//     item: 'Pick and Drop'
//   },
//   {
//     item: 'BBQ'
//   },
//   {
//     item: 'Breakfast'
//   },

// ]
// const Feature = [
//   {
//     item: 'Pool'
//   },

//   {
//     item: 'Smoking allowed'
//   },
//   {
//     item: 'Indoor fireplace'
//   },


// ]


// export default class UserDetails extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       rating: [1, 2, 3, 4, 5],
//       flagError: false,
//       countryFlagURL: null,
//       countryCode: '',
//       showAdditionalMessage: false,
//       selectedExtraIndex: null,
//       Active_extra_service: '',
//       extra_service_description: '',
//       start_date: '',
//       end_date: ''
//     };

//     i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
//   }

//   handleFlagError = () => {

//     this.setState({ flagError: true });
//   }

//   handleShowAdditionalMessage = (index) => {
//     this.setState((prevState) => ({
//       showAdditionalMessage: !prevState.showAdditionalMessage,
//       selectedExtraIndex: index,
//     }));
//   };

//   render() {
//     const { propertyData } = this.props;

//     const code = i18nIsoCountries.getAlpha2Code(propertyData?.country, 'en');

//     return (
//       <div style={{ width: '80%' }}>
//         <div style={{ display: 'flex', justifyContent: "space-between", width: '93%' }}>
//           <div style={{ display: 'flex', padding: 10, margin: 1 }}>
//             <h1 style={{ fontSize: 34, fontWeight: 700 }}>{propertyData?.property_name}</h1>
//             <div style={{ display: 'flex', alignItems: 'center', padding: 10, marginLeft: 20, marginTop: 18 }}>
//               {this.state.rating.map((val, index) =>
//                 <img key={index} style={{ width: 16, height: 16 }} src={require('../../../assets/Vector(1).png')} alt='' />
//               )}
//               <label style={{ marginLeft: 5 }}>122 (5.0)</label>
//             </div>


//           </div>
//           <div style={{ marginTop: 43 }}>
//             <img src={require('../../../assets/Vector2.png')} />
//             <label style={{ color: '#F15A29', marginLeft: 5 }}>{propertyData?.property_type} View</label>
//           </div>
//         </div>
//         <div style={{ textAlign: 'center', width: '27%', marginTop: 1, display: 'flex', padding: 10, aligItems: 'center' }}>
//           {/* <img style={{ width: 30, height: 30 }} src={this.state.countryFlag} /> */}
//           {code && code !== 'Country code not found' ? (
//             <ReactCountryFlag countryCode={code} svg style={{ width: 30, height: 30 }} />
//           ) : (
//             <div></div>
//           )}
//           {/* <ReactCountryFlag countryCode={countryName} svg style={{ width: 30, height: 30 }} /> */}
//           <label style={{ marginLeft: 10 }}>{propertyData?.country}</label>
//         </div>
//         <div style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 10 }}>
//           <img src={require('../../../assets/location-point.png')} />
//           <label style={{ marginLeft: 10 }}>{propertyData?.street_address}</label>
//         </div>
//         <div style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 10 }}>
//           <img src={require('../../../assets/bx-group.png')} />
//           <label style={{ marginLeft: 10 }}>{propertyData?.guest_count} People</label>


//           <img style={{ marginLeft: 25 }} src={require('../../../assets/bed.png')} />
//           <label style={{ marginLeft: 10 }}>{propertyData?.bedroom_count} bedroom</label>

//           <img style={{ marginLeft: 25 }} src={require('../../../assets/bathtub.png')} />
//           <label style={{ marginLeft: 10 }}>{propertyData?.bathroom_count} Bathroom </label>
//         </div>
//         <div style={{ borderBottom: '1px solid #E5E7EB', display: 'flex', flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '90%', margin: '0 auto', padding: 10, marginTop: 30 }}>
//           <div>
//             <img style={{ width: 38 }} src={require('../../../assets/Ellipse 11 (1).png')} />
//             <label style={{ marginLeft: 10, color: '#000000', fontSize: 18, fontWeight: '500' }}> John Doe</label>
//           </div>
//           <button className='messa'
//             style={{
//               // backgroundClip: 'text',
//               // WebkitBackgroundClip: 'text',
//               // color: 'transparent',
//               // backgroundImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
//               // border: '2px solid',
//               // borderImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%) 1',
//               // width:120,height:45,
//               // borderRadius:5
//               width: 'auto',
//               background: 'transparent',
//               color: 'black',
//               padding: ' 5px 20px 7px',
//               height: 'auto',
//               border: '2px solid',
//               borderImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%) 1',
//             }}
//           >
//             Message
//           </button>


//         </div>
//         <div style={{ marginTop: 20, width: '90%', margin: '0 auto' }}>
//           <h2 style={{ marginTop: 10, fontSize: 18, fontWeight: 600 }}>Description</h2>
//           <p style={{ marginTop: 20, color: '#6B7280', fontSize: 18 }}>

//             {propertyData?.property_description}
//           </p>
//         </div>
//         <div style={{ width: '90%', margin: '0 auto' }}>
//           <label style={{ fontSize: 20, fontSize: 18, fontWeight: 600, marginTop: 30 }}>Extra Services</label>

//           {/* <div style={{ display: 'flex', width: '80%', marginTop: 10 }}>
//             {propertyData?.extra_service.split(',').map((Extra, index) => (
//               <ul
//                 key={index}
//                 style={{
//                   listStyleType: 'none',
//                   padding: 0,
//                   margin: 0,
//                   width: '23%',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => this.setState({ Active_extra_service: Extra }, () => this.handleShowAdditionalMessage(index), console.log('show meeee ', propertyData?.exotic_food_description))}
//               >
//                 <li
//                   style={{
//                     background: this.state.Active_extra_service == Extra ? "red" : '#F3F4F6',
//                     width: '80%',
//                     height: 40,
//                     borderRadius: 5,
//                     textAlign: 'center',
//                     color: '#6B7280',
//                     fontSize: 13,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {Extra}
//                 </li>
//               </ul>
//             ))}
//           </div> */}

//           {/* Additional message */}
//           {this.state.Active_extra_service ? <div>
//             {this.state.Active_extra_service == 'Rafting' ? propertyData?.exotic_food_description : this.state.Active_extra_service == 'Exotic Food' ? propertyData?.rafting_description : null}
//           </div> : null}
//           {/* {this.state.showAdditionalMessage && (
//           <div style={{ marginTop: 10 }}>
//             {/* Display additional information based on the clicked item */}
//           {/* {this.state.selectedExtraIndex !== null && (
//               <div>
//                 <label>
//                   {propertyData.extra_titles
//                     ? propertyData.extra_titles[
//                         this.state.selectedExtraIndex
//                       ]
//                     : 'Default Title'}
//                 </label>
//                 <span>
//                   {propertyData.extra_values
//                     ? propertyData.extra_values[
//                         this.state.selectedExtraIndex
//                       ]
//                     : 'Default Value'}
//                 </span>
//               </div>
//             )}
//           </div>
//         )} */}


//           {/* <label style={{ marginTop: 20, fontSize: 18, fontWeight: 600, marginTop: 30 }}>Amenities</label>
//           <div style={{ display: 'flex', width: '100%', marginTop: 10, flexWrap: 'wrap' }}>
//             {propertyData?.amenties.split(',').map((Amenities) => (
//               <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>

//                 <li style={{ background: '#F3F4F6', borderRadius: 5, textAlign: 'center', color: '#6B7280', fontSize: 13, padding: '10px 15px', marginBottom: 13, marginRight: 10 }}>{Amenities}</li>

//               </ul>
//             ))}
//           </div> */}

//         </div>
//         <div style={{ marginTop: 20, width: '90%', margin: '0 auto' }}>
//           <label style={{ fontSize: 18, fontWeight: '500', marginTop: 30 }}>Feature</label>
//           <div style={{ display: 'flex', marginTop: 10, }}>
//             {Feature.map((Feature) => (
//               <ul style={{ listStyleType: 'none', padding: 0 }}>

//                 <li style={{ background: '#F3F4F6',borderRadius: 5, color: '#6B7280', fontSize: 14, padding: '10px 15px', marginRight: 10 }}>{Feature.item}</li>
//               </ul>
//             ))}
//           </div>
//         </div>
//         <div style={{ width: '90%', margin: '0 auto' }}>
//           <h3 style={{fontSize: 18, marginTop: 30}}>Availablity Calender</h3>
//           <Calander callBack={(value) => { this.props.callBackFun(value) }} />

//           {/* <button className='bookingoder'>Book Property</button> */}
//           <Popup
//             shouldCloseOnOverlayClick={false}
//             closeOnDocumentClick={false}
//             trigger={<button>Book Property</button>}
//             modal
//             nested
//             contentStyle={{ minheight: "10000px",width:'90%' }}
//           >
//             {(close) => (
//               <div style={{height:'1000px'}} >
//                 <PropertyBooking propertyData={propertyData}  />
//               </div>
//             )}
//           </Popup>

//         </div>
//         <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
//           <label style={{ marginTop: 20 }}>Review</label>
//           <label style={{ marginTop: 20 }}>Recent^</label>
//         </div>
//         <div style={{ width: '90%', margin: '0 auto', padding: 20 }}>
//           <ClientProfile />
//         </div>
//       </div>

//     )
//   }
// }

import React, { Component } from 'react';
import ClientProfile from '../../Components/ClientProfile';
import Calander from '../../Components/Deshbord/Calander';
import ReactCountryFlag from "react-country-flag";
import i18nIsoCountries from 'i18n-iso-countries';
import Popup from 'reactjs-popup';
import PropertyBooking from './PropertyBooking';
import 'reactjs-popup/dist/index.css';
import BaseUrl from '../../Server/BaseUrl'
import './userDetails.css'
i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const Amenities = [
    { Item: 'Wifi' },
    { Item: 'Washer' },
    { Item: 'Kitchen' },
    { Item: 'dryer' },
    { Item: 'Air Conditioning' },
    { Item: 'Heating' },
    { Item: 'Dedicated Workspace' },
];

const user = [
    { Item2: 'Hair Dryer' },
    { Item2: 'Iron' },
    { Item2: 'TV' },
];

const Extra = [
    { item: 'Rafting' },
    { item: 'Exotic Food' },
    { item: 'Pick and Drop' },
    { item: 'BBQ' },
    { item: 'Breakfast' },
];

const Feature = [
    { item: 'Pool' },
    { item: 'Smoking allowed' },
    { item: 'Indoor fireplace' },
];

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: [1, 2, 3, 4, 5],
            flagError: false,
            countryFlagURL: null,
            countryCode: '',
            showAdditionalMessage: false,
            selectedExtraIndex: null,
            Active_extra_service: '',
            extra_service_description: '',
            start_date: '',
            end_date: '',
        };

        i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    }

    handleFlagError = () => {
        this.setState({ flagError: true });
    }

    handleShowAdditionalMessage = (index) => {
        this.setState((prevState) => ({
            showAdditionalMessage: !prevState.showAdditionalMessage,
            selectedExtraIndex: index,
        }));
    };

    formatDate = (date) => {
        return date ? new Date(date).toLocaleDateString() : '';
    }

    render() {
        const { propertyData } = this.props;
        const code = i18nIsoCountries.getAlpha2Code(propertyData?.country, 'en');

        return (
            <div className='top-peopety' style={{ width: '80%' }}>
                <div className='heading-propati' style={{ display: 'flex', justifyContent: "space-between", width: '93%' }}>
                    <div className='top-head' style={{ display: 'flex', padding: 10, margin: 1 }}>
                        <h1 style={{ fontSize: 34, fontWeight: 700 }}>{propertyData?.property?.property_name}</h1>
                        {/*<div className='star-icon' style={{ display: 'flex', alignItems: 'center', padding: 10, marginLeft: 20, marginTop: 18 }}>*/}
                        {/*  {this.state.rating.map((val, index) =>*/}
                        {/*    <img key={index} style={{ width: 16, height: 16 }} src={require('../../../assets/Vector(1).png')} alt='' />*/}
                        {/*  )}*/}
                        {/*  <label style={{ marginLeft: 5 }}>122 (5.0)</label>*/}
                        {/*</div>*/}
                    </div>
                    <div className='view-bech' style={{ marginTop: 43 }}>
                        <img src={require('../../../assets/Vector2.png')} />
                        <label style={{ color: '#F15A29', marginLeft: 5 }}>{propertyData?.property?.property_type} View</label>
                    </div>
                </div>
                <div style={{ textAlign: 'center', width: '27%', marginTop: 1, display: 'flex', padding: 10, alignItems: 'center' }}>
                    {code && code !== 'Country code not found' ? (
                        <ReactCountryFlag countryCode={code} svg style={{ width: 30, height: 30 }} />
                    ) : (
                        <div></div>
                    )}
                    <label style={{ marginLeft: 10 }}>{propertyData?.property?.country}</label>
                </div>
                <div className='loction-icon' style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 10 }}>
                    <img src={require('../../../assets/location-point.png')} />
                    <label style={{ marginLeft: 10 }}>{propertyData?.property?.street_address}</label>
                </div>
                <div style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 10 }}>
                    <div className='item-icon'>
                        <img src={require('../../../assets/bx-group.png')} />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.guest_count} People</label>
                    </div>
                    <div className='item-icon'>
                        <img style={{ marginLeft: 25 }} src={require('../../../assets/bed.png')} />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.bedroom_count} Bedroom</label>
                    </div>
                    <div className='item-icon'>
                        <img style={{ marginLeft: 25 }} src={require('../../../assets/bathtub.png')} />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.bathroom_count} Bathroom </label>
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', display: 'flex', flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '90%', margin: '0 auto', padding: 10, marginTop: 30 }}>
                    <div>
                        <img style={{ width: 40,borderRadius:100,height:40 }}
                             src={`${BaseUrl.BaseUrl}/${propertyData?.profile_url}`}/>
                        <label style={{ marginLeft: 10, color: '#000000', fontSize: 18, fontWeight: '500' }}> {propertyData?.first_name} {propertyData?.last_name}</label>
                    </div>
                    <button className='messa'
                            style={{
                                width: 'auto',
                                background: 'transparent',
                                color: 'black',
                                padding: ' 5px 20px 7px',
                                height: 'auto',
                                border: '2px solid',
                                borderImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%) 1',
                            }}
                    >
                        Message
                    </button>
                </div>
                <div style={{ marginTop: 20, width: '90%', margin: '0 auto' }}>
                    <h2 style={{ marginTop: 10, fontSize: 18, fontWeight: 600 }}>Description</h2>
                    <p style={{ marginTop: 20, color: '#6B7280', fontSize: 18 }}>
                        {propertyData?.property_description}
                    </p>
                </div>
                <div style={{ width: '90%', margin: '0 auto' }}>
                    {/* <label style={{ fontSize: 20, fontSize: 18, fontWeight: 600, marginTop: 30 }}>Extra Services</ */}
                    <label style={{ marginTop: 20, fontSize: 18, fontWeight: 600, marginTop: 30 }}>Extra Services</label>
                    {/* <div style={{ display: 'flex', width: '80%', marginTop: 10 }}>
  {propertyData?.extra_service && propertyData?.extra_service.split(',').map((Extra, index) => (
    <ul
      key={index}
      style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: '23%',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={() => this.setState({ Active_extra_service: Extra }, () => this.handleShowAdditionalMessage(index))}
    >
      <li
        style={{
          background: this.state.Active_extra_service === Extra ? "red" : '#F3F4F6',
          width: '80%',
          height: 40,
          borderRadius: 5,
          textAlign: 'center',
          color: '#6B7280',
          fontSize: 13,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Extra}
      </li>
    </ul>
  ))}
</div> */}

                    {this.state.Active_extra_service && (
                        <div>
                            {this.state.Active_extra_service === 'Rafting' ? propertyData?.rafting_description : this.state.Active_extra_service === 'Exotic Food' ? propertyData?.exotic_food_description : null}
                        </div>
                    )}
                    <label style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>Amenities</label>
                    <div style={{ display: 'flex', width: '100%', marginTop: 10, flexWrap: 'wrap' }}>
                        {propertyData?.amenties && propertyData?.amenties.split(',').map((Amenities, index) => (
                            <ul key={index} style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li style={{ background: '#F3F4F6', borderRadius: 5, textAlign: 'center', color: '#6B7280', fontSize: 13, padding: '10px 15px', marginBottom: 13, marginRight: 10 }}>{Amenities}</li>
                            </ul>
                        ))}

                    </div>
                </div>
                <div style={{ marginTop: 20, width: '90%', margin: '0 auto' }}>
                    <label style={{ fontSize: 18, fontWeight: '500', marginTop: 30 }}>Feature</label>
                    <div style={{ display: 'flex', marginTop: 10 , flexWrap: 'wrap'}}>
                        {Feature.map((Feature, index) => (
                            <ul key={index} style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ background: '#F3F4F6', borderRadius: 5, color: '#6B7280', fontSize: 14, padding: '10px 15px', marginRight: 10 }}>{Feature.item}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <h3 style={{ fontSize: 18, marginTop: 30 }}>Availability Calendar</h3>
                    <Calander callBack={(value) => { this.props.callBackFun(value) }} />
                    <Popup
    trigger={
        <div>
            <button className='userbooking'>Book Property</button>
        </div>
    }
    modal
    closeOnDocumentClick={false}
    contentStyle={{ minHeight: "100px", width: '90%', overflow: 'scroll' }}
>
    {(close) => (
        <div style={{ height: 'auto', overflow: 'scroll' }}>
            <PropertyBooking propertyData={propertyData?.property} onClose={close} />
        </div>
    )}
</Popup>


                </div>
                <div className='booking-date' style={{ width: '90%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
                    <label style={{ marginTop: 20 }}>Reviews</label>
                    {/*<label style={{ marginTop: 20 }}>Recent</label>*/}
                </div>
                <div style={{ width: '90%', margin: '0 auto', padding: 20 ,justifycontent:'center',marginBottom:20,alignitem:'center'}}>
                    <label style={{textalign:'center'}}>   No Comments yet......</label>
                    {/*<ClientProfile />*/}
                </div>
            </div>
        );
    }
}

export default UserDetails;
