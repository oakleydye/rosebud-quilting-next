"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component="h2"
              gutterBottom
              sx={{ mb: 10 }}
            >
              About Us
            </Typography>
            <Typography variant="body1" component="p">
              Welcome to Rosebud Quilting, where your passion for quilting meets
              our dedication to excellence. With years of experience and a deep
              love for the art of quilting, we specialize in providing top-notch
              long arm quilting services. Our state-of-the-art equipment and
              meticulous attention to detail ensure that every quilt we handle
              is finished to perfection. At Rosebud Quilting, we believe that
              every quilt tells a story, and we're here to help you tell yours
              with beauty and precision.
            </Typography>
          </Box>
          <Box>
            <img
              src="/images/masonryGrid/studio.webp"
              alt="Our Studio"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AboutSection;
