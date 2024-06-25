import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import BaseUrl from '../Server/BaseUrl';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    console.log('props dataaaa checkkkk ', this.props.props_data);

    return (
      <div style={{ width: '100%', height: '100%', padding: 15 }}>
        <div className="label-container">
          <label className="near-you-label">Near You</label>
        </div>

        <div className="card-container">
          {this.props.props_data.map((property, index) => (
            <div key={index} className="card">
              <Link to={`/PropertyPage/${property?.property_id}`} state={{ propertyId: property?.property_id }}>
                <img
                    style={{height:260,objectFit:'cover'}}
                  src={
                    property?.property_images &&
                    property?.property_images[0]?.filename &&
                    `http://localhost:4000/Images/${property?.property_images[0]?.filename}`
                  }
                  alt="Background"
                />
              </Link>
              {property?.property_images &&
                property?.property_images[0]?.filename &&
                console.log('Image URL:', property?.property_images[0]?.filename)}

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
                  <label className="distance">{property?.distance}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}