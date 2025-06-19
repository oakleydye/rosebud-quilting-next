'use client';

import { themeOptions } from "@/styles/theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Provider as JotaiProvider } from "jotai";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const theme = createTheme(themeOptions);

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </SnackbarProvider>
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default Providers;
