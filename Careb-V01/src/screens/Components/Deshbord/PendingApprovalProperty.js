import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HomeHeader from '../../HomeComonent/HomeHeader';
import Image from '../../HomeComonent/property/Image';
import UserDetails from '../../HomeComonent/property/UserDetails';

import BaseUrl from '../../Server/BaseUrl';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PendingApprovalProperty() {
  const location = useLocation();
  const [start_date, setStart_date]= useState('')
  const [end_date, setEnd_date] = useState('')
  const [selectedValue, setSelectedValue] = useState('');

const [userdata,setUserData]=useState('');
const [error,setError]=useState('');

  const [propertyData, setPropertyData] = useState(null);
    const { userid } = useParams();
    useEffect(() => {
        fetch(BaseUrl.BaseUrl + `/user_profile/${userid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(data => {
                console.log('User profile data:', data?.property_list[0]?.property_id);
                setUserData(data?.property_list[0]?.property_id);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [userid]);
    const propertyId = userdata

    useEffect(() => {
    if (propertyId) {
      fetch(BaseUrl.BaseUrl + `/get_propertys/` + propertyId)
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          setPropertyData(data.message[0]);
        })
        .catch((error) => {
          console.error('Error fetching property data:', error);
        });
    }
  }, [propertyId]);

  return (
      <div>

          <div style={{width:"100%",background:'yellow',}} >
              <marquee style={{fontSize:30}} >Pending For Approval</marquee>
          </div>
         <div style={{position: 'absolute',width:'100%'}}> <HomeHeader/>

             <Image propertyData={propertyData?.property}/>
             <div className="main" style={{display: 'flex', width: '90%', margin: '0 auto', marginTop: 25}}>
                 <UserDetails callBackFun={(value) => setSelectedValue(value)} propertyData={propertyData}/>
             </div></div>
      </div>
  );
}
