import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SceensHeader from './ScreensHeader';
import JobsDetailes from './JobsDetailes';
import Booking from './Booking';
import UserProfile from './UserProfile';
import BaseUrl from '../../Server/BaseUrl';
import HomeHeader from '../../HomeComonent/HomeHeader'
import './Deshbord.css'
const Deshbord = () => {
  // const { userId } = useParams();
  const { userid } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log('userid',userid)
  useEffect(() => {
    fetch(BaseUrl.BaseUrl + `/owner/deshboard/${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.message);
        setLoading(false);
        console.log('api data',data)
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
        console.error(err);
      });
  }, [userid]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
     <HomeHeader/>
      <UserProfile />

      <div style={{ margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="details">
      <div className="jobdetails">
            <JobsDetailes userData={userData} />
          </div>
          <div className="userdata">
            <Booking userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshbord;