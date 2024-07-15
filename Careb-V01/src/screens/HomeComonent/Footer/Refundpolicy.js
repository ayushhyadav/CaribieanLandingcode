import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';
import HomeHeader from '../HomeHeader';

const StyledContainer = styled(Container)({
  textAlign:'center',
  margin:'0 auto',
  padding: '20px',
  borderRadius:10,
  boxShadow:'0 2px 10px rgba(0, 0, 0, 0.1)'
});

const StyledHeading = styled(Typography)({
  color: '#0073e6',
});

const RefundPolicy = () => {
  return (
    <div>
      <HomeHeader />
      <StyledContainer className="refund-policy-container">
        <StyledHeading variant="h4" gutterBottom>
          REFUND POLICY
        </StyledHeading>
        <Typography variant="subtitle1" gutterBottom>
          www.caribbeaneaze.com<br />
          Effective date: June 26, 2024
        </Typography>

        <List>
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">1. Policy Overview</StyledHeading>}
              secondary="This Refund Policy applies to all bookings made through Caribbeaneaze. It outlines the terms under which refunds are processed and provides guidance to both guests and hosts regarding cancellation and refund procedures."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">2. Refund Eligibility</StyledHeading>}
              secondary="Refunds are available to guests under certain conditions, as outlined by the host's chosen refund policy. The eligibility for a refund depends on the specific circumstances of the cancellation and adherence to the set policy."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">3. Service Fees in Relation to Refund and Cancellation Policies</StyledHeading>}
              secondary={
                <>
                  <Typography>
                    Service fees at Caribbeaneaze are structured to align with the refund and cancellation policies set by our hosts. The basic fee for using Caribbeaneaze is 6% for guests of the total booking cost.
                  </Typography>
                  <Typography>
                    Hosts have the discretion to set up their cancellation policies, which directly impact the service fee structure. For example:
                  </Typography>
                  <ul>
                    <li>Canceling on the day of check-in: The applicable service fee depends on whether it's no refund, partial refund, or full refund.</li>
                    <li>Canceling 8 days before check-in: This could result in a full refund, with a service fee of 8%.</li>
                    <li>Canceling 3 days before check-in: The service fee might be 9% for a partial refund, depending on the host's policy.</li>
                  </ul>
                  <Typography>
                    These variations in service fees are designed to provide flexibility and choice for hosts while maintaining transparency for guests regarding potential charges when booking.
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">4. Host-Set Refund Policies</StyledHeading>}
              secondary="Hosts on Caribbeaneaze can choose between three types of refund policies for their listings: Full Refund, Partial Refund, or No Refund. This choice influences the service fee structure and must be clearly communicated to guests before booking."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">5. Cancellation Process and Deadlines</StyledHeading>}
              secondary="Guests must follow the cancellation process outlined on Caribbeaneaze to be eligible for a refund. Deadlines for cancellations leading to different types of refunds are set by the host and must be adhered to for eligibility."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">6. Refund Processing</StyledHeading>}
              secondary="Upon a valid cancellation, refunds are processed back to the original payment method within a specified timeframe. The exact timeline and method of refund will be communicated to the guest."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">7. Service Fees and Refunds</StyledHeading>}
              secondary="Service fees charged by Caribbeaneaze are generally non-refundable. Exceptions to this rule, if any, will be clearly stated in the individual host's cancellation policy."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">8. Insurance Fee Refunds</StyledHeading>}
              secondary="For property owners who pay insurance fees for property protection, the refund of these fees is subject to the terms and conditions of the third-party insurance provider and the specific circumstances of the claim."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">9. Evidence Requirements for Damage Claims</StyledHeading>}
              secondary="Hosts may claim damages from guests. In such cases, hosts must provide clear evidence (photos, videos, receipts) within a specified timeframe post-checkout to support their claim."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">10. Dispute Resolution</StyledHeading>}
              secondary="In case of disputes related to refunds, Caribbeaneaze offers a mediation process. However, final decisions regarding refunds rest with the host, unless Caribbeaneaze determines that a deviation from the policy is warranted."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">11. Compliance with Local Laws</StyledHeading>}
              secondary="This policy is designed to be in compliance with the local laws of each jurisdiction where Caribbeaneaze operates. In case of any conflict, local laws take precedence."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">12. Modification of Policy</StyledHeading>}
              secondary="Caribbeaneaze reserves the right to modify this Refund Policy. All changes will be effective immediately upon posting, and users will be notified of significant changes."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">13. Contact Information</StyledHeading>}
              secondary="For inquiries or assistance regarding refunds, users can contact Caribbeaneaze through support@Caribbeaneaze.com."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">14. Affiliator Refund Policies</StyledHeading>}
              secondary="Refund policies for services offered by affiliates are subject to the terms set by each affiliate and are independent of Caribbeaneaze’s policy."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary={<StyledHeading variant="body1">15. Emergency Cancellations</StyledHeading>}
              secondary="In exceptional circumstances, such as natural disasters or severe weather, Caribbeaneaze may allow cancellations outside of the standard policy."
            />
          </ListItem>
        </List>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
