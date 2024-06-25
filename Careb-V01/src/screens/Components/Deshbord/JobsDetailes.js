import React, { Component } from 'react';
import { Calendar } from 'react-multi-date-picker';
import "react-multi-date-picker/styles/colors/red.css"; // Optional for theming

export default class JobsDetailes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
            availabilityDates: []
        };
        this.onChange = this.onChange.bind(this);
        this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    handleAvailabilityChange(dates) {
        this.setState({ availabilityDates: dates });
    }

    render() {
        console.log('deshoboar', this.props.userData);
        return (
            <div style={{ marginTop: 20 }}>
                <div>
                    <label style={{ fontSize: 21, fontWeight: '600', marginLeft: 25 }}>Stats</label>
                    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div>
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
                        <div>
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
                        <div>
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
                        <div>
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
                </div>
            </div>
        );
    }
}
