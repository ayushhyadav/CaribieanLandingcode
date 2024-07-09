import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Crousel from './Crousel';
import ScrollDestination from './ScrollDestination';
import Card from './Card';
import './Home.css';
import BaseUrl from '../Server/BaseUrl';
import Modal from 'react-modal';
import Cookies from 'js-cookie';
import CookiePolicy from './Cookiepolicy';
import GuestPhotoSubmissionForm from './GuestPhotoSubmissionForm';
import Footer from './Footer/Footer';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            near_by_you: [],
            populer_destinations: [],
            showMainModal: true, // State to control the main modal visibility
            showPolicyModal: false, // State for cookies policy modal
            showCookieModal: !Cookies.get('cookieConsent'), // Check if cookie consent is already given
            hasClosedMainModal: false, // Flag to check if main modal is closed
            showFeedbackForm: false,
        };
    }

    componentDidMount() {
        fetch(BaseUrl.BaseUrl + '/get_all_propertys')
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                this.setState({
                    near_by_you: data.message.near_by_you,
                    populer_destinations: data.message.populer_destinations,
                });
            })
            .catch((error) => {
                console.error('Error fetching property data:', error);
                alert('Please check your Internet');
            });
    }

    NewProperty = (value) => {
        fetch(BaseUrl.BaseUrl + '/most_dest_property/' + value)
            .then((response) => response.json())
            .then((data) => {
                console.log('property:', data);
                this.setState({
                    near_by_you: data.message.near_by_you,
                });
            })
            .catch((error) => {
                console.error('Errorproperty:', error);
            });
    };

    Searchfilter = (postData) => {
        fetch(BaseUrl.BaseUrl + '/propertys/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Post added successfully:', data);
                this.setState({ near_by_you: data?.message?.data });
            })
            .catch((error) => {
                console.error('Error adding post:', error);
            });
    };

    acceptCookies = () => {
        Cookies.set('cookieConsent', true, { expires: 365 }); // Set cookie consent for 1 year
        this.setState({ showCookieModal: false });
    };

    declineCookies = () => {
        alert('You have declined cookies. Some features may not work properly.');
        this.setState({ showCookieModal: false });
    };

    openPolicyModal = () => {
        this.setState({ showPolicyModal: true, showCookieModal: false });
    };

    closePolicyModal = () => {
        this.setState({ showPolicyModal: false }, () => {
            if (!Cookies.get('cookieConsent')) {
                this.setState({ showCookieModal: true });
            }
        });
    };

    handleCloseMainModal = () => {
        this.setState({
            showMainModal: false,
            hasClosedMainModal: true, // Set flag to true when main modal is closed
        }, () => {
            if (!Cookies.get('cookieConsent')) {
                this.setState({ showCookieModal: true });
            }
        });
    };
    openFeedbackModal = () => {
        alert('Coming soon! ');
        // this.setState({ showFeedbackForm: true });
    };
    
    render() {
        const { showMainModal, showCookieModal, showPolicyModal, hasClosedMainModal, showFeedbackForm  } = this.state;

        return (
            <div style={{ width: '100%', height: 'auto' }}>
                <HomeHeader />
                <Crousel
                    GetResponceFun={(res) => this.setState({ near_by_you: res })}
                    data={this.state.carouselData}
                    CallBackFun={(postData) => this.Searchfilter(postData)}
                />
                <ScrollDestination
                    props_data={this.state.populer_destinations}
                    CallBackFun={(value) => this.NewProperty(value)}
                />
                <Card props_data={this.state.near_by_you} />

                {/* Main Modal */}
                <Modal
                    isOpen={showMainModal}
                    onRequestClose={this.handleCloseMainModal}
                    contentLabel="Image Modal"
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '60%',
                            background: 'transparent'
                        },
                    }}
                >
                    <div style={{ width: '90%', textAlign: 'center' }}>
                        <img
                            src={require('../../assets/Some.png')}
                            alt="Alert"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <button
                            style={{
                                width: 100,
                                background: "white",
                                color: 'black',
                                marginTop: 10,
                                border: '1px solid black',
                                borderRadius: 5,
                            }}
                            onClick={this.handleCloseMainModal}
                        >
                            Ok
                        </button>
                    </div>
                </Modal>

                {/* Cookie Consent Modal */}
                {hasClosedMainModal && showCookieModal && (
                    <Modal
                        isOpen={showCookieModal}
                        onRequestClose={this.acceptCookies}
                        contentLabel="Cookie Consent Modal"
                        style={{
                            overlay: {
                                zIndex: 1000, // Set a high z-index to ensure it appears above other modals
                            },
                            content: {
                                top: 'auto',
                                left: '50%',
                                right: 'auto',
                                bottom: 0, // Adjust bottom position as needed
                                transform: 'translateX(-50%)', // Center horizontally
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                // background: 'transparent',
                            },
                        }}
                    >
                        <div style={{ width: '90%', textAlign: 'center' }}>
                            <p>We use cookies to enhance your experience. By continuing, you agree to our use of
                             <a
                                    onClick={this.openPolicyModal}
                                    style={{ color: 'blue', textDecoration: 'underline', marginLeft:5}}
                                >
                                     cookies
                                </a> </p>
                            <div>
                                <button
                                    style={{
                                        width: 100,
                                        background: "white",
                                        color: 'black',
                                        marginTop: 10,
                                        border: '1px solid black',
                                        borderRadius: 5,
                                        marginRight: 10,
                                    }}
                                    onClick={this.acceptCookies}
                                >
                                    Accept
                                </button>
                                <button
                                    style={{
                                        width: 100,
                                        background: "white",
                                        color: 'black',
                                        marginTop: 10,
                                        border: '1px solid black',
                                        borderRadius: 5,
                                    }}
                                    onClick={this.declineCookies}
                                >
                                    Decline
                                </button>
                            </div>
                            {/* <p style={{ marginTop: 20, fontSize: 12 }}>
                                <a
                                    onClick={this.openPolicyModal}
                                    style={{ color: 'blue', textDecoration: 'underline' }}
                                >
                                    View our cookies policy
                                </a>
                            </p> */}
                        </div>
                    </Modal>
                )}

                {/* Cookies Policy Modal */}
                <CookiePolicy isOpen={showPolicyModal} onClose={this.closePolicyModal} />

                {/* Feedback Button */}
                <div onClick={this.openFeedbackModal} className="feedback-button">
                    <a >Feedback</a>
                </div>

                {/* Guest Photo Submission Form */}
                {/* {showFeedbackForm && <GuestPhotoSubmissionForm />} */}

                <Footer/>
            </div>
        );
    }
}
