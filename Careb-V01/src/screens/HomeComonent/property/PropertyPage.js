import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeHeader from '../HomeHeader';
import Image from './Image';
import UserDetails from './UserDetails';
import PropertyBooking from './PropertyBooking';
import BaseUrl from '../../Server/BaseUrl';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Footer from '../Footer/Footer';

export default function PropertyPage() {
  const location = useLocation();
  const [start_date, setStart_date]= useState('')
  const [end_date, setEnd_date] = useState('')
  const [selectedValue, setSelectedValue] = useState('');
  const propertyId = location.state ? location.state.propertyId : null;

  const [propertyData, setPropertyData] = useState(null);
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
      <HomeHeader />
      <Image propertyData={propertyData?.property} />
      <div className="main" style={{ display: 'flex', width: '90%', margin: '0 auto', marginTop: 25 }}>
        <UserDetails callBackFun={(value) => setSelectedValue(value)} propertyData={propertyData} />
        {window.innerWidth < 768 ? (
            <Popup 
            shouldCloseOnOverlayClick={false}
            closeOnDocumentClick={false}
            trigger={<button className='mo-popup'>Book Property</button>}
            modal
            nested
            contentStyle={{ minheight: "10000px",width:'90%' }}
          >
            {(close) => (
              <div style={{height:'1000px'}} >
                <PropertyBooking propertyData={propertyData?.property} selectedValue={selectedValue}  />
              </div>
            )}
          </Popup>
        ) : (
          <PropertyBooking propertyData={propertyData?.property} selectedValue={selectedValue}  />
        )}
      </div>

    <Footer/>
    </div>
  );
}
