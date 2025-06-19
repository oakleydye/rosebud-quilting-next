"use client";

import {
  Box,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Divider sx={{ my: 5 }} />
      <footer className="footer">
        <div className="footer-content">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              mb: "1rem",
              justifyContent: "space-between",
              gap: 5,
              mx: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="footer-section"
            >
              <Link href={`/`}>
                <img
                  src="/footer_logo.png"
                  alt="Rosebud Quilting"
                  width={150}
                />
              </Link>
            </Box>
            {/* <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Company</Typography>
                            <ul>
                                <Link sx={{ color: '#FFFFFF' }} href={`/about`}><li>About Us</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services`}><li>Services</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/portfolio`}><li>Portfolio</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/testimonials`}><li>Testimonials</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/contact`}><li>Contact Us</li></Link>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Services</Typography>
                            <ul>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/weddings`}><li>Weddings</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/dances`}><li>Dances</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/parties`}><li>Parties</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/corporate-events`}><li>Corporate Events</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/live-sound`}><li>Live Sound</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/services/gear-rental`}><li>Gear Rental</li></Link>
                            </ul>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='footer-section'>
                            <Typography variant='h6'>Legal</Typography>
                            <ul>
                                <Link sx={{ color: '#FFFFFF' }} href={`/legal/privacy-policy`}><li>Privacy Policy</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/legal/terms-and-conditions`}><li>Terms & Conditions</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/legal/cookie-policy`}><li>Cookie Policy</li></Link>
                                <Link sx={{ color: '#FFFFFF' }} href={`/legal/disclaimer`}><li>Disclaimer</li></Link>
                            </ul>
                        </Box> */}
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              className="footer-section"
            >
              <Typography variant="h6">Contact Us</Typography>
              <ul>
                <Link
                  sx={{ color: theme.palette.text.primary }}
                  href={"tel:+18016087461"}
                >
                  <li>801-608-7461</li>
                </Link>
                <Link
                  sx={{ color: theme.palette.text.primary }}
                  href={"mailto:diana@rosebudquilting.com"}
                >
                  <li>diana@rosebudquilting.com</li>
                </Link>
                <li>Hyrum, UT</li>
              </ul>
            </Box>
          </Box>
        </div>
        <div
          className="footer-bottom"
          style={{ marginTop: 50, marginBottom: 20, marginLeft: 50 }}
        >
          <p>
            &copy; 2024 Rosebud Quilting. All Rights Reserved. Website by{" "}
            <Link href="https://oakleydye.com">
              Oakley Dye Software &amp; Design.
            </Link>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
