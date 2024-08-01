import React, { Component } from 'react';
import { Calendar } from 'react-multi-date-picker';
import "react-multi-date-picker/styles/colors/red.css"; // Optional for theming
import './JobsDetailes.css';

export default class JobsDetailes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
            availabilityDates: []
        };
        this.onChange = this.onChange.bind(this);
        this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
        this.updateAvailabilityDates = this.updateAvailabilityDates.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    handleAvailabilityChange(dates) {
        this.setState({ availabilityDates: dates });
    }

    async updateAvailabilityDates() {
        const { availabilityDates } = this.state;
        const { user_id, property_id } = this.props.userData; // Assuming user_id and property_id are available in userData

        try {
            const response = await fetch(`http://localhost:4000/api/property/${property_id}/availability`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    availabilityDates: availabilityDates.map(date => date.toISOString().split('T')[0]) // Convert dates to string
                })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Availability dates updated successfully');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error updating availability dates:', error);
            alert('An error occurred while updating availability dates');
        }
    }

    render() {
        console.log('deshoboar', this.props.userData);
        return (
            <div style={{ marginTop: 20 }}>
                <div>
                    <label style={{ fontSize: 21, fontWeight: '600', marginLeft: 25 }}>Stats</label>
                    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
                        <div className='balance_1'>
                            <li style={{ fontSize: 20, fontWeight: '500', color: '#0F172A', marginTop: 10 }}>
                                Balance
                            </li>
                            <div style={{ display: 'flex' }}>
                                <li style={{
                                    fontSize: 28,
                                    fontWeight: '600',
                                    color: '#047857'
                                }}>${this.props.userData?.completed_job_amount}</li>
                            </div>
                        </div>
                    </ul>
                    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div className='balance_1'> 
                            <li style={{ fontSize: 20, fontWeight: '500', color: '#0F172A', marginTop: 10 }}>
                                Active Jobs
                            </li>
                            <div style={{ display: 'flex' }}>
                                <label style={{ fontSize: 16, }}>{this.props.userData?.activeJob} jobs</label>
                                <li style={{
                                    fontSize: 22,
                                    fontWeight: '500',
                                    color: '#047857'
                                }}> (${this.props.userData?.active_job_amount})
                                </li>
                            </div>
                        </div>
                    </ul>
                    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div className='balance_1'>
                            <li style={{ fontSize: 20, fontWeight: '500', color: '#0F172A', marginTop: 10 }}>
                                Earned this Month
                            </li>
                            <div style={{ display: 'flex' }}>
                                <li style={{
                                    fontSize: 22,
                                    fontWeight: '500',
                                    color: '#047857'
                                }}> (${this.props.userData?.current_month_earning})
                                </li>
                            </div>
                        </div>
                    </ul>
                    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div className='balance_1'>
                            <li style={{ fontSize: 20, fontWeight: '500', color: '#0F172A', marginTop: 10 }}>
                                Expected Earning
                            </li>
                            <div style={{ display: 'flex' }}>
                                <li style={{
                                    fontSize: 22,
                                    fontWeight: '500',
                                    color: '#047857'
                                }}> (${this.props.userData?.current_month_earning})
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="my-calendar" style={{ width: '99%', padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label style={{ fontSize: 19, fontWeight: '500', wordBreak: 'break-all' }}>My Availability Calendar</label>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Calendar
                            multiple
                            value={this.state.availabilityDates}
                            onChange={this.handleAvailabilityChange}
                            className="red" // Customizing color (optional)
                        />
                    </div>
                    <button onClick={this.updateAvailabilityDates} style={{ marginTop: 20 }}>Update Availability</button>
                </div>
            </div>
        );
    }
}
