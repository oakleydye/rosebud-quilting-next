'use client';

import * as React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "@/styles/hero.css";

const HeroSection: React.FC = () => {
  const [text, setText] = React.useState<string>(
    "Craft Your Quilting Dreams with Rosebud Quilting"
  );
  const textRef = React.useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    const handleAnimationIteration = () => {
      setText((prevText) =>
        prevText === "Craft Your Quilting Dreams with Rosebud Quilting"
          ? "Professional Quilting Services to Bring Your Creations to Life"
          : "Craft Your Quilting Dreams with Rosebud Quilting"
      );
    };

    const node = textRef.current as unknown as HTMLElement;
    if (node) {
      node.addEventListener("animationiteration", handleAnimationIteration);

      return () => {
        node.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      };
    }
  }, []);

  return (
    <React.Fragment>
      <Box
        id="hero"
        sx={{
          height: "70vh",
          width: "100vw",
          boxSizing: "border-box",
          backgroundImage: "url(/images/hero2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isSmallScreen ? "70vh" : "70%",
          mixBlendMode: "unset",
          backgroundImage: (theme) =>
            `linear-gradient(to bottom, ${alpha(
              theme.palette.primary.light,
              0.0
            )}, ${alpha(theme.palette.background.default, 1)})`,
        }}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          zIndex: 1,
          height: "100%",
          mt: -55,
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            width: { xs: "95%", sm: "95%" },
            height: "100%",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              py: 15,
              px: 5,
              borderRadius: 2,
              minWidth: { xs: "95%", sm: "100%" },
              maxWidth: { xs: "95%", sm: "100%" },
              textAlign: "center",
            }}
          >
            {isSmallScreen ? (
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                  textAlign: "center",
                  overflow: "hidden",
                  whiteSpace: "normal",
                  lineHeight: "normal",
                }}
              >
                {text}
              </Typography>
            ) : (
              <Typography
                variant="h4"
                component="h1"
                ref={textRef}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignSelf: "center",
                  textAlign: "center",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  borderRight: "2px solid",
                  animation: `typing 8s steps(40, end) infinite`,
                  lineHeight: "normal",
                }}
              >
                {text}
              </Typography>
            )}

            <Typography gutterBottom sx={{ mt: 5 }}>
              Discover the elegance and precision of our long arm quilting
              services. Whether you're a seasoned quilter or just starting out,
              Rosebud Quilting is here to transform your quilt tops into
              stunning, heirloom-quality pieces.
            </Typography>

            <Button sx={{ mt: 2 }} variant="contained">
              Get Started Today
            </Button>
          </Card>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default HeroSection;
