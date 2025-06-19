'use client';

import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Link,
  Toolbar,
  alpha,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, Instagram } from "@mui/icons-material";
import { MenuItems, MobileMenuItems } from "./menu_items";

const CustomAppBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? alpha(theme.palette.background.paper, 0.8)
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Link href={"/"}>
                <img src="/logo.png" width={200} />
              </Link>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItems />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {/* <ColorModeToggle state={state} dispatch={dispatch} /> */}
              {/* <Login /> */}
              <Link
                href={`https://instagram.com/rosebudquilting_`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram sx={{ color: theme.palette.primary.main }} />
              </Link>
            </Box>

            {/* Mobile menu */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                onClick={() =>
                  setOpen(true)
                }
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor="right"
                open={open}
                onClose={() =>
                  setOpen(false)
                }
              >
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <Close
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        setOpen(false)
                      }
                    />
                    <MobileMenuItems />
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default CustomAppBar;
