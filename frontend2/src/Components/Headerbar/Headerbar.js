import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Headerbar.css';

function Headerbar() {
  const [ setClicked] = useState(false);
  const [ setClicked2] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    // Close the navbar in mobile view
    const navbarMenu = document.getElementById('navbar-menu');
    if (navbarMenu.classList.contains('in')) {
      navbarMenu.classList.remove('in');
    }
  };

  const handleClick = () => {
    setClicked(true);
    document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' });
    handleLinkClick(); // Close navbar on link click
  };

  const handleClick2 = () => {
    setClicked2(true);
    document.getElementById('Home-section').scrollIntoView({ behavior: 'smooth' });
    handleLinkClick(); // Close navbar on link click
  };
  const handleClick3 = () => {
    setClicked2(true);
    document.getElementById('Home-section2').scrollIntoView({ behavior: 'smooth' });
    handleLinkClick(); // Close navbar on link click
  };

  return (
    <div>
      <section id="home" className="welcome-hero">
        <div className="background-video">
          <div className="container">
            <div className="welcome-hero-txt">
              <h1 style={{ marginTop: '80px' }}>CARIBBEANEAZE</h1>
              <h2 style={{ marginTop: '10px' }}>A Free Mind to your Journey!</h2>
              <p>Embark on a journey where each stay is more than just a visit—it’s an experience.</p>
              <button className="welcome-btn" onClick={handleClick}>
                JOIN THE WAITLIST
              </button>
            </div>
          </div>
        </div>

        <div className="top-area">
          <div className={`header-area ${isScrolled ? 'black-background' : ''}`}>
            <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">

                  <i class="fa-solid fa-bars"></i>
                  </button>
                  <img alt='' className="imageslogo" src="assets/images/CARIBBEANEAZE__2_-1-removebg-preview.png"></img>
                  <span></span>

                </div>
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li className="scroll active">
                      <a href="#home" onClick={handleLinkClick}>home</a>
                    </li>
                    <li className="scroll">
                      <a href="#why-us" onClick={handleClick3}>Why Us</a>
                    </li>
                    <li className="scroll">
                      <a href="#faq" onClick={handleClick2}>FAQ</a>
                    </li>
                    <li className="scroll">
                      <a href="#join-waitlist" onClick={handleClick}>Join Waitlist</a>
                    </li>
                    {/* <li className="scroll">
                      <a href="#contact" onClick={handleClick}>contact</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
      <div id='Home-section2'></div>
    </div>

  );
}

export default Headerbar;
