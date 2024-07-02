import React, { useState } from 'react';
import Modal from 'react-modal';
import './ForgotPasswordModal.css';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

Modal.setAppElement('#root');

const ForgotPasswordModal = ({ isOpen, onRequestClose, onPasswordChange }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onPasswordChange(email, newPassword, confirmPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Forgot Password Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-content">
        <h2>Change Password</h2>
        <TextField
          type="text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-fields"
        />
        <TextField
          type={showNewPassword ? 'text' : 'password'}
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input-fields"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton style={{width:30,height:30,background:'none'}} onClick={toggleShowNewPassword}>
                  {showNewPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type={showConfirmPassword ? 'text' : 'password'}
          label="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-fields"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton style={{width:30,height:30,background:"none"}} onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <button style={{ margin: "0.5rem 0"}}onClick={handlePasswordChange} >
          Change Password
        </button>
        <button onClick={onRequestClose} >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
