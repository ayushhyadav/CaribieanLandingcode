import React, { Component } from 'react';
import Storage from '../Server/Storage'

export default class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      property_images: [ require('../../assets/addsquare.png')],
    };
  }

  handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    console.log('event.target.files[0].value ', URL.createObjectURL(event.target.files[0]));
    this.state.property_images.push( event.target.files[0] );
    this.setState({ property_images: this.state.property_images });
  };

  handleButtonClick = () => {
    this.fileInputRef.current.click();
  };

  handleSaveDataToLocalStorage = () => {
    // Save property images to localStorage
    let data = this.state.property_images.filter((val,index) => index != 0 )
    
    Storage.propety_images = data;
    console.log('showww meee ',Storage.propety_images)
    localStorage.setItem('property_images', data);

    // Print the saved images to the console
    console.log('Property_Images :', this.state.property_images);
  }

  render() {
    return (
      <div className='main-section' style={{ width: '70%', padding: 20 }}>
        <label style={{ marginLeft: 20 }}>Step 7/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Property Images</h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          
        </label>

        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            id="imageInput"
            onChange={this.handleImageChange}
            ref={this.fileInputRef}
          />
          {this.state.property_images.map((val, index) => (
            <button
              style={{
                width: 180,
                height: 140,
                borderWidth: 0,
                borderRadius: 11,
                marginLeft: 10,
                marginTop: 10,
                background: '#F1F5F9',
              }}
              onClick={() => {
                if (index !== 0) {
                } else {
                  this.handleButtonClick();
                }
              }}
            >
              {index !== 0 ? (
                <img style={{ width: 90, height: 90, background: 'none' }} src={URL.createObjectURL(val)} alt="" />
              ) : (
                <img style={{ width: 60, height: 60 }} src={require('../../assets/addsquare.png')} alt="" />
              )}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', marginTop: 30, width: '92%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button className='back-btn'
            style={{
              width: '10%',
              borderRadius: 10,
              height: '45px',
              borderWidth: 0,
              background: 'white',
              color:'black'
            }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'property_Images', id: 6, currentid: 7, bt_type: 'Back' })}
          >
            Back
          </button>
          <button className='next-btn'
            style={{
              color: 'white',
              background: '#F15A29',
              width: '10%',
              borderRadius: 10,
              height: '45px',
              marginLeft: 10,
            }}
            onClick={() => {
              this.handleSaveDataToLocalStorage();
              this.props.NextCallBack({ navigationTo: 'Extra_Service', id: 8, bt_type: 'Next' });
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}


