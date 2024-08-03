import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeHeader.css';
import BaseUrl from '../Server/BaseUrl';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [hasProperty, setHasProperty] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const userId = localStorage.user_id;

    useEffect(() => {
        const checkUserProperties = async () => {
            if (userId) {
                try {
                    const response = await fetch(`${BaseUrl.BaseUrl}/user_profile/${userId}`);
                    const data = await response.json();
                    console.log('data', data);
                    setHasProperty(data.property_list && data.property_list.length > 0);
                } catch (error) {
                    console.error('Error checking user properties:', error);
                }
            }
        };

        checkUserProperties();
    }, [userId]);

    const handleLogout = () => {
        localStorage.removeItem("user_id");
        navigate("/");
        window.location.reload();
    };

    const handleBecomeHostClick = () => {
        if (userId) {
            if (hasProperty) {
                navigate(`/Dashboard/${userId}`);
            } else {
                navigate('/Registration');
            }
        } else {
            navigate('/login');
        }
    };

    const handleBecomeuserClick = () => {
        navigate('/');
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleBookingClick = (event) => {
        if (!userId) {
            event.preventDefault(); // Prevent the default link behavior
            navigate('/login'); // Redirect to login if userId is not present
        }
    };

    return (
        <nav style={{ borderBottom: '1px solid #E5E7EB', padding: 20 }} className="navbar navbar-expand-lg navbar-white">
            <div style={{ width: '100%', justifyContent: 'space-between' }} className="container-fluid main-hd">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img style={{ width: 50, height: 45 }} alt='' src={require('../Image/Group1.png')} />
                    <Link to='/' style={{ height: '30px', width: '155px', marginTop: 6 }}>
                        <img style={{ height: '28px', width: '165px', marginLeft: 10 }} alt="Group" src={require('../../assets/name logo.png')} />
                    </Link>
                </div>
                <button
                    style={{ width: '120px' }}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                    onClick={toggleNav}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', flexDirection: 'row' }}>
                        {hasProperty ? (
                            <>
                                <li className="nav-item">
                                    <Link to={`/dashboard/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link active" aria-current="page">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={userId ? `/booking/${userId}` : '/login'} onClick={handleBookingClick} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Booking History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/earning/${userId}`}  style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Earnings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/mylisting/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">My Listings</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={userId ? `/booking/${userId}` : '/login'} onClick={handleBookingClick} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link active" aria-current="page">My Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/EmailSupport' style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Support</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className='ahost' style={{ display: 'flex', alignItems: 'center' }}>
                    <Link className='hind-bs' to='/'><img src={require('../../assets/sms.png')} alt='' /></Link>
                    <img className='hind-bs' style={{ marginLeft: 15 }} src={require('../../assets/notification.png')} alt='' />
                    {hasProperty ? (
                        <div className='Become'>
                            <button onClick={handleBecomeuserClick} style={{ marginLeft: 10, height: 48, background: 'none', border: '2px solid #000', padding: 0, fontWeight: 500, borderRadius: 11,whiteSpace:'nowrap' }} className="me-2 btn host" type="button">Become a User</button>
                        </div>
                    ) : (
                        <div className='Become'>
                            <button onClick={handleBecomeHostClick} style={{ marginLeft: 10, height: 48, background: 'none', border: '1px solid #000', padding: 5, borderRadius: 11 ,fontWeight: 500,whiteSpace:'nowrap'}} className="me-2 btn host" type="button">Become a Host</button>
                        </div>
                    )}
                    {userId ? (
                        <button onClick={handleLogout} style={{
                            marginLeft: 20,
                            height: 48,
                            width: '10rem',
                            border: 'none',
                            borderRadius: 11,
                            color: 'white',
                            background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
                        }} className="me-2 btn btn-outline-dark" type="button">Logout
                        </button>
                    ) : (
                        <div className='Signup'>
                            <Link style={{ marginLeft: 20 }} to='/usersignup'>
                                <button style={{
                                    height: 48,
                                    width: '9rem',
                                    border: 'none',
                                    borderRadius: 11,
                                    color: 'white',
                                    background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
                                }} className="me-2 btn btn-outline-dark" type="submit">Guest Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default HomeHeader;
