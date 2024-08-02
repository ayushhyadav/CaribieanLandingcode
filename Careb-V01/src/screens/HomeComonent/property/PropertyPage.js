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
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const propertyId = location.state ? location.state.propertyId : null;

  const [propertyData, setPropertyData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (propertyId) {
      fetch(BaseUrl.BaseUrl + `/get_propertys/` + propertyId)
        .then((response) => response.json())
        .then((data) => {
          setPropertyData(data.message[0]);
        })
        .catch((error) => {
          console.error('Error fetching property data:', error);
        });
    }
  }, [propertyId]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <HomeHeader />
      <Image propertyData={propertyData?.property} />
      <div className="main" style={{ display: 'flex', width: '90%', margin: '0 auto', marginTop: 25 }}>
        <UserDetails callBackFun={(value) => setSelectedValue(value)} propertyData={propertyData} />
        {window.innerWidth < 768 ? (
          <Popup
            open={isPopupOpen}
            onOpen={handleOpenPopup}
            onClose={handleClosePopup}
            modal
            nested
            contentStyle={{ minHeight: '100%', width: '100%',overflow: 'auto' }}
          >
            <div>
              <PropertyBooking propertyData={propertyData?.property} selectedValue={selectedValue} />
            </div>
          </Popup>
        ) : (
          <PropertyBooking propertyData={propertyData?.property} selectedValue={selectedValue} />
        )}
      </div>
      <Footer />
    </div>
  );
}
