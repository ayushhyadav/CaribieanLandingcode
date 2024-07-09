import React from "react";
import "./Footer.css";

function handlePolicyClick(policy) {
  console.log(`${policy} clicked`);
  // You can also navigate programmatically or perform other actions here
}

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="part1">
          <div className="footer-image">
            <img src={require('./image/ca.png')} alt="Logo" />
            <img src={require('./image/ca1.png')} id="im1" alt="Logo" />
          </div>
        </div>
        <div className="part1">
          <h3>Policy</h3>
          <a href="/TermsConditions"
            >Terms & Condition</a>
          <a  href="/PrivacyPolicy"
           >Privacy Policy</a>
          <a href="/CancelaionPolicy"
           >Cancellation Policy</a>
          <a href="/Refundpolicy"
           >Refund Policy</a>
          <a  href="/cookiespolicy"
          >Cookies Policy</a>
        </div>
        <div className="part1">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/caribbeaneaze/?igsh=MWZ2eTR0M3ByZ21h">Instagram</a>
          <a href="https://www.facebook.com/people/Caribbeaneaze/61557976032264/?mibextid=ZbWKwL">Facebook</a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcaribbeaneaze">Twitter</a>
        </div>
        <div className="part1">
        <a href="/aboutus"
           ><h3>About Us</h3></a>
          <h3 id="contact">Contact Us</h3>
          <a href="#">support@caribbeaneaze.com</a>
          <a href="#">info@caribbeaneaze.com</a>
        </div>
      </div>
      <div className="bottomfooter">
        <p id="bottom-txt1">© 2024 Caribbeaneaze, Inc.</p>
     <p id="bottom-txt">Proudly created by<br/>
    <a href="https://4tunerstech.com/">4TUNERS TECHNOLOGIES</a> </p> 
      </div>
    </div>
  );
};

export default Footer;

