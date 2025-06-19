'use client';

import { imageData } from "@/lib/masonry_images";
import { Masonry } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";

const OurWork: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [numImagesToShow, setNumImagesToShow] = React.useState(6);

  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: theme.palette.background.paper, pt: 5, mt: 5 }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h2"
          gutterBottom
          sx={{ my: 10, textAlign: "center" }}
        >
          Our Work
        </Typography>

        <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
          {imageData.slice(0, numImagesToShow).map((x) => (
            <Card key={x.src} sx={{ borderRadius: 2 }}>
              <img
                src={x.src}
                alt={x.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          ))}
        </Masonry>

        {numImagesToShow < imageData.length && (
          <Box sx={{ display: "flex", justifyContent: "center", pb: 5 }}>
            <Button
              variant="outlined"
              sx={{ mt: 5 }}
              onClick={() => setNumImagesToShow(imageData.length)}
            >
              Show More
            </Button>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
};

export default OurWork;
