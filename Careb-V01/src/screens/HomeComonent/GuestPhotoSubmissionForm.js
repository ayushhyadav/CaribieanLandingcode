import React, { Component } from 'react';
import { Container, Typography, TextField, Checkbox, Button, FormControlLabel } from '@material-ui/core';

export default class HostPhotoSubmissionForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log('Form submitted');
    };

    render() {
        return (
            <Container maxWidth="sm">
                <Typography variant="h1" gutterBottom>
                    Caribbeaneaze Host Photo Submission Form
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h2" gutterBottom>
                        Host Information:
                    </Typography>
                    <TextField
                        id="name"
                        name="name"
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone Number (optional)"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Typography variant="h2" gutterBottom>
                        Photo Submission:
                    </Typography>
                    <input
                        id="photos"
                        name="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        required
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        id="description"
                        name="description"
                        label="Photo Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Typography variant="h2" gutterBottom>
                        Consent and Permissions:
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox id="consent" name="consent" required />}
                        label="I agree to the terms and conditions and grant Caribbeaneaze permission to use my photos for marketing and promotional purposes."
                    />
                    <TextField
                        id="signature"
                        name="signature"
                        label="Signature"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Typography variant="h2" gutterBottom>
                        Additional Information (Optional):
                    </Typography>
                    <TextField
                        id="location"
                        name="location"
                        label="Location of Photo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="social"
                        name="social"
                        label="Social Media Handles"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Typography variant="h2" gutterBottom>
                        Incentives:
                    </Typography>
                    <Typography gutterBottom>
                        Submit your photos and receive [describe incentive].
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Acknowledgement:
                    </Typography>
                    <Typography gutterBottom>
                        Thank you for contributing to Caribbeaneaze! Your photos help us showcase the beauty and unique experiences of our properties.
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '1rem' }}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        );
    }
}
