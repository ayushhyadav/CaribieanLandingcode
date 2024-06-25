import React, { Component } from 'react';
import Storage from '../../Server/Storage';
import './ListAddProperty.css';
const Data = [
    {
        title: 'Localeaze',
    },
    {
        title: 'Middleaze',
    },
    {
        title: 'Higheaze',
    },
];

const Listing = [
    {
        title: 'Uptown',
    },
    {
        title: 'Downtown',
    },
    {
        title: 'Mountains',
    },
    {
        title: 'Beach',
    },
    {
        title: 'River',
    },
    {
        title: 'Ecotourism',
    },
];
export default class ListAddProperty extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='list-box' style={{ width: '95%', padding: 20, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <div className="Diversify-btn" style={{ display: 'flex', justifyContent: 'space-between' }}> <label style={{ fontSize: 17, fontWeight: '500', marginLeft: 10 }}>Step 1/4</label>
                    <button class="someElement" href='Diversify property\Propertylist'
                        style={{ width: "15%" }}>Diversify Property
                        <img src={require('../../../assets/info (1).png')} />
                        <div class="wrapper">   
                            <div class="tooltip">Diversify property for long-stay bookings offers varied accommodations like serviced apartments, extended-stay hotels, and rental homes for 1-2 month or 6+ month stays, featuring amenities such as kitchens, laundry facilities, wifi, workspaces etc.,</div>
                        </div>
                    </button>
                </div>
                <h4 style={{ fontSize: 29, fontWeight: '700', marginLeft: 20 }}>List Your Property</h4>
                <label style={{ fontSize: 16, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
                    Please Complete these information for Listing Property
                </label>
                <div style={{ width: '90%', justifyContent: 'center', marginLeft: 20 }}>
                    <div className='list-input' style={{ display: 'flex', marginTop: 15, justifyContent: 'space-between' }}>
                        <div className='type-p' style={{ width: '50%', margin: '10px' }}>
                            <label style={{ color: '#474554', borderColor: '#E2E8F0' }}>Property Name</label><br />
                            <input
                                style={{
                                    width: 500,
                                    height: '44px',
                                    padding: '10px',
                                    borderWidth: '0.1px',
                                    marginTop: '5px',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '7px'
                                }}
                                type='text'
                                placeholder='Enter property Name'
                                value={this.state.property_name}
                                onChange={(e) => this.setState({ property_name: e.target.value })}
                            />
                        </div>
                        <div className="listing-box" style={{ width: '50%', margin: '10px' }}>
                            <label style={{ color: '#474554' }}>What kind of view are you listing</label><br />
                            <select
                                style={{
                                    width: 500,
                                    height: 45,
                                    borderWidth: 0.1,
                                    marginTop: 5,
                                    border: '1px solid #E2E8F0',
                                    borderRadius: 7,
                                    background: 'none',
                                    padding: 10
                                }}
                                value={this.state.view}
                                onChange={(e) => this.setState({ view: e.target.value })}
                            >
                                {Data?.map((Data) => (
                                    <option key={Data.title}>{Data.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='list-input' style={{ display: 'flex', justifyContent: 'space-between', marginTop: 25 }}>
                        <div className='type-p' style={{ width: '50%', margin: '10px' }}>
                            <label style={{ color: '#474554' }}>Property Type</label><br />
                            <select
                                style={{
                                    width: 500,
                                    height: 45,
                                    borderWidth: 0.1,
                                    marginTop: 5,
                                    border: '1px solid #E2E8F0',
                                    borderRadius: 7,
                                    background: 'none',
                                    padding: 10
                                }}
                                value={this.state.propertyType}
                                onChange={(e) => this.setState({ propertyType: e.target.value })}
                            >
                                {Listing?.map((Data) => (
                                    <option key={Data.title}>{Data.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className='type-p' style={{ width: '50%', margin: '10px' }}>
                            <label style={{ color: '#474554' }}>Price Per Night</label><br />
                            <input
                                style={{
                                    width: 500,
                                    height: '44px',
                                    padding: '10px',
                                    borderWidth: '0.1px',
                                    marginTop: '5px',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '7px'
                                }}
                                type={this.props.secureTextEntry ? 'password' : 'text'}
                                placeholder='$0'
                                value={this.state.pricePerNight}
                                onChange={(e) => this.setState({ pricePerNight: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='list-input-number' style={{ display: 'flex', justifyContent: 'space-between', marginTop: 25 }}>
                        <div className='input-fild' style={{ width: '33%', margin: '10px' }}>
                            <label style={{ color: '#474554', fontSize: 17 }}>How many guest you can accommodate</label><br />
                            <input
                                style={{
                                    width: '93%', height: 45, borderWidth: 0.1, marginTop: 5, border: '1px solid #E2E8F0',
                                    borderRadius: 7
                                }}
                                secureTextEntry={true}
                                placeholder=''
                                value={this.state.guestCapacity}
                                onChange={(e) => this.setState({ guestCapacity: e.target.value })}
                            />
                        </div>
                        <div className='input-fild' style={{ width: '33%', margin: '10px' }}>
                            <label style={{ color: '#474554', fontSize: 17 }}>How many bedroom guests can use</label><br />
                            <input
                                style={{
                                    width: '93%', height: 45, borderWidth: 0.1, marginTop: 5, border: '1px solid #E2E8F0',
                                    borderRadius: 7
                                }}
                                secureTextEntry={true}
                                placeholder=''
                                value={this.state.bedroomCount}
                                onChange={(e) => this.setState({ bedroomCount: e.target.value })}
                            />
                        </div>
                        <div className='input-fild' style={{ width: '33%', margin: '10px' }}>
                            <label style={{ color: '#474554', fontSize: 17 }}>How many bathroom guests can use</label><br />
                            <input
                                style={{
                                    width: '93%', height: 45, borderWidth: 0.1, marginTop: 5, border: '1px solid #E2E8F0',
                                    borderRadius: 7
                                }}
                                secureTextEntry={true}
                                placeholder=''
                                value={this.state.bathroomCount}
                                onChange={(e) => this.setState({ bathroomCount: e.target.value })}
                            />
                        </div>
                    </div>

                    <label style={{ marginTop: 15, color: '#474554' }}>Property Description</label><br />
                    <textarea
                        style={{ width: '92%', padding: 10, color: 'black', borderColor: '#E2E8F0', borderRadius: 10 }}
                        id="freeform"
                        name="freeform"
                        rows="4"
                        cols="50"
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                    >
                        Enter Your Property Description
                    </textarea>
                    <br />

                    <label style={{ marginTop: 15, color: '#474554' }}>Property Rules</label><br />
                    <textarea
                        style={{ width: '92%', padding: 10, color: 'black', borderColor: '#E2E8F0', borderRadius: 10 }}
                        id="freeform"
                        name="freeform"
                        rows="4"
                        cols="50"
                        value={this.state.rules}
                        onChange={(e) => this.setState({ rules: e.target.value })}
                    >
                        Enter Your Property Rules
                    </textarea>
                </div>

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
                            // this.handleSaveDataToLocalStorage();
                            this.props.NextCallBack({ navigationTo: 'property_Location', id: 6, bt_type: 'Next' });
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>


        )
    }
}
