import React, { Component } from 'react';
import BaseUrl from '../Server/BaseUrl';
import './ProfileUpload.css';

class ProfileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      user_id: localStorage.user_id
    };
  }

  handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log('file image  ', file);
    this.setState({ selectedImage: file });
  };

  sendImageToServer = () => {
    const { selectedImage, user_id } = this.state;
  
    if (!selectedImage) {
      alert("Please select a profile image.");
      return;
    }
  
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('profile_url', selectedImage);
  
    fetch(BaseUrl.BaseUrl + '/profile/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        if (data?.message) {
          console.log('Image uploaded successfully');
          this.props.NextCallBack({ navigationTo: 'Veri_Phone', id: 3, bt_type: 'Next' });
        } else {
          console.log('Image upload failed', data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  render() {
    const { selectedImage } = this.state;

    return (
      <div className='upload-pic' style={{ width: '75%', padding: 20 }}>
        <label>Step 2/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700' }}>Upload Profile Picture</h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A' }}></label>
        <div
          className='upload-box'
          style={{
            textAlign: 'center',
            height: '40%',
            borderWidth: 1,
            border: 'dotted',
            borderColor: '#E2E8F0',
            marginTop: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              borderWidth: 1,
              width: 70,
              alignSelf: 'center',
              height: 70,
              border: 'dotted',
              display: 'flex',
              borderColor: '#E2E8F0',
              padding: 3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              backgroundColor: '#F1F5F9',
            }}
          >
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt='' style={{ width: 50, height: 50 }} />
            ) : (
              <img src={require('../../assets/profile.png')} alt='' style={{ width: 50, height: 50 }} />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={this.handleFileUpload}
            id="fileInput"
          />
          <label
            className='upload-btn'
            htmlFor="fileInput"
            style={{
              height: 40,
              width: '20%',
              marginTop: 10,
              borderWidth: 0,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2E8F0',
              cursor: 'pointer',
            }}
          >
            Upload Photo
          </label>
        </div>
        <div style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            className='Back-btn'
            style={{
              width: '10%',
              borderRadius: 10,
              height: '45px',
              borderWidth: 0,
              background: 'white',
              color: 'black',
            }}
            onClick={() =>
              this.props.NextCallBack({ navigationTo: 'Per_info', id: 1, currentid: 2, bt_type: 'Back' })
            }
          >
            Back
          </button>
          <button
            className='next-btn'
            style={{
              color: 'white',
              background: '#F15A29',
              width: '15%',
              borderRadius: 10,
              height: '45px',
              marginLeft: 10,
              border: 'none',
            }}
            onClick={this.sendImageToServer}
            disabled={!selectedImage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileUpload;
