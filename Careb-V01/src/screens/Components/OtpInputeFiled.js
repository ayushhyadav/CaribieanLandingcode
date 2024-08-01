// import React, { Component } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import OTPInput from 'react-otp-input';
// import { auth } from '../../firebaseConfig';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import './OtpInputeFiled.css';

// class PhoneAuth extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             phone: '',
//             otp: '',
//             verificationCodeSent: false,
//             confirmationResult: null,
//             message: '',
//             timer: 30,
//             canResend: false,
//         };
//         this.timerInterval = null;
//     }

//     handlePhoneChange = (value) => {
//         if (!value.startsWith('+')) {
//             value = '+' + value;
//         }
//         this.setState({ phone: value });
//         console.log('Phone number changed:', value);
//     };

//     startTimer = () => {
//         this.setState({ timer: 30, canResend: false });
//         this.timerInterval = setInterval(() => {
//             this.setState(prevState => {
//                 if (prevState.timer > 1) {
//                     return { timer: prevState.timer - 1 };
//                 } else {
//                     clearInterval(this.timerInterval);
//                     return { canResend: true };
//                 }
//             });
//         }, 1000);
//     };

//     sendOtp = () => {
//         try {
//             const rechaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//             signInWithPhoneNumber(auth, this.state.phone, rechaptcha)
//                 .then((confirmationResult) => {
//                     this.setState({ verificationCodeSent: true, confirmationResult, message: 'OTP sent successfully.' });
//                     this.startTimer();
//                 })
//                 .catch((error) => {
//                     console.error('Error sending OTP:', error);
//                     this.setState({ message: 'Error sending OTP. Please try again.' });
//                 });
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     verifyOTP = (e) => {
//         e.preventDefault();
//         const { confirmationResult, otp } = this.state;

//         confirmationResult.confirm(otp)
//             .then((result) => {
//                 const user = result.user;
//                 console.log('User signed in successfully:', user);
//                 this.setState({ message: 'Phone number verified successfully!' });
//                 this.props.NextCallBack({ navigationTo: 'Pasport_veri', id: 4, bt_type: 'Next' });
//             })
//             .catch((error) => {
//                 console.error('Invalid OTP:', error);
//                 this.setState({ message: 'Invalid OTP. Please try again.' });
//             });
//     };

//     componentWillUnmount() {
//         if (this.timerInterval) {
//             clearInterval(this.timerInterval);
//         }
//     }

//     render() {
//         const { phone, otp, verificationCodeSent, message, timer, canResend } = this.state;

//         return (
//             <div className='v-phone-number' style={{ width: '70%', padding: 30 }}>
//                 <label style={{ marginLeft: 20 }}>Step 3/8</label>
//                 <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Verify Phone Number</h4>
//                 <div style={{ height: '40%', borderColor: '#E2E8F0', padding: 20 }}>
//                     <label style={{ color: '#474554' }}>Mobile No</label>
//                     <br />
//                     <div className='mo-no' style={{ display: 'flex', width: '60%' }}>
//                         <PhoneInput
//                             inputStyle={{
//                                 width: '90%',
//                                 height: 40,
//                                 borderColor: '#E2E8F0',
//                             }}
//                             buttonStyle={{
//                                 width: 39,
//                                 borderColor: '#E2E8F0',
//                                 height: 40,
//                             }}
//                             placeholder="Enter phone number"
//                             value={phone}
//                             onChange={this.handlePhoneChange}
//                             country={'us'}
//                             enableSearch={true}
//                         />

//                         {verificationCodeSent ? (
//                             <button
//                                 style={{ width: '23%', background: 'none', color: 'black' }}
//                                 className="me-2 btn btn-outline-dark"
//                                 type="button"
//                                 onClick={this.verifyOTP}
//                             >
//                                 Verify OTP
//                             </button>
//                         ) : (
//                             <button
//                                 id="sign-in-button"
//                                 style={{ width: '23%', background: 'transparent', fontWeight: 700, color: 'black' }}
//                                 className="me-2 btn btn-outline-dark"
//                                 type="button"
//                                 onClick={this.sendOtp}
//                                 disabled={verificationCodeSent && !canResend}
//                             >
//                                 {verificationCodeSent ? `Resend OTP (${timer}s)` : 'Verify'}
//                             </button>
//                         )}
//                     </div>
//                     {message && <p>{message}</p>}
//                     {verificationCodeSent && (
//                         <div className='otp-no'>
//                             <p>Enter 6 Digit Code and Verify your Phone Number</p>
//                             <OTPInput
//                                 value={otp}
//                                 onChange={(otp) => this.setState({ otp })}
//                                 numInputs={6}
//                                 renderSeparator={<span>-</span>}
//                                 renderInput={(props) => <input {...props} />}
//                                 inputStyle={{
//                                     width: 45,
//                                     height: 45,
//                                     fontSize: '18px',
//                                     padding: '10px',
//                                     border: '1px solid #ccc',
//                                     borderRadius: '4px',
//                                     textAlign: 'center',
//                                     marginBottom:50
//                                 }}
//                             />
//                         </div>
//                     )}
//                 </div>

//                 <div style={{marginTop:"60px"}} id="recaptcha"></div>
//                 <div className="main-btn"
//                      style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}>
//                     <button className='back-btn'
//                             style={{
//                                 width: '10%',
//                                 borderRadius: 10,
//                                 height: '45px',
//                                 borderWidth: 0,
//                                 background: 'white',
//                                 color: 'black'
//                             }}
//                             onClick={() => this.props.NextCallBack({ navigationTo: 'Upload_Profile', id: 2, currentid: 3, bt_type: 'Back' })}
//                     >
//                         Back
//                     </button>
//                     <button className='next-btn'
//                             style={{
//                                 color: 'white',
//                                 background: '#F15A29',
//                                 width: '15%',
//                                 borderRadius: 10,
//                                 height: '45px',
//                                 marginLeft: 10,
//                                 border: 'none'
//                             }}
//                             onClick={this.verifyOTP}
//                             // onClick={() => this.props.NextCallBack({ navigationTo: 'Pasport_veri', id: 4, bt_type: 'Next' })}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default PhoneAuth;














import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OTPInput from 'react-otp-input';
import './OtpInputeFiled.css';
import BaseUrl from '../Server/BaseUrl';

class PhoneAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            otp: '',
            verificationCodeSent: false,
            message: '',
            timer: 30,
            canResend: false,
        };
        this.timerInterval = null;
    }

    handlePhoneChange = (value) => {
        if (!value.startsWith('+')) {
            value = '+' + value;
        }
        this.setState({ phone: value });
        console.log('Phone number changed:', value);
    };

    startTimer = () => {
        this.setState({ timer: 30, canResend: false });
        this.timerInterval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.timer > 1) {
                    return { timer: prevState.timer - 1 };
                } else {
                    clearInterval(this.timerInterval);
                    return { canResend: true };
                }
            });
        }, 1000);
    };

    sendOtp = () => {
        fetch(BaseUrl.BaseUrl + `/api/send-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone: this.state.phone })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('success otp send',data)
                this.setState({ verificationCodeSent: true, message: 'OTP sent successfully.' });
                this.startTimer();
            } else {
                this.setState({ message: 'Error sending OTP. Please try again.' });
            }
        })
        .catch(error => {
            console.error('Error sending OTP:', error);
            this.setState({ message: 'Error sending OTP. Please try again.' });
        });
    };

    verifyOTP = (e) => {
        e.preventDefault();
        const { phone, otp } = this.state;

        fetch(BaseUrl.BaseUrl + `/api/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone, otp })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.setState({ message: 'Phone number verified successfully!' });
                console.log('success otp',data)
                this.props.NextCallBack({ navigationTo: 'Pasport_veri', id: 4, bt_type: 'Next' });
            } else {
                this.setState({ message: 'Invalid OTP. Please try again.' });
            }
        })
        .catch(error => {
            console.error('Invalid OTP:', error);
            this.setState({ message: 'Invalid OTP. Please try again.' });
        });
    };

    componentWillUnmount() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    render() {
        const { phone, otp, verificationCodeSent, message, timer, canResend } = this.state;

        return (
            <div className='v-phone-number' style={{ width: '70%', padding: 30 }}>
                <label style={{ marginLeft: 20 }}>Step 3/8</label>
                <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Verify Phone Number</h4>
                <div style={{ height: '40%', borderColor: '#E2E8F0', padding: 20 }}>
                    <label style={{ color: '#474554' }}>Mobile No</label>
                    <br />
                    <div className='mo-no' style={{ display: 'flex', width: '60%' }}>
                        <PhoneInput
                            inputStyle={{
                                width: '90%',
                                height: 40,
                                borderColor: '#E2E8F0',
                            }}
                            buttonStyle={{
                                width: 39,
                                borderColor: '#E2E8F0',
                                height: 40,
                            }}
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={this.handlePhoneChange}
                            country={'us'}
                            enableSearch={true}
                        />

                        {verificationCodeSent ? (
                            <button
                                style={{ width: '23%', background: 'none', color: 'black' }}
                                className="me-2 btn btn-outline-dark"
                                type="button"
                                onClick={this.verifyOTP}
                            >
                                Verify OTP
                            </button>
                        ) : (
                            <button
                                id="sign-in-button"
                                style={{ width: '23%', background: 'transparent', fontWeight: 700, color: 'black' }}
                                className="me-2 btn btn-outline-dark"
                                type="button"
                                onClick={this.sendOtp}
                                disabled={verificationCodeSent && !canResend}
                            >
                                {verificationCodeSent ? `Resend OTP (${timer}s)` : 'Verify'}
                            </button>
                        )}
                    </div>
                    {message && <p>{message}</p>}
                    {verificationCodeSent && (
                        <div className='otp-no'>
                            <p>Enter 6 Digit Code and Verify your Phone Number</p>
                            <OTPInput
                                value={otp}
                                onChange={(otp) => this.setState({ otp })}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    width: 45,
                                    height: 45,
                                    fontSize: '18px',
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    marginBottom: 50,
                                }}
                            />
                        </div>
                    )}
                </div>

                <div style={{ marginTop: "60px" }} id="recaptcha"></div>
                <div className="main-btn"
                     style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <button className='back-btn'
                            style={{
                                width: '10%',
                                borderRadius: 10,
                                height: '45px',
                                borderWidth: 0,
                                background: 'white',
                                color: 'black'
                            }}
                            onClick={() => this.props.NextCallBack({ navigationTo: 'Upload_Profile', id: 2, currentid: 3, bt_type: 'Back' })}
                    >
                        Back
                    </button>
                    <button className='next-btn'
                            style={{
                                color: 'white',
                                background: '#F15A29',
                                width: '15%',
                                borderRadius: 10,
                                height: '45px',
                                marginLeft: 10,
                                border: 'none'
                            }}
                            // onClick={this.verifyOTP}
                            onClick={() => this.props.NextCallBack({ navigationTo: 'Pasport_veri', id: 4, bt_type: 'Next' })}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default PhoneAuth;

