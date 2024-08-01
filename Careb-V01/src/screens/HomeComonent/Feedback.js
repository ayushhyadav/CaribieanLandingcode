import React, { useState } from 'react';
import './feedback.css';
import { Link } from 'react-router-dom';

function Feedback() {
  const [activeForm, setActiveForm] = useState('signUp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    consent: false,
    signature: '',
    location: '',
    social: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    consent: false,
    signature: false
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormToggle = (form) => {
    setActiveForm(form);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...formErrors };

    // Basic validation for required fields
    errors.name = formData.name.trim() === '';
    errors.email = formData.email.trim() === '';
    errors.consent = !formData.consent;
    errors.signature = formData.signature.trim() === '';

    // Update the state with errors
    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (!Object.values(errors).some(err => err)) {
      console.log('Form submitted:', formData);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div className="Feedbackmain">
        <div className="form-toggle">
          <a
            style={{
              width: '50%',
              padding: 10,
              border: 'none',
              backgroundColor: activeForm === 'signUp' ? '#0073e6' : '#34495e41',
              color: '#fff',
              cursor: 'pointer',
              transition: 'backgroundColor 0.3s ease',
              textDecoration: 'none'
            }}
            id="signUpBtn"
            className={activeForm === 'signUp' ? 'active' : ''}
            onClick={() => handleFormToggle('signUp')}
          >
            Host Feedback
          </a>
          <a
            style={{
              width: '50%',
              padding: 10,
              border: 'none',
              backgroundColor: activeForm === 'logIn' ? '#0073e6' : '#34495e41',
              color: '#fff',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            id="logInBtn"
            className={activeForm === 'logIn' ? 'active' : ''}
            onClick={() => handleFormToggle('logIn')}
          >
            Guest Feedback
          </a>
        </div>
        <div className="form-container">
          {activeForm === 'signUp' && (
            <form id="signUpForm" className="form active" onSubmit={handleSubmit}>
              <h1 style={{ textAlign: 'center' }}>Caribbeaneaze Host Photo Submission Form</h1>
              <h3 style={{ color: 'black' }}>Host Information:</h3>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              {formErrors.name && <span className="error">Name is required</span>}

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              {formErrors.email && <span className="error">Email is required</span>}

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />

              <h3 style={{ color: 'black' }}>Photo Submission:</h3>
              <label htmlFor="photos">Upload Photos:</label>
              <input type="file" id="photos" name="photos" accept="image/*" multiple required />

              <label htmlFor="description">Photo Description:</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="4" cols="50"></textarea>

              <h3 style={{ color: 'black' }}>Consent and Permissions:</h3>
              <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleInputChange} required />
              <label htmlFor="consent"> I agree to the terms and conditions and grant Caribbeaneaze permission to use my photos for marketing and promotional purposes.</label>
              {formErrors.consent && <span className="error">Consent is required</span>}

              <label htmlFor="signature">Signature:</label>
              <input type="text" id="signature" name="signature" value={formData.signature} onChange={handleInputChange} required />
              {formErrors.signature && <span className="error">Signature is required</span>}

              <h3 style={{ color: 'black' }}>Additional Information</h3>
              <label htmlFor="location">Location of Photo:</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />

              <label htmlFor="social">Social Media Handles:</label>
              <input type="text" id="social" name="social" value={formData.social} onChange={handleInputChange} />

              <h3 style={{ color: 'black' }}>Incentives:</h3>
              <p>
                Share your property photos and get a 10% incentive! 
                <Link onClick={toggleModal} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                  T&C Apply
                </Link>
              </p>

              <h3 style={{ color: 'black' }}>Acknowledgement:</h3>
              <p>Thank you for contributing to Caribbeaneaze! Your photos help us showcase the beauty and unique experiences of our properties.</p>

              <input type="submit" value="Submit" />
            </form>
          )}
          {activeForm === 'logIn' && (
            <form id="logInForm" className="form active" onSubmit={handleSubmit}>
              <h1>Caribbeaneaze Guest Photo Submission Form</h1>
              <h3 style={{ color: 'black' }}>Guest Information:</h3>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />

              <h3 style={{ color: 'black' }}>Photo Submission:</h3>
              <label htmlFor="photos">Upload Photos:</label>
              <input type="file" id="photos" name="photos" accept="image/*" multiple required />

              <label htmlFor="description">Photo Description:</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="4" cols="50"></textarea>

              <h3 style={{ color: 'black' }}>Acknowledgement:</h3>
              <p>Thank you for contributing to Caribbeaneaze! Your feedback helps us improve our services.</p>

              <input type="submit" value="Submit" />
            </form>
          )}
        </div>

        {/* Modal for Terms and Conditions */}
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>&times;</span>
              <h4>Terms and Conditions for 10% Incentive</h4>
              <ul>
                <li><strong>Eligibility:</strong> Offer valid for first-time hosts only.</li>
                <li><strong>Photo Submission:</strong> Hosts must upload a minimum of 5 high-quality photos of their property.</li>
                <li><strong>Incentive Details:</strong> The 10% incentive will be applied to the first booking made through the platform.</li>
                <li><strong>Verification:</strong> All photos must be verified by our team to ensure they meet quality standards.</li>
                <li><strong>Promotional Use:</strong> Photos submitted may be used by the platform for promotional purposes.</li>
                <li><strong>Changes:</strong> Terms and conditions are subject to change without prior notice.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;
