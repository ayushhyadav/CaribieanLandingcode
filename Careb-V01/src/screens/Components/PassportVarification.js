import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import BaseUrl from '../Server/BaseUrl';
import  './PassportVarification.css'

function PassportVerification(props) {
  const [value, setValue] = useState('');
  const [options] = useState(countryList().getData());
  const [selectedFile, setSelectedFile] = useState(null);
  const [identity_type, setIdentityType] = useState('');
  const user_id = localStorage.user_id;

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const idTypeChangeHandler = (e) => {
    setIdentityType(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('user id', user_id);
    const country = value;

    console.log('Country:', country);
    console.log('Identity Type:', identity_type);
    console.log('Selected File:', selectedFile);

    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('country', country);
    formData.append('identity_type', identity_type);
    formData.append('card_image', selectedFile);

    try {
      const response = await fetch(BaseUrl.BaseUrl + '/identity_verification', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      
        console.log('API response:', data);
          props.NextCallBack({ navigationTo: 'List_property', id: 5, bt_type: 'Next' })
 
      } else {
        console.error('API request failed:', response.status, response.statusText);
   
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className='Passport-ID' style={{ width: '100%', padding: 30, justifyContent: 'center' }}>
      <label style={{ marginLeft: 20 }}>Step 4/8</label>
      <h4 style={{ fontSize: 30, fontWeight: '700', marginLeft: 20, color: '#000000' }}>
        Passport/ID Verification
      </h4>
      <label className='id-pass'
        style={{
          fontSize: 16,
          fontWeight: '400',
          width: '70%',
          color: '#0F172A',
          marginLeft: 20,
          
        }}
      >
        Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
        cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
        by the camera's flash.
      </label>
      <div className='Country-opt' style={{ width: '80%', padding: 20 }}>
        <label style={{ color: '#474554' }}>Country</label>
        <br />
        <Select options={options} value={value} onChange={changeHandler} />
        <br />

        <input
          type="radio"
          id="passport"
          name="idType"
          value="passport"
          onChange={idTypeChangeHandler}
        />{' '}
        Passport <br />

        <input
          type="radio"
          id="nationalId"
          name="idType"
          value="nationalId"
          onChange={idTypeChangeHandler}
        />{' '}
        National ID <br />
      </div>
      <div style={{ width: '100%', height: '30%', padding: 20 }}>
   
        <label
          htmlFor="fileInput"
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 114,
            borderWidth: 0.1,
            marginTop: 5,
            borderColor: '#94A3B8',
            color: '#94A3B8',
            border: '1.5px dashed',
            borderRadius: 7,
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex' }}>
            <label style={{ fontSize: 16, fontWeight: '600', color: '#94A3B8' }}>Drag your files or Browse</label>
            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </div>
          <label style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>Add Both Side Image of Certificate</label>
        </label>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '1%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <button className='back-btn'
          style={{ width: '9%', border: 'none', background: 'white', color: 'black' }}
          onClick={() =>
            props.NextCallBack({ navigationTo: 'Veri_Phone', id: 3, currentid: 4, bt_type: 'Back' })
          }
        >
          Back
        </button>

        <button className='next-btn'
          style={{
            color: 'white',
            background: '#F15A29',
            width: '15%',
            borderRadius: 10,
            height: '45px',
            border: 'none'
          }}
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PassportVerification;


        
         