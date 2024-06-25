import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import './List.css';

const CencelBookingList = () => {
  const [cancellationReason, setCancellationReason] = useState('');
  const { userid } = useParams();
  const [state, setState] = useState({
    activeBt: '',
    apiData: [], // Initialize as an empty array
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchData();
  }, [userid, state.activeBt]);

  const fetchData = async () => {
    const API_URL = `http://localhost:4000/cancel_booking/${userid}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState(prevState => ({
        ...prevState,
        apiData: data.message|| [], // Ensure apiData is an array
        loading: false,
      }));
      console.log('data1111', data);
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error: error.message,
        loading: false,
      }));
      alert(error.message);
    }
  };

  const handleCancelBooking = async (user_id, booking_id, closePopup) => {
    console.log('booking', booking_id);

    try {
      const response = await fetch('http://localhost:4000/booking_cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          booking_id: booking_id,
          explain_reason: cancellationReason,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error(data.error || 'An error occurred');
        alert(data.error);
      } else {
        console.log(data.message);
        alert(data.message);
        closePopup();
      }
    } catch (error) {
      console.error('An error occurred while processing the request', error);
    }
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div className='topMain' style={{ width: '80%' }}>
      <div className="epmt" style={{ height: 77 }}>
        <img src={require('../../../assets/mobile-bargar.png')} alt="" />
      </div>
      {state.apiData.length === 0 ? (
        <p style={{ width: '100%', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>No bookings available</p>
      ) : (
        <div className="table-Page">
          <table className="table-full" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', paddingLeft: 20 }}>SERVICE</label></th>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', padding: '20px 20px' }}></label></th>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', paddingLeft: 5 }}>Date & Time</label></th>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B' }}>Total</label></th>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', textAlign: 'center' }}>Status</label></th>
                <th><label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', textAlign: 'center', paddingLeft: 7 }}>Action</label></th>
              </tr>
            </thead>
            <tbody>
              {state.apiData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                        style={{borderRadius: 200, height: 50, width: 50}}
                        src={
                          item.user_type === 'User'
                              ? `http://localhost:4000/${item.user_image}`
                              : (item.property_image && item.property_image.length > 0
                                  ? `http://localhost:4000/Images/${item.property_image[0].filename
                                  }`
                                  : '')
                        }
                        alt="icon"
                    />
                  </td>
                  <td>
                    5xNight+ Raffting
                    <p>Service
                      by: {item.user_type === 'User' ? `${item.user_name}` : `${item.owner_name}`}. <button>View
                        Profile</button></p>
                  </td>
                  <td>
                    {item.entry_date}
                    <p>{item.exit_date}</p>
                  </td>
                  <td style={{fontSize: "13px", fontWeight: "bold"}}>${item.total_amount}</td>
                  <td>
                    <button>{item.status}</button>
                  </td>
                  <td>
                    <button style={{background: '#0F172A', color: '#F8FAFC', borderRadius: 5}}>Mark Complete</button>
                  </td>
                  <td>
                  <Popup shouldCloseOnOverlayClick={false} closeOnDocumentClick={false} trigger={<a style={{}}><img style={{ width: 24, height: 24 }} src={require('../../../assets/threeDot.png')} /></a>} position='bottom right'>
                      <div style={{ display: 'flex', borderWidth: 1, border: 'solid', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Popup style={{ width: '40%' }} shouldCloseOnOverlayClick={false} closeOnDocumentClick={false} trigger={<button style={{ color: '#F87171', border: 'none', background: 'none', fontSize: 14, textAlign: 'start' }}> Cancel Booking</button>} modal contentStyle={{ width: '25%', height: '55%', display: 'flex', borderRadius: 5, justifyContent: 'center' }}>
                          {(close) => (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                              <div className='content' style={{ justifyContent: 'center', display: 'flow' }}>
                                <div style={{ textAlign: 'center' }}>
                                  <button style={{ borderRadius: 25, border: 'none', width: 50, height: 50, backgroundColor: '#FECACA' }} onClick={() => close()}>
                                    <img style={{ width: 24, height: 24 }} src={require('../../../assets/Icon.png')} />
                                  </button>
                                  <h5 style={{ marginTop: 8 }}>Are you sure you want to cancel Job?</h5>
                                  <p style={{ color: '#64748B' }}>Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.</p>
                                </div>
                                <div>
                                  <label style={{ color: '#0F172A', fontSize: 20, fontWeight: '500' }}>Explain Reason</label>
                                  <textarea
                                    style={{ border: '1px solid', borderColor: '#E2E8F0', borderRadius: 6, textAlign: 'start', fontSize: '1.1rem', color: '#0F172A', padding: 10 }}
                                    value={cancellationReason}
                                    onChange={(e) => setCancellationReason(e.target.value)}
                                  />
                                </div>
                                <button style={{ backgroundColor: '#EF4444', width: '100%', border: 'None', height: 40, borderRadius: 5 }} onClick={() => handleCancelBooking(item.user_id, item.booking_id, close)}>
                                  Cancel Order
                                </button>
                                <button style={{ width: '100%', height: '60%', border: 'None', background: 'none', padding: 10 }} onClick={() => close()}>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                        </Popup>
                        <Popup shouldCloseOnOverlayClick={true} closeOnDocumentClick={false} contentStyle={{ width: "25%", height: '45%', alignItems: 'center', display: 'flex', justifyContent: 'center' }} trigger={<a style={{ border: 'none', background: 'none', fontSize: 14, textAlign: 'start', padding: 10 }}> Upgrade Booking</a>} modal>
                          {(close) => (
                            <div style={{ display: 'flex', width: '90%', justifyContent: 'center', border: '2px solid red', alignItems: 'center' }}>
                              <div className='content' style={{ width: '90%', justifyContent: 'center', display: 'flow', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                  <a style={{ borderRadius: 25, border: 'none', width: 50, height: 50, backgroundColor: '#FECACA' }} onClick={() => close()}>
                                    <img style={{ width: 24, height: 24 }} src={require('../../../assets/Icon1.png')} />
                                  </a>
                                  <h3>Do you want to Upgrade your Job</h3>
                                  <p style={{ color: '#64748B' }}>Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.</p>
                                </div>
                                <Popup disabled={false} closeOnDocumentClick={false} data-backdrop="static" shouldCloseOnOverlayClick={false} data-keyboard="false" trigger={<button style={{ backgroundColor: '#F15A29', width: '100%', border: 'None', height: 40, borderRadius: 5 }} onClick={() => close()}>Upgrade Order</button>} modal contentStyle={{ width: '20%', height: '70%', display: 'flex', borderRadius: 5, justifyContent: 'center' }}>
                                  {(close) => (
                                    <div style={{ width: '100%', height: '100%' }}>
                                      <label>From $1,119 /night</label>
                                      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%' }}>
                                        <button style={{ width: '50%' }}>Close</button>
                                        <button style={{ width: '50%' }}>Apply</button>
                                      </div>
                                    </div>
                                  )}
                                </Popup>
                                <button style={{ width: '100%', height: '60%', border: 'None', background: 'none', padding: 10 }} onClick={() => close()}>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
                    </Popup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CencelBookingList;
