'use client';

import ContactForm from '@/app/_components/contact_form';
import { Card, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';

const ContactSection : React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (  
        <React.Fragment>
            <Container maxWidth='lg' sx={{ mt: 10, pt: 5 }}>
                <Card sx={{ pt: 5, px: 5 }}>
                    <Typography variant={isMobile ? 'h4' : 'h2'} gutterBottom >
                        Contact Us
                    </Typography>
                    <ContactForm />
                </Card>
            </Container>
        </React.Fragment>
    );
}
 
export default ContactSection;