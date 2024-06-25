import React, { Component } from 'react'
import Popup from "reactjs-popup";
const Data=[
    {
        img:require('../../../assets/Ellipse 45.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul',
        price:'$40',
    },
    {
        img:require('../../../assets/Ellipse45(1).png'),
        title:'5xNight+ Raffting+Dinner',
        desc:'Service by:Paul',
        price:'$50',
    },
    {
        img:require('../../../assets/Ellipse 45 (2).png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul',
        price:'$200',
    },
    {
        img:require('../../../assets/Ellipse 45 (3).png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul',
        price:'$300',
    },
]



export default class Booking extends Component {
  render() {
    const {userData} = this.props
    console.log('user.....',userData)
    return (
        <div>
            {/*<div>*/}
            {/*    <div style={{marginTop: 25,}}>*/}
            {/*        <label style={{fontSize: 20, marginLeft: 25, fontWeight: '700', height: 77}}>Bookings</label>*/}
            {/*        <div style={{width: '100%', marginTop: 30}}>*/}
            {/*            {userData?.data?.map((Data) => (*/}
            {/*                <ul style={{*/}
            {/*                    listStyleType: 'none',*/}
            {/*                    display: 'flex',*/}
            {/*                    justifyContent: 'space-around',*/}
            {/*                    alignItems: 'center',*/}
            {/*                    width: '100%',*/}
            {/*                    borderBottom: '1px solid #E2E8F0',*/}
            {/*                    padding: 18*/}
            {/*                }}>*/}
            {/*                    <div style={{display: 'flex'}}>*/}
            {/*                        <img style={{width: 58, height: 58, borderRadius: 22}}*/}
            {/*                             src={Data?.img} alt='not find'/>*/}
            {/*                        <div style={{marginLeft: 10}}>*/}
            {/*                            <label style={{*/}
            {/*                                fontSize: 18,*/}
            {/*                                fontWeight: '500',*/}
            {/*                                color: '#0F172A'*/}
            {/*                            }}>{Data?.title || 'per night'}</label>*/}
            {/*                            <div>*/}
            {/*                                <label style={{fontSize: 16, color: '#64748B'}}>Service*/}
            {/*                                    by:{Data?.desc || 'username'}. </label>*/}
            {/*                                <a style={{*/}
            {/*                                    border: 'none',*/}
            {/*                                    background: 'none',*/}
            {/*                                    color: '#F15A29',*/}
            {/*                                    fontSize: 16,*/}
            {/*                                    fontWeight: '550'*/}
            {/*                                }}>View Profile</a>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <label style={{*/}
            {/*                        fontSize: 19,*/}
            {/*                        fontWeight: '600',*/}
            {/*                        color: '#22C55E'*/}
            {/*                    }}>${Data?.total_amount || 'total amount'}</label>*/}
            {/*                    <label style={{*/}
            {/*                        fontSize: 16,*/}
            {/*                        fontWeight: '500',*/}
            {/*                        color: '#F59E0B',*/}
            {/*                        background: '#FFFBEB',*/}
            {/*                        width: 120,*/}
            {/*                        textAlign: 'center',*/}
            {/*                        height: 40,*/}
            {/*                        display: 'flex',*/}
            {/*                        alignItems: "center",*/}
            {/*                        justifyContent: 'center',*/}
            {/*                        borderRadius: 10*/}
            {/*                    }}>{Data?.status}</label>*/}
            {/*                    <div style={{flexDirection: 'column', display: 'flex'}}>*/}
            {/*                        <label style={{*/}
            {/*                            fontSize: 14,*/}
            {/*                            fontWeight: '400',*/}
            {/*                            color: '#0F172A'*/}
            {/*                        }}>{Data?.entry_date} </label>*/}
            {/*                        <label style={{*/}
            {/*                            fontSize: 14,*/}
            {/*                            fontWeight: '400',*/}
            {/*                            color: '#0F172A'*/}
            {/*                        }}>{Data?.exit_date}  </label>*/}
            {/*                    </div>*/}
            {/*                    <a style={{*/}
            {/*                        fontSize: 18,*/}
            {/*                        border: 'none',*/}
            {/*                        background: 'none',*/}
            {/*                        fontWeight: '700',*/}
            {/*                        color: '#14532D'*/}
            {/*                    }}>Edit</a>*/}
            {/*                </ul>*/}


            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

            <div className='topMain' style={{width: '100%'}}>
                <div className="epmt" style={{height: 77}}>
                    <img src={require('../../../assets/mobile-bargar.png')} alt=""/>
                </div>
                {userData?.data?.length === 0 ? (
                    <p style={{width: '100%', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>No bookings
                        available</p>
                ) : (
                    <div className="table-Page">
                        <table className="table-full" style={{width: '100%'}}>
                            <thead>
                            <tr>
                                <th><label style={{
                                    fontSize: 13,
                                    fontWeight: '600',
                                    color: '#64748B',
                                    paddingLeft: 20
                                }}>SERVICE</label></th>
                                <th><label style={{
                                    fontSize: 13,
                                    fontWeight: '600',
                                    color: '#64748B',
                                    padding: '20px 20px'
                                }}></label></th>
                                <th><label style={{fontSize: 13, fontWeight: '600', color: '#64748B', paddingLeft: 5}}>Date
                                    & Time</label></th>
                                <th><label style={{fontSize: 13, fontWeight: '600', color: '#64748B'}}>Total</label>
                                </th>
                                <th><label style={{
                                    fontSize: 13,
                                    fontWeight: '600',
                                    color: '#64748B',
                                    textAlign: 'center'
                                }}>Status</label></th>
                                {/*<th><label style={{*/}
                                {/*    fontSize: 13,*/}
                                {/*    fontWeight: '600',*/}
                                {/*    color: '#64748B',*/}
                                {/*    textAlign: 'center',*/}
                                {/*    paddingLeft: 7*/}
                                {/*}}>Action</label></th>*/}
                            </tr>
                            </thead>
                            <tbody>
                            {userData?.data?.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            style={{borderRadius: 200, height: 50, width: 50}}
                                            src={
                                                `http://localhost:4000/${item.user_image}`
                                            }
                                            alt="icon"
                                        />
                                    </td>
                                    <td>
                                        {item.nights}xNight+ Raffting
                                        <p>Service
                                            by: {item.user_name} <button style={{background:'none',fontSize:16, color: '#F15A29',fontWeight:600}}> View
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
                                    {/*<td>*/}
                                    {/*    <button style={{background: '#0F172A', color: '#F8FAFC', borderRadius: 5}}>Mark*/}
                                    {/*        Complete*/}
                                    {/*    </button>*/}
                                    {/*</td>*/}
                                    {/*<td>*/}
                                    {/*    <Popup shouldCloseOnOverlayClick={false} closeOnDocumentClick={false}*/}
                                    {/*           trigger={<a style={{}}><img style={{width: 24, height: 24}}*/}
                                    {/*                                       src={require('../../../assets/threeDot.png')}/></a>}*/}
                                    {/*           position='bottom right'>*/}
                                    {/*        <div style={{*/}
                                    {/*            display: 'flex',*/}
                                    {/*            borderWidth: 1,*/}
                                    {/*            border: 'solid',*/}
                                    {/*            flexDirection: 'column',*/}
                                    {/*            justifyContent: 'flex-start'*/}
                                    {/*        }}>*/}
                                    {/*            <Popup style={{width: '40%'}} shouldCloseOnOverlayClick={false}*/}
                                    {/*                   closeOnDocumentClick={false}*/}
                                    {/*                   trigger={<button style={{*/}
                                    {/*                       color: '#F87171',*/}
                                    {/*                       border: 'none',*/}
                                    {/*                       background: 'none',*/}
                                    {/*                       fontSize: 14,*/}
                                    {/*                       textAlign: 'start'*/}
                                    {/*                   }}> Cancel Booking</button>} modal contentStyle={{*/}
                                    {/*                width: '25%',*/}
                                    {/*                height: '55%',*/}
                                    {/*                display: 'flex',*/}
                                    {/*                borderRadius: 5,*/}
                                    {/*                justifyContent: 'center'*/}
                                    {/*            }}>*/}
                                    {/*                {(close) => (*/}
                                    {/*                    <div style={{*/}
                                    {/*                        display: 'flex',*/}
                                    {/*                        justifyContent: 'center',*/}
                                    {/*                        alignItems: 'center',*/}
                                    {/*                        width: '90%'*/}
                                    {/*                    }}>*/}
                                    {/*                        <div className='content'*/}
                                    {/*                             style={{justifyContent: 'center', display: 'flow'}}>*/}
                                    {/*                            <div style={{textAlign: 'center'}}>*/}
                                    {/*                                <button style={{*/}
                                    {/*                                    borderRadius: 25,*/}
                                    {/*                                    border: 'none',*/}
                                    {/*                                    width: 50,*/}
                                    {/*                                    height: 50,*/}
                                    {/*                                    backgroundColor: '#FECACA'*/}
                                    {/*                                }} onClick={() => close()}>*/}
                                    {/*                                    <img style={{width: 24, height: 24}}*/}
                                    {/*                                         src={require('../../../assets/Icon.png')}/>*/}
                                    {/*                                </button>*/}
                                    {/*                                <h5 style={{marginTop: 8}}>Are you sure you want to*/}
                                    {/*                                    cancel Job?</h5>*/}
                                    {/*                                <p style={{color: '#64748B'}}>Get exclusive updates and*/}
                                    {/*                                    gifts right at your*/}
                                    {/*                                    desktop without opening your mail again and again!*/}
                                    {/*                                    You can disable them*/}
                                    {/*                                    anytime.</p>*/}
                                    {/*                            </div>*/}
                                    {/*                            <div>*/}
                                    {/*                                <label style={{*/}
                                    {/*                                    color: '#0F172A',*/}
                                    {/*                                    fontSize: 20,*/}
                                    {/*                                    fontWeight: '500'*/}
                                    {/*                                }}>Explain*/}
                                    {/*                                    Reason</label>*/}
                                    {/*                                <textarea*/}
                                    {/*                                    style={{*/}
                                    {/*                                        border: '1px solid',*/}
                                    {/*                                        borderColor: '#E2E8F0',*/}
                                    {/*                                        borderRadius: 6,*/}
                                    {/*                                        textAlign: 'start',*/}
                                    {/*                                        fontSize: '1.1rem',*/}
                                    {/*                                        color: '#0F172A',*/}
                                    {/*                                        padding: 10*/}
                                    {/*                                    }}*/}
                                    {/*                                    value={cancellationReason}*/}
                                    {/*                                    onChange={(e) => setCancellationReason(e.target.value)}*/}
                                    {/*                                />*/}
                                    {/*                            </div>*/}
                                    {/*                            <button style={{*/}
                                    {/*                                backgroundColor: '#EF4444',*/}
                                    {/*                                width: '100%',*/}
                                    {/*                                border: 'None',*/}
                                    {/*                                height: 40,*/}
                                    {/*                                borderRadius: 5*/}
                                    {/*                            }}*/}
                                    {/*                                    onClick={() => handleCancelBooking(item.user_id, item.booking_id, close)}>*/}
                                    {/*                                Cancel Order*/}
                                    {/*                            </button>*/}
                                    {/*                            <button style={{*/}
                                    {/*                                width: '100%',*/}
                                    {/*                                height: '60%',*/}
                                    {/*                                border: 'None',*/}
                                    {/*                                background: 'none',*/}
                                    {/*                                padding: 10*/}
                                    {/*                            }} onClick={() => close()}>*/}
                                    {/*                                Cancel*/}
                                    {/*                            </button>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                )}*/}
                                    {/*            </Popup>*/}
                                    {/*            <Popup shouldCloseOnOverlayClick={true} closeOnDocumentClick={false}*/}
                                    {/*                   contentStyle={{*/}
                                    {/*                       width: "25%",*/}
                                    {/*                       height: '45%',*/}
                                    {/*                       alignItems: 'center',*/}
                                    {/*                       display: 'flex',*/}
                                    {/*                       justifyContent: 'center'*/}
                                    {/*                   }} trigger={<a style={{*/}
                                    {/*                border: 'none',*/}
                                    {/*                background: 'none',*/}
                                    {/*                fontSize: 14,*/}
                                    {/*                textAlign: 'start',*/}
                                    {/*                padding: 10*/}
                                    {/*            }}> Upgrade Booking</a>} modal>*/}
                                    {/*                {(close) => (*/}
                                    {/*                    <div style={{*/}
                                    {/*                        display: 'flex',*/}
                                    {/*                        width: '90%',*/}
                                    {/*                        justifyContent: 'center',*/}
                                    {/*                        border: '2px solid red',*/}
                                    {/*                        alignItems: 'center'*/}
                                    {/*                    }}>*/}
                                    {/*                        <div className='content' style={{*/}
                                    {/*                            width: '90%',*/}
                                    {/*                            justifyContent: 'center',*/}
                                    {/*                            display: 'flow',*/}
                                    {/*                            alignItems: 'center'*/}
                                    {/*                        }}>*/}
                                    {/*                            <div style={{textAlign: 'center'}}>*/}
                                    {/*                                <a style={{*/}
                                    {/*                                    borderRadius: 25,*/}
                                    {/*                                    border: 'none',*/}
                                    {/*                                    width: 50,*/}
                                    {/*                                    height: 50,*/}
                                    {/*                                    backgroundColor: '#FECACA'*/}
                                    {/*                                }} onClick={() => close()}>*/}
                                    {/*                                    <img style={{width: 24, height: 24}}*/}
                                    {/*                                         src={require('../../../assets/Icon1.png')}/>*/}
                                    {/*                                </a>*/}
                                    {/*                                <h3>Do you want to Upgrade your Job</h3>*/}
                                    {/*                                <p style={{color: '#64748B'}}>Get exclusive updates and*/}
                                    {/*                                    gifts right at your*/}
                                    {/*                                    desktop without opening your mail again and again!*/}
                                    {/*                                    You can disable them*/}
                                    {/*                                    anytime.</p>*/}
                                    {/*                            </div>*/}
                                    {/*                            <Popup disabled={false} closeOnDocumentClick={false}*/}
                                    {/*                                   data-backdrop="static"*/}
                                    {/*                                   shouldCloseOnOverlayClick={false}*/}
                                    {/*                                   data-keyboard="false" trigger={<button*/}
                                    {/*                                style={{*/}
                                    {/*                                    backgroundColor: '#F15A29',*/}
                                    {/*                                    width: '100%',*/}
                                    {/*                                    border: 'None',*/}
                                    {/*                                    height: 40,*/}
                                    {/*                                    borderRadius: 5*/}
                                    {/*                                }} onClick={() => close()}>Upgrade Order</button>} modal*/}
                                    {/*                                   contentStyle={{*/}
                                    {/*                                       width: '20%',*/}
                                    {/*                                       height: '70%',*/}
                                    {/*                                       display: 'flex',*/}
                                    {/*                                       borderRadius: 5,*/}
                                    {/*                                       justifyContent: 'center'*/}
                                    {/*                                   }}>*/}
                                    {/*                                {(close) => (*/}
                                    {/*                                    <div style={{width: '100%', height: '100%'}}>*/}
                                    {/*                                        <label>From $1,119 /night</label>*/}
                                    {/*                                        <div style={{*/}
                                    {/*                                            display: 'flex',*/}
                                    {/*                                            justifyContent: 'center',*/}
                                    {/*                                            flexDirection: 'row',*/}
                                    {/*                                            width: '100%'*/}
                                    {/*                                        }}>*/}
                                    {/*                                            <button style={{width: '50%'}}>Close*/}
                                    {/*                                            </button>*/}
                                    {/*                                            <button style={{width: '50%'}}>Apply*/}
                                    {/*                                            </button>*/}
                                    {/*                                        </div>*/}
                                    {/*                                    </div>*/}
                                    {/*                                )}*/}
                                    {/*                            </Popup>*/}
                                    {/*                            <button style={{*/}
                                    {/*                                width: '100%',*/}
                                    {/*                                height: '60%',*/}
                                    {/*                                border: 'None',*/}
                                    {/*                                background: 'none',*/}
                                    {/*                                padding: 10*/}
                                    {/*                            }} onClick={() => close()}>*/}
                                    {/*                                Cancel*/}
                                    {/*                            </button>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                )}*/}
                                    {/*            </Popup>*/}
                                    {/*        </div>*/}
                                    {/*    </Popup>*/}
                                    {/*</td>*/}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
  }
}
