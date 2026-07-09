"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#2563eb"
    },
    warning: {
      main: "#f97316"
    },
    background: {
      default: "#f8fbfa",
      paper: "#ffffff"
    },
    text: {
      primary: "#17211f",
      secondary: "#52605c"
    }
  },
  typography: {
    fontFamily:
      "var(--font-noto-sans-jp), Noto Sans JP, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: 0
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0
    },
    h3: {
      fontWeight: 800,
      letterSpacing: 0
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(15, 118, 110, 0.14)",
          boxShadow: "0 18px 48px rgba(15, 35, 32, 0.08)"
        }
      }
    }
  }
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
