import React from 'react';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        height:'100%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        padding: '20px',
        borderRadius: '10px', // Allow scrolling if content exceeds modal height
    },
}));

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height:'100%',
    bgcolor: 'transparent',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    // maxHeight: '80vh',
    overflowY: 'auto',
  };
const PolicyModal = ({ isOpen, onClose }) => {
    // const classes = useStyles();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Cookies Policy Modal"
            style={{
                // overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                // content: { ...classes.modal },
                useStyles
            }}
        >
            <Box sx={modalStyle}>
                <Typography variant="h5" gutterBottom>
                    Our Cookies Policy
                </Typography>
                    
                    <Typography variant="body1" gutterBottom>
                    <a href="https://www.caribbeaneaze.com" target="_blank" rel="noopener noreferrer">
                        www.caribbeaneaze.com
                    </a>
                </Typography>

                <Typography variant="body1" gutterBottom>
                    <strong>Effective date:</strong>26 june 2024
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>1. Introduction</strong>
                    <br />
                    Welcome to Caribbeaneaze. This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website [https://www.caribbeaneaze.com]. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>2. What Are Cookies?</strong>
                    <br />
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>3. Why Do We Use Cookies?</strong>
                    <br />
                    We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics, performance, and functionality, and in some cases, for targeting and advertising purposes.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>4. Types of Cookies We Use</strong>
                    <br />
                    <ul>
                        <li>Essential Cookies: Necessary for website functionality.</li>
                        <li>Performance and Functionality Cookies: Enhance website performance.</li>
                        <li>Analytics and Customization Cookies: Collect aggregate data for site improvement.</li>
                        <li>Advertising Cookies: Tailor advertising to user interests.</li>
                    </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>5. Control of Cookies</strong>
                    <br />
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie consent banner.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>6. Third-Party Cookies</strong>
                    <br />
                    Some cookies set on our website are not set on a first-party basis by Caribbeaneaze. Third-party cookies include Google Analytics, social media integrations, and advertising platforms.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>7. Do Not Track</strong>
                    <br />
                    Our website does not currently respond to "Do Not Track" signals from browsers.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>8. Policy Updates</strong>
                    <br />
                    This Cookie Policy may be updated to reflect changes in practices, operational needs, or legal requirements.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong style={{ color: '#1976D2' }}>9. Contact Us</strong>
                    <br />
                    If you have any questions about our use of cookies or other technologies, please email us at support@caribbeaneaze.com.
                </Typography>

                <Button variant="contained" color="primary" onClick={onClose} style={{ marginTop: '20px',width:'100px' }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default PolicyModal;
