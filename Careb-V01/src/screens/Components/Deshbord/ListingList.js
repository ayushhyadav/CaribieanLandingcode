import React, { Component } from "react";
import "./List.css";
import { Link } from "react-router-dom";

export default class ListingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    console.log("myy",this.props.props_data)
    return (
      <div className="container">
        <div className="header">
          <label className="title"> Listings </label>
         <Link to='/AddProperty' >
          <button className="add-property-button">Add New Property</button></Link>
        </div>
        <div className="grid-container">
          {this.props.props_data?.map((property, index) => (
            <div key={index} className="listing-card">
            <div className="image-container">
  <img
    style={{ width: '100%', height: '100%' }}
    src={
      property.property_images &&
      property.property_images[0]?.filename &&
      `http://localhost:4000/Images/${property.property_images[0]?.filename}`
    }
    alt="Background"
  />
  <button className="edit-button">Edit</button>
</div>
              <div className="card-content">
                <div className="card-row">
                  <label className="card-heading">{property?.property_name}</label>
                  <label className="card-rating">5.0</label>
                </div>
                <div className="card-row">
                  <label className="card-description">
                   {property.city} {property.country} -{property?.property_type} View
                  </label>
                  <label className="card-location">{property.select_view}</label>
                </div>
                <div className="card-price">
                  <div className="price">
                    <label className="price-label">From</label>
                    <label className="price-value">${property?.price_per_night}</label>
                    <label className="price-unit">/Night</label>
                  </div>
                  <label className="distance">2000 km Away</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
}


