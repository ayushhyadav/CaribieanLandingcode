import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {Routes,Route} from 'react-router-dom'
import Signup from './screens/Signup'
import Login from './screens/Login'
import TermsCondition from './TermsCondition.js'
import RegistrationProcess from './screens/RegistrationProcess';
import Deshbord from './screens/Components/Deshbord/Deshboard';
import MyListing from './screens/MyListing';
import BookingHistry from './screens/BookingHistry';
import EarningScreen from './screens/EarningScreen';
import Home from './screens/HomeComonent/Home';
import PropertyPage from './screens/HomeComonent/property/PropertyPage';
import ClientProfile from './screens/Components/ClientProfile';
import Checkout from './screens/HomeComonent/Checkout';
import MyBooking from './screens/HomeComonent/PropertyOwnerProfile/MyBooking';
import EmailSupport from './screens/HomeComonent/EmailSupport';
import MainMessage from './screens/HomeComonent/MessageChat/MainMessage';
import AddProperty from './screens/Components/AddNewProperty/AddProperty';
import VarifyBooking from './screens/HomeComonent/PropertyOwnerProfile/VarifyBooking';
import Diversifysidebar from './screens/Components/Deshbord/Diversify property/Diversifysidebar.js';
import PandingApprovalProperty from '../src/screens/Components/Deshbord/PendingApprovalProperty'
import UserSignup from './screens/UserSignup'
import UserLogin from  './screens/UserLogin'
import TermConditionUser from './TermConditionUser'
import Footer from './screens/HomeComonent/Footer/Footer.js';

import TermConditions from './screens/HomeComonent/Footer/Termconditions.js'
import PrivacyPolicy from './screens/HomeComonent/Footer/Privacypolicy.js';
import RefundPolicy from './screens/HomeComonent/Footer/Refundpolicy.js';
import CookiePolicy from './screens/HomeComonent/Footer/Cookiepolicy.js';
import CancellationPolicy from './screens/HomeComonent/Footer/Cancellationpolicy.js';
   import Aboutus from './screens/HomeComonent/Footer/Aboutus.js'; 
   


const App = () => {
  return (
   <>
     <Routes>
     <Route path='/Login' element={<Login/>} style={{width: '100vw'}}/>
     <Route path='/Signup' element={<Signup />} style={{width: '100vw'}}/>
         <Route path='/userlogin' element={<UserLogin/>}/>
         <Route path='/usersignup' element={<UserSignup/>}/>


      {/* <Route path='/' element={<RegistrationHeader/> }/> */}
     <Route path='/earning/' element={<EarningScreen />} style={{width: '100vw'}}/>
     {/* <Route path="/booking/:userid" component={BookingHistory} /> */}

     <Route path='/booking/:userid' element={<BookingHistry />} style={{width: '100vw'}}/>
     <Route path='/mylisting/:userid' element={<MyListing />} style={{width: '100vw'}}/>
     <Route path="/Dashboard/:userid" element={<Deshbord />} style={{width: '100vw'}}/>
     <Route path='/Registration' element={<RegistrationProcess/>} style={{width: '100vw'}}/>

     <Route path='/TermsCondition' element={<TermsCondition />} style={{width: '100vw'}}/>
     <Route path='/' element={<Home />} style={{width: '100vw'}}/>
        <Route path='/TermsConditionuser' element={<TermConditionUser />} style={{width: '100vw'}}/>
    
     <Route path="/PropertyPage/:propertyId" element={<PropertyPage />} style={{width: '100vw'}} />

     <Route path='/Checkout' element={<Checkout />} style={{width: '100vw'}}/>
     <Route path='/MyBooking' element={<MyBooking />} style={{width: '100vw'}}/>
     <Route path='/EmailSupport' element={<EmailSupport />} style={{width: '100vw'}}/>
     <Route path='/Message' element={<MainMessage />} style={{width: '100vw'}}/>
     <Route path='/AddProperty' element={<AddProperty/> } style={{width: '100vw'}}/>
     <Route path='/divercify' element={<Diversifysidebar/> } style={{width: '100vw'}}/>

     <Route path='/VarifyBooking' element={<VarifyBooking />} style={{width: '100vw'}}/>
        <Route path='/PandingApproval/:userid' element={<PandingApprovalProperty />} style={{width: '100vw'}}/>
        {/*<Route path='/PandingApproval/:userid' element={<TermsCondition />} style={{width: '100vw'}}/>*/}
     {/* <Route path='/Propertylist' element={<Propertylist />} style={{width: '100vw'}}/> */}
     <Route path='/earning/:userid' element={<EarningScreen/>}/>
     <Route path='/aboutus' element={<Aboutus />} style={{width: '100vw'}}/>
     <Route path='/TermConditions' element={<TermConditions />} style={{width: '100vw'}}/>
     <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} style={{width: '100vw'}}/>
     <Route path='/CancelaionPolicy' element={<CancellationPolicy />} style={{width: '100vw'}}/>
     <Route path='/Refundpolicy' element={<RefundPolicy />} style={{width: '100vw'}}/>
     <Route path='/cookiespolicy' element={<CookiePolicy/>} style={{width: '100vw'}}/>
     </Routes>
     {/* <Footer/> */}
     </>
  )
}

export default App
