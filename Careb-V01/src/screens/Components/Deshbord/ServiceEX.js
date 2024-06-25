import './ExtraService.css'

import React,{ Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import BaseUrl from '../Server/BaseUrl';
import Storage from '../Server/Storage';

const Amenities = [
  {
    id: 1,
    item: 'Wifi',
  },
  {
    id: 2,
    item: 'Washer',
  },
  {
    id: 3,
    item: 'Kitchen',
  },
  {
    id: 4,
    item: 'Dryer',
  },
  {
    id: 5,
    item: 'Air Conditioning',
  },
  {
    id: 6,
    item: 'Heating',
  },
  {
    id: 7,
    item: 'Dedicated Workspace',
  },
];

const User = [
  {
    id: 1,
    item2: 'Hair Dryer',
  },
  {
    id: 2,
    item2: 'Iron',
  },
  {
    id: 3,
    item2: 'TV',
  },
];

const Extra = [
  {
    id: 1,
    item: 'Rafting',
    description:"",
    number_of_guest:"",
    price:""

  },
  {
    id: 2,
    item: 'Exotic Food',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 3,
    item: 'Pick and Drop',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 4,
    item: 'BBQ',
    description:"",
    number_of_guest:"",
    price:""
  },
  {
    id: 5,
    item: 'Breakfast',
    description:"",
    number_of_guest:"",
    price:""
  },
];

export default class ExtraService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmenities: [],
      selectedUser: [],
      selectedExtra: [],
      selectedFile: null,
      // extra_service: '',
      rafting_number_of_guest: '',
      rafting_price: '',
      rafting_description: '',
      exotic_food_number_of_guest: '',
      exotic_food_price:'',
      exotic_food_description: '',
      custome_extra_service:"Enter...."
    };
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAmenityClick = (item) => {
    this.setState((prevState) => ({
      selectedAmenities: prevState.selectedAmenities.includes(item)
        ? prevState.selectedAmenities.filter((i) => i !== item)
        : [...prevState.selectedAmenities, item],
    }));
  };

  handleUserClick = (item) => {
    this.setState((prevState) => ({
      selectedUser: prevState.selectedUser.includes(item)
        ? prevState.selectedUser.filter((i) => i !== item)
        : [...prevState.selectedUser, item],
    }));
  };

  handleExtraClick = (item) => {
    let selectedExtra = [...this.state.selectedExtra]
    
    console.log('itemsss ',selectedExtra)
    
    if(selectedExtra.includes(item)){
       selectedExtra = selectedExtra.filter((data)=> data?.item !== item?.item)
    }
    else{
      selectedExtra.push(item)
    }
    this.setState({selectedExtra:selectedExtra})
    // this.setState((prevState) => ({
    //   selectedExtra: prevState.selectedExtra.includes(data)
    //     ? prevState.selectedExtra.filter((i) => i.item !== item)
    //     : [...prevState.selectedExtra, data],
    // }));
    // console.log('valueee ',this.state.selectedExtra)
  };

  handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    this.setState({ selectedFile });
  };

  renderExtraServiceFields() {
    return this.state.selectedExtra.map((extra) => {
      return (
        <div  key={extra.id} style={{ marginTop: 20 }}>
          <label style={{ fontSize: 20, fontWeight: '550' }}>{extra.item}</label>
          <div style={{ display: 'flex', width: '60%', marginTop: 10 }}>
            <div style={{ width: '45%', marginTop: 15 }}>
              <label style={{ color: '#474554', fontSize: 15 }}>Select Service for Number of Guests</label><br />
              <input
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 0.1,
                  marginTop: 5,
                  borderColor: '#E2E8F0',
                  borderRadius: 7,
                  padding: 10,
                }}
                type='number'
                name={`${extra.item}_number_of_guest`}
                value={this.state[`${extra.item}_number_of_guest`]}
                onChange={this.handleInputChange}
              />
            </div>
            <div style={{ width: '45%', marginTop: 15 }}>
              <label style={{ color: '#474554', fontSize: 15 }}>Price</label><br />
              <input
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 0.1,
                  marginTop: 5,
                  borderColor: '#E2E8F0',
                  borderRadius: 7,
                  padding: 10,
                }}
                type='number'
                name={`${extra.item}_price`}
                value={this.state[`${extra.item}_price`]}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <label style={{ marginTop: 15, color: '#474554', width: '60%' }}>Description</label><br />
          <textarea
            placeholder={`Enter ${extra.item} Description`}
            style={{
              width: '60%',
              padding: 5,
              color: 'black',
              height: 90,
              borderRadius: 10,
              borderColor: '#E2E8F0',
            }}
            id="freeform"
            name={`${extra.item}_description`}
            rows="4"
            cols="50"
            value={this.state[`${extra.item}_description`]}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
      );
    });
  }

  handleSaveData = () => {
    const { history } = this.props;
    let PropertysData = JSON.parse(localStorage.getItem('propertyData'))
     console.log('dataa checkkkk ',PropertysData)
     let PropertysList = JSON.parse(localStorage.getItem('propertyList'))
     console.log('dataa checkkkk ',PropertysList)

    const formData = new FormData();

    // Add the fields to the FormData
    formData.append('user_id', localStorage.user_id);
    formData.append('property_name', PropertysList.property_name);
    formData.append('select_view', PropertysList.view);
    formData.append('property_type', PropertysList.propertyType);
    formData.append('price_per_night', PropertysList.pricePerNight);
    formData.append('guest_count', PropertysList.guestCapacity);
    formData.append('bedroom_count', PropertysList.bedroomCount);
    formData.append('bathroom_count', PropertysList.bathroomCount);
    // formData.append('Property_image', localStorage.Property_image);
    formData.append('property_description', PropertysList.description);
    formData.append('property_rules', PropertysList.rules);
    formData.append('country', PropertysData.countryRegion);
    formData.append('state', PropertysData.state);
    formData.append('city', PropertysData.city);
    formData.append('street_address', PropertysData.streetAddress);
    Storage.propety_images.map((val,index)=> formData.append('property_images',Storage.propety_images[index]))

    formData.append('amenties', this.state.selectedAmenities);
    formData.append('extra_service', this.state.selectedExtra); 
    formData.append('rafting_number_of_guest',this.state.rafting_number_of_guest);
    formData.append('rafting_price', this.state.rafting_price); 
    formData.append('rafting_description', this.state.rafting_description); 
    formData.append('exotic_food_number_of_guest', this.state.exotic_food_number_of_guest); 
    formData.append('exotic_food_price', this.state.exotic_food_price); 
    formData.append('exotic_food_description', this.state.exotic_food_description); 
    formData.append('exotic_food_certifcate', this.state.selectedFile); 
    formData.append('rafting_certifcate', this.state.selectedFile); 

    // Make the POST request to your server
    fetch(BaseUrl.BaseUrl + '/property_add', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response ,,,,', data);
        if (data.error) {
          this.setState({ errorMessage: data.error });
          alert("Fill all the required fields " ,data.error)
          console.error('Failed to post data');
        } else {
          console.log('Data posted successfully');
          alert('"Welcome aboard! 🚀 Your registration is complete. Explore our platform and make the most of your journey with us!"')
          // Assuming data contains the user ID
          const storedUserId = localStorage.getItem('user_id');

          // Check if the user ID is available
          if (storedUserId) {
            // Navigate to the Dashboard with the stored user ID
            window.location.href = `/Dashboard/${storedUserId}`;
          } else {
            // Handle the case when user ID is not available in local storage
            console.error('User ID not found in local storage');
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  

    

  render() {
    return (
      <div className='main-section' style={{ width: '100%', padding: 20 }}>
        <label style={{ marginLeft: 20 }}>Step 8/8</label>
        <h4 style={{ fontSize: 35, fontWeight: '700', marginLeft: 20 }}>
          Choose Amenities and Extra Services
        </h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          Choose Amenities & Extra Service which you are providing
        </label>
        <div  className="Extra-Services" style={{ display: 'flex', width: '100%', marginTop: 10 }}>
          {Amenities.map((item) => (
            <ul className='service-ex'
              key={item.item}
              style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                width: '15%',
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <li
                style={{
                  background: this.state.selectedAmenities.includes(item.item) ? '#F15A29' : '#F3F4F6',
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  textAlign: 'center',
                  color: this.state.selectedAmenities.includes(item.item) ? 'white' : '#6B7280',
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => this.handleAmenityClick(item.item)}
              >
                {item.item}
              </li>
            </ul>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          {User.map((item) => (
            <ul className='service-ex' key={item.item2} style={{ listStyleType: 'none', width: '12%' }}>
              <li
                style={{
                  background: this.state.selectedUser.includes(item.item2) ? '#F15A29' : '#F3F4F6',
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  color: this.state.selectedUser.includes(item.item2) ? 'white' : '#6B7280',
                  fontSize: 16,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => this.handleUserClick(item.item2)}
              >
                {item.item2}
              </li>
            </ul>
          ))}
        </div>
        <div style={{ marginTop: 6, width: '100%', }}>
          <label style={{ fontSize: 20, fontWeight: '550' }}>Extra Service</label>
          <div className="Extra-Services" style={{ display: 'flex', width: '60%', marginTop: 10 }}>
            {Extra.map((item) => (
              <ul className='service-ex'
                key={item.item}
                style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <li
                  style={{
                    background: this.state.selectedExtra.includes(item) ? '#F15A29' : '#F3F4F6',
                    width: '80%',
                    height: 45,
                    borderRadius: 5,
                    textAlign: 'center',
                    color: this.state.selectedExtra.includes(item) ? 'white' : '#6B7280',
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => this.handleExtraClick(item)}
                >
                  {item.item}
                </li>
              </ul>
            ))}

<Popup
            shouldCloseOnOverlayClick={false}
            closeOnDocumentClick={false}
            trigger={
            <img style={{ width: 40, height: 40, marginLeft: 50, marginTop: 10 }} src={require('../../assets/plus.png')} alt="plus" />
          }
          modal
          contentStyle={{ height: '100px', overflow: 'auto' }}
        >
          {close => (
              <div>
                {/* <input closeModule={() => close()} /> */}
     
     <input onChange={(e)=>this.setState({custome_extra_service:e?.target?.value})} type='text' />
     <button onClick={()=>{
      if(this.state.custome_extra_service ==''){

      }
      else{
        Extra.push({
          id: Extra.length+1,
          item: this.state.custome_extra_service,
          description:"",
          number_of_guest:"",
          price:""
        })
        this.setState({custome_extra_service:""},()=>close())
      }
     }}  >submit</button>


              </div>
            )}
          </Popup>


          </div>
        </div>
        {this.renderExtraServiceFields()}
        <div style={{ padding: 20,justifyContent:'flex-end',marginTop:40 }}>
          <div style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end', }}>
            <button className='back-btn'
              style={{ width: '10%', borderRadius: 10, height: '45px', borderWidth: 0, background: 'white' ,color:'black'}}
              onClick={() => this.props.NextCallBack({ navigationTo: 'Extra_Service', id: 7, currentid: 8, bt_type: 'Back' })}
            >Back</button>
            <button
              onClick={this.handleSaveData}
              style={{ color: 'white', background: '#F15A29', borderRadius: 10, height: '45px', marginLeft: 10 ,width:'150px'}}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
}




















