
import  './UserProfile.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BaseUrl from '../../Server/BaseUrl';
const UserProfile = () => {
  const { userid } = useParams(); 

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const rating = [1, 2, 3, 4, 5]; 
console.log(userid,'userid')
  useEffect(() => {
    fetch(BaseUrl.BaseUrl + `/user_profile/${userid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        console.log('User profile data:', data);
        setUserData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [userid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

    return (
      <div className='booking-box' style={{ width: '100%', display: 'flex', justifyContent: 'center',marginTop:'20px',height:"180px" ,}}>
        <div className='box-profile' style={{ width: '80%',display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
          <div className='user-pro' style={{ display: 'flex',width:'50%', alignItems: 'center', marginBottom: 20 ,}}>
            {/* <img className='img-pro' style={{ width: 120, height: 120,}} src={require('../../../assets/Ellipse 11 (1).png')} alt='' /> */}

            {userData?.profile_url && (
        <img
        className='img-pro'
          style={{ width: 120, height: 120 ,}}
          src={`http://localhost:4000/${userData?.profile_url}`}
          alt='Profile'
        />
      )}
            <div className='pro-icon' style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: 14, fontWeight: '700', color: '#0F172A' }}>{userData?.first_name}</label>
              {/*<label style={{ color: '#0f172a', fontSize: 23, fontWeight: '700' }}>{userData?.property_list[3]?.city} {userData?.property_list[3]?.country}John Doe</label>*/}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* {this.state.rating.map((val, index) =>
                  <img key={index} style={{ width: 19, height: 18 }} src={require('../../../assets/Vector(1).png')} alt='' />
                )} */}
                  {rating.map((val, index) =>
                <img key={index} style={{ width: 19, height: 18 }} src={require('../../../assets/Vector(1).png')} alt='' />
              )}
                <label style={{ color: '#64748B', fontSize: 17, fontWeight: '600' }}>(200)</label>
              </div>
            </div>
            <div className='btn-white' style={{ display: 'flex', justifyContent:'end',width:'28%' , marginBottom: 20 }}>
            <button style={{ height: 44,width:'75%', fontSize: 15, fontWeight: '600', color: '#0F172A', border: '1px solid', borderColor: '#0F172A', alignItems: 'center', justifyContent: 'center', borderRadius: 12}} className="me-2 btn btn-outline-dark" type="submit">View Location</button>
          </div>
          </div>
         
          <div className='btn-white' style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ marginBottom: 40, height: 45, borderRadius: 10, fontSize: 18, fontWeight: '600', backgroundColor: '#0F172A', color: 'white',paddingLeft: 20, paddingRight: 20 }} className="me-2 btn btn-outline-dark" type="submit">
              My Profile
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default UserProfile;
