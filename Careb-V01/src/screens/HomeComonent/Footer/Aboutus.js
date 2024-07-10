import React from 'react';
import './aboutus.css'; // Make sure to create and add your CSS here

const Aboutus = () => {
  return (
    <div style={{width:'90%',margin:'0 auto'}}>
      <section className="about" id="about">
        <div className="about-img">
          <img src={require('./image/aboutus.png')} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About <span>US</span></h2>
          <p>
            Caribbeaneaze is an emerging online platform designed to connect travelers with the warmest getaways offered by local hosts in warm-climate destinations. Our mission is to facilitate memorable experiences by linking guests with authentic local cultures and cuisines. As we grow, we invite hosts to join us in showcasing their properties and unique offerings. Caribbeaneaze is committed to creating connections that turn holiday dreams into reality.
            Discover a world where each trip enriches your life with Caribbeaneaze—your next adventure awaits.
          </p>
          <p>
         
          <h4 style={{textAlign:'center',color:'black'}}>Our <span>Story</span></h4>
Caribbeaneaze was born out of a desire to share the beauty and simplicity of life in tropical paradises. Between 2020 and 2023, we observed a significant trend of people seeking refuge in warm climate countries, not just as a temporary escape, but as a profound shift towards appreciating the simplicity and beauty of life in these regions.

As someone who was born in the islands and later moved abroad to a colder climate, I deeply understand the allure and tranquility of tropical paradises. Witnessing people flock to these destinations, transforming them into havens of relaxation and rejuvenation, inspired the creation of Caribbeaneaze.

          </p>
        </div>
      </section>

      <section className="abouts" id="about">
        <div className="about-text">
          <h2>Our<span> Mission</span></h2>
          <p>
            Our mission is to provide a seamless, user-friendly experience for both hosts and guests. We aim to promote the rich culture and natural beauty of tropical paradises by connecting travelers with unique and memorable stays. At the same time, we support hosts in showcasing their properties and reaching a global audience.
          </p>
        </div>
        <div className="about-img">
          <img src={require('./image/mission.png')} alt="Our Mission" />
        </div>
      </section>

      <section className="about" >
        <div className="about-img">
          <img src={require('./image/vission.png')} alt="Our Vision" />
        </div>
        <div className="about-text">
          <h2>Our<span> Vision</span></h2>
          <p>
            Our vision is to bridge the gap between travelers and the hidden gems of Caribbean countries and tropical islands worldwide. We aim to offer a platform that celebrates the unique charm and warmth of these locations. We envision a world where every traveler can find their perfect getaway, and every host can share their slice of paradise with ease and pride.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
