import React, { Component } from 'react';

const Images = [
  {
    img: require('../../../assets/Rectangle 21.png'),
  },
  {
    img: require('../../../assets/Rectangle 23.png'),
  },
  {
    img: require('../../../assets/Rectangle 24.png'),
  },
];

export default class Image extends Component {
  render() {
    const { propertyData } = this.props;
    console.log('cheeeeeeeeeeeek2222222222222222', propertyData?.property_images);

    // Check if propertyData or propertyData.property_images is undefined
    if (!propertyData || !Array.isArray(propertyData?.property_images) || propertyData?.property_images?.length === 0) {
      return <div>No property images available.</div>;
    }

    return (
      <div style={{ width: '100%' }}>
        <div className='property-slide' style={{ width: '100%', display: "flex", overflow: "scroll" }}>
          {propertyData?.property_images?.map((propertyImage, index) => (
            <img
              key={index}
              style={{
                width: '31.7%',
                height: 300,
                float: 'left',
                flex: '0 0 auto',
                margin: '0 30px 0 0',
              }}
              src={`http://localhost:4000/Images/${propertyImage?.filename}`}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }
}
