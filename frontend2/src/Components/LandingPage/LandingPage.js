import FAQ from "../FAQ/FAQ";
import Register from "../Register/Register";
import "./LandingPage.css";
import React from "react";

function LandingPage() {

  
  return (
    <div>
     
      {/*welcome-hero end */}
      <div>
      <h1 className="why">Why Choose Us </h1>
      <div class="card-group">
      
  <div class="card">
  <img  style={{width:"50px",marginLeft:"-5px" ,color:"red"}} class="card-img-top" src="assets/images/1000_F_205712496_QbG8Z5N5FJqOaARxbUkgOCEbQi0q0UeH-removebg-preview.png" alt=""/>
    <div class="card-body">
      <h5 style={{fontSize:"15px"}} class="card-title">Early Access</h5>
      <p class="card-text"> Get priority in listing your property and setting
the stage for memorable stays. </p>
     
    </div>
  </div>
  <div class="card">
    <img style={{width:"80px" ,color:"red"}} class="card-img-top" src="assets/images/how-it-works-icon-8-removebg-preview.png" alt=""/>
    <div class="card-body">
      {/* <h5 class="card-title">How It Works</h5> */}
      <p class="card-text">  Sign Up: Quick and<br/> easy-just a few clicks. Stay Informed: Receive updates, tips, and more directly to
your inbox. </p>
     
    </div>
  </div>
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
    <div class="card-body">
      <h5 style={{fontSize:"15px"}} class="card-title">Community Voice</h5>
      <p class="card-text">  Your feedback shapes our journey,
ensuring we meet your needs and exceed expectations.</p>
     
    </div>
  </div>



  
  <div class="card">
  <img className="rocket" style={{width:"70px" ,color:"red"}} class="card-img-top" src="assets/images/free-rocket-icon-3432-thumb.png" alt=""/>
 
    <div  class="card-body">
      <h5 style={{fontSize:"15px"}}  class="card-title">Launch Ready</h5>
      <p id='Home-section' class="card-text">We’ll tell you when it’s time to shine. Prepare to welcome guests! Join the Waitlist </p>
     
    </div>
  </div >
</div>
</div>


    <FAQ/>

    
      <Register/>
	  
    </div>
  );
}

export default LandingPage;
