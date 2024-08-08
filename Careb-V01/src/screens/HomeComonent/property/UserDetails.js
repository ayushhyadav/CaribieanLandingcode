import React, { Component } from 'react';
import Profile from './Profile';
import Calander from '../../Components/Deshbord/Calander';
import ReactCountryFlag from "react-country-flag";
import i18nIsoCountries from 'i18n-iso-countries';
import Popup from 'reactjs-popup';
import PropertyBooking from './PropertyBooking';
import 'reactjs-popup/dist/index.css';
import BaseUrl from '../../Server/BaseUrl';
import './userDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Editprofile from './Editprofile';

i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));

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

    handleProfileClose = () => {
        window.location.reload();
    }

    render() {
        const { propertyData } = this.props;
        console.log('produser',propertyData)
        const code = i18nIsoCountries.getAlpha2Code(propertyData?.country, 'en');

        return (
            <div className='top-peopety' style={{ width: '80%' }}>
                <div className='heading-propati' style={{ display: 'flex', justifyContent: "space-between", width: '93%' }}>
                    <div className='top-head' style={{ display: 'flex', padding: 10, margin: 1 }}>
                        <h1 style={{ fontSize: 34, fontWeight: 700 }}>{propertyData?.property?.property_name}</h1>
                        
                    </div>
                </div>
                <div style={{ textAlign: 'center', width: '27%', marginTop: 1, display: 'flex', padding: 10, alignItems: 'center' }}>
                    {code && code !== 'Country code not found' ? (
                        <ReactCountryFlag countryCode={code} svg style={{ width: 30, height: 30 }} />
                    ) : (
                        <div></div>
                    )}
                </div>
                <div style={{display:'flex' , justifyContent:'space-between'}}>
                <div className='loction-icon' style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 5 }}>
                    <img src={require('../../../assets/location-point.png')} alt="Location" />
                    <label style={{ marginLeft: 10 }}>{propertyData?.property?.city} ({propertyData?.property?.country})</label>
                   
                </div>
                <div className='view-bech' style={{marginRight:'10px', marginTop:'-50px' , fontSize:'13px'}}>
                        <img style={{width:'18px', height:'12px'}} src={require('../../../assets/Vector2.png')} alt="View" />
                        <label style={{ color: '#F15A29', marginLeft: 5 }}>{propertyData?.property?.property_type} View</label>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: 10, display: 'flex', padding: 10 }}>
                    <div className='item-icon'>
                        <img src={require('../../../assets/bx-group.png')} alt="Guest Count" />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.guest_count} People</label>
                    </div>
                    <div className='item-icon'>
                        <img style={{ marginLeft: 25 }} src={require('../../../assets/bed.png')} alt="Bedroom Count" />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.bedroom_count} Bedroom</label>
                    </div>
                    <div className='item-icon'>
                        <img style={{ marginLeft: 25 }} src={require('../../../assets/bathtub.png')} alt="Bathroom Count" />
                        <label style={{ marginLeft: 10 }}>{propertyData?.property?.bathroom_count} Bathroom </label>
                    </div>
                   
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', display: 'flex', flexDirection: 'row', textAlign: 'center', alignSelf: 'center', justifyContent: 'space-between', width: '90%', margin: '0 auto', padding: 10, marginTop: 30 }}>
                    <div style={{display:'flex'}}>
                    <Popup
                        shouldCloseOnOverlayClick={false}
                        trigger={
                            <div style={{ cursor: 'pointer' }}>
                                <img 
                                    style={{ width: 40, borderRadius: 100, height: 40 }} 
                                    src={`${BaseUrl.BaseUrl}/${propertyData?.profile_url}`} 
                                    alt="Profile"
                                />
                                
                                <label style={{ marginLeft: 10, color: '#000000', fontSize: 18, fontWeight: '500', cursor: 'pointer' }}>
                                    {propertyData?.first_name} {propertyData?.last_name}
                                </label>
                               
                            </div>
                        }
                        modal
                        closeOnDocumentClick={false}
                        contentStyle={{ minHeight: "100px", width: '100%', overflow: 'auto', background: 'transparent' }}
                    >
                        {(close) => (
                            <div style={{ height: 'auto', overflow: 'scroll' }}>
                                <Profile 
                                    imageUrl={`${BaseUrl.BaseUrl}/${propertyData?.profile_url}`}
                                    name={`${propertyData?.first_name} ${propertyData?.last_name}`}
                                    location={`${propertyData?.property?.country}`}
                                    cancellationPolicy={`${propertyData?.property?.cancellationPolicy}`}
                                    rating="4.91"
                                    reviews="318"
                                    languages="English"
                                    onClose={() => { 
                                        close(); 
                                        this.handleProfileClose(); 
                                    }} 
                                />
                            </div>
                            
                        )}
                        
                    </Popup>
                    <FontAwesomeIcon 
                            icon={faEdit} 
                            style={{ marginLeft: 10, cursor: 'pointer' }} 
                        
                        />
                        </div>
                    
                    <button className='messa'
                            style={{
                                width: '75px',
                                background: 'transparent',
                                color: 'black',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                // padding: ' 5px 20px 7px',
                                padding:'10px',
                              fontSize:'15px',
                                height: '35px',
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
                        {propertyData?.property?.property_description}
                    </p>
                </div>
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <label style={{ marginTop: 20, fontSize: 18, fontWeight: 600, marginTop: 30 }}>Extra Services</label>
                    <div style={{ display: 'flex', width: '80%', marginTop: 10 }}>
                        {propertyData?.property?.extra_service.map((Extra, index) => (
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
                            >
                                <li
                                    style={{
                                        background: this.state.Active_extra_service === Extra ? "red" : '#F3F4F6',
                                    
                                        padding:15,
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
                                    {Extra.item}
                                </li>
                            </ul>
                        ))}
                    </div>
                    <label style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>Amenities</label>
                    <div style={{ display: 'flex', width: '100%', marginTop: 10, flexWrap: 'wrap' }}>
                        {propertyData?.property?.amenties.map((Amenities, index) => (
                            <ul key={index} style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li style={{ background: '#F3F4F6', borderRadius: 5, textAlign: 'center', color: '#6B7280', fontSize: 13, padding: '10px 15px', marginBottom: 13, marginRight: 10 }}>{Amenities}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div style={{ marginTop: 20, width: '90%', margin: '0 auto' }}>
                    <label style={{ fontSize: 18, fontWeight: '500', marginTop: 30 }}>Feature</label>
                    <div style={{ display: 'flex', marginTop: 10, flexWrap: 'wrap' }}>
                        {Feature.map((Feature, index) => (
                            <ul key={index} style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ background: '#F3F4F6', borderRadius: 5, color: '#6B7280', fontSize: 14, padding: '10px 15px', marginRight: 10 }}>{Feature.item}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div style={{ width: '100%', margin: '0 auto' }}>
                    <h3 style={{ fontSize: 18, marginTop: 30 }}>Availability Calendar</h3>
                    <Calander callBack={(value) => { this.props.callBackFun(value) }} />
                    <Popup
                        shouldCloseOnOverlayClick={false}
                        trigger={
                            <div>
                                <button className='userbooking'>Book Property</button>
                            </div>
                        }
                        modal
                        closeOnDocumentClick={false}
                        contentStyle={{ minHeight: "100px", width: '100%', overflow: 'auto' }}
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
                </div>
                <div style={{ width: '90%', margin: '0 auto', padding: 20, justifyContent: 'center', marginBottom: 20, alignItems: 'center' }}>
                    <label style={{ textAlign: 'center' }}>No Comments yet......</label>
                </div>
            </div>
        );
    }
}

export default UserDetails;
