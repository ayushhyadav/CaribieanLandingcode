import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeHeader.css';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [hasProperty, setHasProperty] = useState(false);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        const checkUserProperties = async () => {
            if (userId) {
                try {
                    const response = await fetch(`http://localhost:4000/user_profile/${userId}`);
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
        navigate("/login");
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

    return (
        <nav style={{ borderBottom: '1px solid #E5E7EB', padding: 20 }} className="navbar navbar-expand-lg navbar-white">
            <div style={{ width: '90%', justifyContent: 'space-between' }} className="container-fluid main-hd">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img style={{ width: 50, height: 45 }} alt='' src={require('../Image/Group1.png')} />
                    <Link to='/' style={{ height: '30px', width: '155px', marginTop: 6 }}>
                        <img style={{ height: '28px', width: '165px', marginLeft: 10 }} alt="Group" src={require('../../assets/name logo.png')} />
                    </Link>
                </div>
                <button style={{ width: '120px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{ display: 'flex', flexDirection: 'row' }} className="navbar-nav">
                        {hasProperty ? (
                            <>
                                <li className="nav-item">
                                    <Link to={`/dashboard/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link active" aria-current="page">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/booking/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Booking History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Earnings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/mylisting/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">My Listings</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={`/booking/${userId}`} style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link active" aria-current="page">My Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/EmailSupport' style={{ fontSize: 18, fontWeight: '500', display: 'flex', justifyContent: 'flex-end' }} className="nav-link">Support</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }} className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className='hind-bs' to='/Message'><img src={require('../../assets/sms.png')} alt='' /></Link>

                        <img className='hind-bs' style={{ marginLeft: 15 }} src={require('../../assets/notification.png')} alt='' />
                        {hasProperty ? (
                        <div className='Become'>
                            <button onClick={handleBecomeuserClick} style={{ marginLeft: 10, height: 48, background: 'none', border: '2px solid #000', padding: 0, fontWeight: 700, borderRadius: 11 }} className="me-2 btn host" type="submit">Become a User</button>
                        </div>
                        ) : (
                            <div className='Become'>
                                <button onClick={handleBecomeHostClick} style={{
                                    marginLeft: 10,
                                    height: 48,
                                    background: 'none',
                                    border: '2px solid #000',
                                    padding: 0,
                                    fontWeight: 700,
                                    borderRadius: 11
                                }} className="me-2 btn host" type="submit">Become a Host
                                </button>
                            </div>
                        )}
                        {userId ? (
                            <Link onClick={handleLogout} style={{marginLeft: 20}} to='/Signup'>
                        <button style={{
                            height: 48,
                            width: '10rem',
                            border: 'none',
                                    borderRadius: 11,
                                    color: 'white',
                                    background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
                                }} className="me-2 btn btn-outline-dark" type="submit">Logout
                                </button>
                            </Link>
                        ) : (
                            <div className='Signup'>
                                <Link style={{ marginLeft: 20 }} to='/Signup'>
                                    <button style={{
                                        height: 48,
                                        width: '10rem',
                                        border: 'none',
                                        borderRadius: 11,
                                        color: 'white',
                                        background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
                                    }} className="me-2 btn btn-outline-dark" type="submit">Sign Up
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HomeHeader;
