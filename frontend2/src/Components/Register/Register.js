    import "./Register.css";
    import { useState, useEffect } from "react";
    import axios from "axios";
    import React, { useRef } from 'react';
    import PhoneInput from "react-phone-input-2";
    import "react-phone-input-2/lib/style.css";
    
    
    function Register() {
    
      const form = useRef();
    
      const [isVisible, setIsVisible] = useState(false);
     
      useEffect(() => {
        // Function to handle scroll event
        function handleScroll() {
          if (window.pageYOffset > 300) { 
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      // Function to scroll to top
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
      const [errorMessage, setErrorMessage] = useState("");
      const [successMessage, setSuccessMessage] = useState("");
      const [yourname, setYourname] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [massage, setMassage] = useState("");
      const [propertyImage, setPropertyImage] = useState(null);
      const [flag,setFlag] = useState("YES");
      //set image to backend
      // const [file, setFile] = useState(null);
    
      const handlePhoneChange = (value) => {
        setPhone(value);
      };
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = new FormData();
        data.append("yourname", yourname);
        data.append("email", email);
        data.append("phone", phone);
        data.append("massage", massage);
        data.append("propertyImage", propertyImage);
axios
          .post("http://localhost:3001/api/formdata", data)
          .then((response) => {
            console.log(response);
            setSuccessMessage("Form submitted successfully!");
            clearSuccessMessageAfterDelay();
            setYourname("");
            setEmail("");
            setPhone("");
            setMassage("");
            setPropertyImage(null);
            alert("Thanks for Joining the Waitlist..! We will contact you soon..")
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
          });
      };
      const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const isValidPhoneNumber = (phone) => {
        // Basic phone number validation regex
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
      };
    
      const clearErrorMessageAfterDelay = () => {
        setTimeout(() => {
          setErrorMessage("");
        }, 3000); 
      };
    
      const clearSuccessMessageAfterDelay = () => {
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); 
      };
      return (
        <div>
          {/*contact start*/}
          <footer id="waitlist-section" className="contact">
            <div className="container">
              <div className="footer-top">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  className="row"
                >
                  <div className="footer-1">
                    <h1>Join our waitlist today</h1>
                    <br />
                    <h3>
                      Questions or thoughts? Our inbox is always open.
                    </h3>
                    <br />
                    <span className="Reach" >Reach out at</span>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-paper-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
                        />
                      </svg>{" "}
                      Email: info@caribbeaneaze.com
                    </a>
                    <br />
                    <div className="social-icon"  ><a style={{ backgroundColor: "#ff6900", marginLeft: "10px", borderRadius: "10px", padding: "7px", height: "45px", width: "45px" }} href="https://www.facebook.com/share/TYQryKj3H81NJA4e/?mibextid=LQQJ4d" target="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                      <a href="https://www.instagram.com/caribbeaneaze?igsh=MWZ2eTR0M3ByZ21h" style={{ backgroundColor: "#ff6900", marginLeft: "10px", borderRadius: "10px", padding: "7px", height: "45px", width: "45px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </a>
                      <a href="https://x.com/caribbeaneaze?t=RkC1DMX4X3PDr18QntJRIQ&s=08" style={{ backgroundColor: "#ff6900", marginLeft: "10px", borderRadius: "10px", padding: "7px", height: "45px", width: "45px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </a>
                    </div>
                  </div>
    
                  <div className="footer-2">
                    <form method = "POST" onSubmit={handleSubmit} name="google-sheet">
                      {errorMessage && <div className="error">{errorMessage}</div>}
                      {successMessage && <div className="success">{successMessage}</div>} 
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          name="name"
                          required
                          onChange={(e) => setYourname(e.target.value)}
                          value={yourname}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          name="email"
                          // required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="CountrySelecter">
                      <PhoneInput style={{color:'black'}}
              country={"us"}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
                        {/* <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          // required
                          minLength={10}
                          maxLength={10}
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        /> */}
                        {/* <CountrySelecter /> */}
                      </div>
                      <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">Upload a picture of your property</label>
                      <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => setPropertyImage(e.target.files[0])}
                        />
                    </div>
                      <label style={{ marginTop: "20px" }} className="massage">
                        <p>Do you own a property or host accommodations in a
                        Caribbean country or on a tropical island worldwide?</p>
                      </label>
    
                      <div className="chekbox">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={flag === 'YES'} 
                            value="YES"
                            onChange={(e) => setFlag(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            YES
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked={flag === 'NO'} 
                            value="NO"
                            onChange={(e) => setFlag(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            NO
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <input style={{ height: "50px" }} className="form-control" id="exampleFormControlTextarea1" placeholder="Message"  value={massage}
                          onChange={(e) => setMassage(e.target.value)} />
                      </div>
                      <div>
                        <button className="submit" type="submit">
                          Submit 
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/.container*/}
    
            <div id="scroll-Top">
              {/* <div className="return-to-top">
        <i
          className="fa fa-angle-up"
          id="scroll-top"
          data-toggle="tooltip"
          data-placement="top"
          title="Back to Top"
          aria-hidden="true"
        ></i>
      </div> */}
              <div className="Appbutton">
                {/* Your website content */}       
                <div className="content">
                  {/* Content here */}
                  {/* This is just a placeholder */}
    
                  {/* Placeholder ends here */}
                </div>
    
                {/* Scroll to top button */}
                {isVisible &&
                  <button className="scrollToTopBtn" onClick={scrollToTop}>
                    <svg style={{ color: "#ff6900" }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                    </svg>
                  </button>
                }
              </div>
            </div>
            {/*/.scroll-Top*/}
          </footer>
          {/*/.contact*/}
          {/*contact end*/}
        </div>
        
      );
    }
    
    export default Register;
    