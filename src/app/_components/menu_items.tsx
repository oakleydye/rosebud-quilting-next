"use client";

import { Box, Divider, MenuItem, Typography } from "@mui/material";
import * as React from "react";

const items = [
  {
    sectionName: "about",
    sectionHeader: "About Us",
  },
  {
    sectionName: "work",
    sectionHeader: "Our Work",
  },
  {
    sectionName: "faq",
    sectionHeader: "FAQs",
  },
  {
    sectionName: "contact",
    sectionHeader: "Contact Us",
  },
];

const scrollToSection = (sectionName: string) => {
  const sectionElement = document.getElementById(sectionName);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }
};

export const MenuItems: React.FC = () => {
  return (
    <React.Fragment>
      {items.map((x) => (
        <MenuItem
          key={x.sectionName + "key"}
          onClick={() => scrollToSection(x.sectionName)}
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="body2" color="text.primary">
            {x.sectionHeader}
          </Typography>
        </MenuItem>
      ))}
    </React.Fragment>
  );
};

export const MobileMenuItems: React.FC = () => {
  return (
    <React.Fragment>
      <Box>
        <img src="/footer_logo.png" width={200} />
      </Box>
      <Divider variant="fullWidth" />
      {items.map((x) => (
        <MenuItem
          key={x.sectionName + "mobile-key"}
          onClick={() => scrollToSection(x.sectionName)}
        >
          {x.sectionHeader}
        </MenuItem>
      ))}
      {/* <Divider />
            <MenuItem>
                <Button color='primary' variant='contained' component='a' href='' sx={{ width: '100%' }}>
                    Sign Up
                </Button>
            </MenuItem>
            <MenuItem>
                <Button color='primary' variant='outlined' component='a' href='' sx={{ width: '100%' }}>
                    Sign In
                </Button>
            </MenuItem> */}
    </React.Fragment>
  );
};
