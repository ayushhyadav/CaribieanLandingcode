import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import BaseUrl from '../Server/BaseUrl';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {}
        };
    }

    componentDidMount() {
        // Fetch weather data for all properties
        this.props.props_data.forEach(property => {
            if (property.city) {
                this.fetchWeatherData(property.city);
            }
        });
    }

    fetchWeatherData(city) {
        const apiKey = '6e9aa4900f91d94baaad123dd7bc4fc2'; // Replace with your valid API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    this.setState(prevState => ({
                        weatherData: {
                            ...prevState.weatherData,
                            [city]: data
                        }
                    }));
                } else {
                    console.error('Error fetching weather data:', data.message);
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', padding: 15 }}>
                <div className="label-container">
                    <label className="near-you-label">Near You</label>
                </div>

                <div className="card-container">
                    {this.props.props_data
                        .filter(property => property.status !== 'cancel' && property.status !== 'pending') // Filter out canceled and pending properties
                        .map((property, index) => (
                            <div key={index} className="card">
                                <Link to={`/PropertyPage/${property?.property_id}`} state={{ propertyId: property?.property_id }}>
                                    <img
                                        style={{ height: 260, objectFit: 'cover' }}
                                        src={
                                            Array.isArray(property?.property_images) &&
                                            property?.property_images[0]?.filename &&
                                            `${BaseUrl.BaseUrl}/Images/${property?.property_images[0]?.filename}`
                                        }
                                        alt="Background"
                                    />
                                </Link>
                                <div className="card-details">
                                    <div className="card-title">
                                        <label className="title">{property?.property_name}</label>
                                        <label className="rating">{property?.rating}</label>
                                    </div>

                                    <div className="card-location">
                                        <label className="location">
                                            {property?.city}-{property?.property_type}
                                        </label>
                                        <label className="vendor">{property?.select_view}</label>
                                    </div>

                                    <div className="card-price">
                                        <div className="price">
                                            <label className="price-label">From </label>
                                            <label className="price-value"> $ {property?.price_per_night}</label>
                                            <label className="price-unit"> /Night</label>
                                        </div>
                                        <div className="weather-info">
                                            {this.state.weatherData[property.city] ? (
                                                <div>
                                                    <img
                                                        style={{ width: 50, height: 50 }}
                                                        src={`http://openweathermap.org/img/wn/${this.state.weatherData[property.city].weather[0].icon}.png`}
                                                        alt="Weather Icon"
                                                    />
                                                    <label style={{ fontSize: 13 }} className="temperature">
                                                        {Math.round(this.state.weatherData[property.city].main.temp)}°C
                                                    </label>
                                                </div>
                                            ) : (
                                                <label className="temperature">Loading...</label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}
