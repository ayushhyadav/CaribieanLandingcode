import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScreensHeader from './Components/Deshbord/ScreensHeader';
import ActiveBookingList from "./Components/Deshbord/ActiveBookingList";
import HomeHeader from "./HomeComonent/HomeHeader";
import searchIcon from '../assets/searchIcon.png';
import CencelBookingList from "./Components/Deshbord/CencelBookingList";
export default function BookingHistory() {
  const { userid } = useParams();
  const [state, setState] = useState({
    activeBt: 'active_booking',
    apiData: { Histrory: [] },
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchData();
  }, [userid, state.activeBt]);

  const fetchData = async () => {
    const API_URL = `http://localhost:4000/${state.activeBt}/${userid}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState(prevState => ({
        ...prevState,
        apiData: data.message || [], // Adjust according to your API response structure
        loading: false,
      }));
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error: error.message,
        loading: false,
      }));
      alert(error.message);
    }
  };

  const handleBookingTypeChange = (bookingType) => {
    console.log('type',bookingType)
    setState(prevState => ({
      ...prevState,
      activeBt: bookingType,
    }));
  };

  const user_type = state.apiData.user_type;
// console.log('usertype',user_type)
  return (
    <div>
      {user_type === "Host" ? <ScreensHeader /> : <HomeHeader />}
      
      <div>
        <div className="main-wid" style={{ display: "flex", width: '90%', margin: '0 auto' }}>
          <div className="booking-iocn" style={{ width: '20%', borderRight: '2px solid #E2E8F0' }}>
            <label style={{ width: "100%", fontSize: 23, fontWeight: '600', color: '#0F172A', borderBottom: '1px solid #E2E8F0', padding: '30px 10px 12px 40px' }}>
              Bookings <img src={searchIcon} alt="" />
            </label>
            <br />
            <div className="all-book" style={{ flexDirection: 'column', display: 'flex', width: '100%' }}>
              <label style={{ fontSize: 14, fontWeight: '600', color: '#0F172A', padding: '19px 40px', borderBottom: '1px solid rgba(226, 232, 240, 1)', height: 60 }}>All Booking</label>
              <div className="active-book">
                <a onClick={() => handleBookingTypeChange('active_booking')} style={{ 
                  fontSize: 14, cursor: 'pointer', fontWeight: '600', border: 0, 
                  color: '#0F172A', borderLeft: state.activeBt === 'active_booking' ? '4px solid #F15A29' : 'white', 
                  paddingLeft: 10, height: 23, paddingTop: 3 
                }}>Active Bookings</a>
              </div>
              <a onClick={() => handleBookingTypeChange('cancel_booking')} style={{ 
                fontSize: 14, paddingLeft: 10, height: 23, cursor: 'pointer', fontWeight: '600', 
                border: 0, color: '#0F172A', borderLeft: state.activeBt === 'cancel_booking' ? '4px solid #F15A29' : 'white', 
                paddingTop: 3 
              }}>Canceled Bookings</a>
            </div>
          </div>
          <section className="container">
            <input type="checkbox" id="menuBtn" />
            <label className="menu__button" htmlFor="menuBtn"></label>
            <label className="menu__close" htmlFor="menuBtn"></label>

            <div className="menu">
              <div className="menu__container">
                <div className="booking-iocn mobile-nav" style={{ width: '20%', borderRight: '2px solid #E2E8F0' }}>
                  <label style={{ width: "100%", fontSize: 23, fontWeight: '600', color: '#0F172A', borderBottom: '1px solid #E2E8F0', padding: '30px 10px 12px 40px' }}>Bookings
                    <img src={searchIcon} alt="" />
                  </label>
                  <br />
                  <div className="all-book" style={{ flexDirection: 'column', display: 'flex', width: '100%' }}>
                    <label style={{ fontSize: 14, fontWeight: '600', color: '#0F172A', padding: '19px 40px', borderBottom: '1px solid rgba(226, 232, 240, 1)', height: 60 }}>All Booking</label>
                    <div className="active-book">
                      <a onClick={() => handleBookingTypeChange('active_booking')} style={{ 
                        fontSize: 14, cursor: 'pointer', fontWeight: '600', border: 0, 
                        color: '#0F172A', borderLeft: state.activeBt === 'active_booking' ? '4px solid #F15A29' : 'white', 
                        paddingLeft: 10, height: 23, paddingTop: 3 
                      }}>Active Bookings</a>
                    </div>
                    <a onClick={() => handleBookingTypeChange('cancel_booking')} style={{ 
                      fontSize: 14, paddingLeft: 10, height: 23, cursor: 'pointer', fontWeight: '600', 
                      border: 0, color: '#0F172A', borderLeft: state.activeBt === 'cancel_booking' ? '4px solid #F15A29' : 'white', 
                      paddingTop: 3 
                    }}>Canceled Bookings</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
          {/* Display ActiveBookingList or CencelBookingList based on activeBt */}
          {state.activeBt === 'active_booking' && (
            <ActiveBookingList/>
          )}
          {state.activeBt === 'cancel_booking' &&  (
            <CencelBookingList  />
          )}
          
        </div>
      </div>
    </div>
  );
}
