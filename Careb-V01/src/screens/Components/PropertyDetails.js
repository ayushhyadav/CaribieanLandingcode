import React, { Component } from 'react';
import Storage from '../Server/Storage';
import DeleteIcon from '@material-ui/icons/Delete'; // Material-UI delete icon
import IconButton from '@material-ui/core/IconButton'; // Material-UI icon button

export default class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      property_images: [require('../../assets/addsquare.png')],
    };
  }

  handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);

    // Updating state correctly
    this.setState((prevState) => ({
      property_images: [...prevState.property_images, ...selectedImages],
    }));
  };

  handleButtonClick = () => {
    this.fileInputRef.current.click();
  };

  handleDeleteImage = (index) => {
    const newImages = [...this.state.property_images];
    newImages.splice(index, 1);
    this.setState({ property_images: newImages });
  };

  handleSaveDataToLocalStorage = () => {
    // Save property images to localStorage
    let data = this.state.property_images.filter((val, index) => index !== 0);

    if (data.length < 3) {
      alert('Minimum 3 images are required.');
      return;
    }

    // Store as JSON string in localStorage
    localStorage.setItem('property_images', JSON.stringify(data));

    // Optionally, store in Storage object if needed
    Storage.propety_images = data;

    // Print the saved images to the console
    console.log('Property_Images:', this.state.property_images);

    // Proceed to next step
    this.props.NextCallBack({ navigationTo: 'Extra_Service', id: 8, bt_type: 'Next' });
  };

  render() {
    return (
      <div className="main-section" style={{ width: '70%', padding: 20 }}>
        <label style={{ marginLeft: 20 }}>Step 7/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Property Images</h4>
        
        <div style={{display:'flex',flexWrap:'wrap'}}>
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
            <div key={index} style={{ position: 'relative',width:200 }}>
              <button
                style={{
                  width: 180,
                  height: 140,
                  borderWidth: 0,
                  borderRadius: 11,
                  marginLeft: 10,
                  marginTop: 10,
                  background: '#F1F5F9',
                  position: 'relative',
                }}
                onClick={() => {
                  if (index !== 0) {
                    // Handle click on existing image
                  } else {
                    this.handleButtonClick();
                  }
                }}
              >
                {index !== 0 ? (
                  <img style={{ width: 90, height: 90 }} src={URL.createObjectURL(val)} alt="" />
                ) : (
                  <img style={{ width: 60, height: 60 }} src={require('../../assets/addsquare.png')} alt="" />
                )}
              </button>
              {index !== 0 && (
                <IconButton
                  aria-label="delete"
                  onClick={() => this.handleDeleteImage(index)}
                  style={{ position: 'absolute', top: 10, right: 15, color: '#F15A29',height:20,width:20,background:'none' }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', marginTop: 30, width: '92%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            className="back-btn"
            style={{
              width: '10%',
              borderRadius: 10,
              height: '45px',
              borderWidth: 0,
              background: 'white',
              color: 'black',
            }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'property_Images', id: 6, currentid: 7, bt_type: 'Back' })}
          >
            Back
          </button>
          <button
            className="next-btn"
            style={{
              color: 'white',
              background: '#F15A29',
              width: '10%',
              borderRadius: 10,
              height: '45px',
              marginLeft: 10,
            }}
            onClick={this.handleSaveDataToLocalStorage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
