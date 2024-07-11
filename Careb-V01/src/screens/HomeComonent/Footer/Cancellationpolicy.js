import React from "react";
import { Typography, Container, List, ListItem, ListItemText } from "@material-ui/core";
import HomeHeader from "../HomeHeader";
import Footer from "./Footer";
function CancellationPolicy() {
  return (
  <div>
    <HomeHeader/>
      <Container  className="privacy-policy-container">
      <Typography variant="h4" style={{ color: "#0073e6" ,textAlign:'center'}} gutterBottom>
        Cancellation Policy
      </Typography>
      <Typography variant="body1"  paragraph>
        At Caribbeaneaze, we understand that plans can change. This cancellation
        policy outlines the terms and conditions under which cancellations are
        accepted and refunds are processed.
      </Typography>

      <Typography variant="h5" style={{ color: "#0073e6" }} gutterBottom>
        Cancellation by Customer
      </Typography>
      <Typography variant="body1"  paragraph>
        If you need to cancel your booking, please contact us as soon as
        possible. Cancellations made within 24 hours of booking will receive a
        full refund. Cancellations made after 24 hours may be subject to
        cancellation fees.
      </Typography>

      <Typography variant="h5" style={{ color: "#0073e6" }} gutterBottom>
        Cancellation Fees
      </Typography>
      <Typography variant="body1"  paragraph>
        Cancellations made after 24 hours from the time of booking may incur a
        cancellation fee of up to 50% of the total booking amount. The exact fee
        will depend on the terms and conditions of the service provider.
      </Typography>

      <Typography variant="h5" style={{ color: "#0073e6" }} gutterBottom>
        Non-Refundable Services
      </Typography>
      <Typography variant="body1"  paragraph>
        Certain services are non-refundable and cannot be canceled once booked.
        These include but are not limited to:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Special event tickets" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Non-refundable hotel bookings" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Custom travel packages" />
        </ListItem>
      </List>

      <Typography variant="h5" style={{ color: "#0073e6" }} gutterBottom>
        Refund Process
      </Typography>
      <Typography variant="body1" paragraph>
        If eligible, refunds will be processed within 7-10 business days to the
        original method of payment. We will notify you once your refund has been
        processed.
      </Typography>

      <Typography variant="h5" style={{ color: "#0073e6" }} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about our cancellation policy, please contact
        our support team at <a href="mailto:support@Caribbeaneaze.com">support@Caribbeaneaze.com</a>.
      </Typography>
    </Container>
    <Footer/>
  </div>
  );
}

export default CancellationPolicy;
