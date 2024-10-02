import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0", // Light grey
          200: "#c2c2c2", // Medium light grey
          300: "#a3a3a3", // Medium grey
          400: "#545454", // Text grey
          500: "#666666", // Darker grey
          600: "#525252", // Dark grey
          700: "#3d3d3d", // Darker grey
          800: "#292929", // Almost black
          900: "#141414", // Black
        },
        primary: {
          100: "#d0d1d5", // Light shade
          200: "#a1a4ab", // Medium light shade
          300: "#727681", // Medium shade
          400: "#101624", // Modified slightly
          500: "#1B447E", // Dark Blue
          600: "#101624", // Deeper shade
          700: "#0c101b", // Very dark
          800: "#080b12", // Nearly black
          900: "#040509", // Black
        },
        greenAccent: {
          100: "#dbf5ee", // Very light green
          200: "#b7ebde", // Light green
          300: "#94e2cd", // Medium light green
          400: "#70d8bd", // Medium green
          500: "#8EC342", // Green Accent
          600: "#6db534", // Darker accent green
          700: "#4f8830", // Dark green
          800: "#2e7c24", // Even darker green
          900: "#0f2922", // Deep forest green
        },
        redAccent: {
          100: "#f8dcdb", // Light red
          200: "#f1b9b7", // Medium light red
          300: "#e99592", // Medium red
          400: "#e2726e", // Darker red
          500: "#db4f4a", // Red
          600: "#af3f3b", // Darker red
          700: "#832f2c", // Deep red
          800: "#58201e", // Very dark red
          900: "#2c100f", // Blackish red
        },
        blueAccent: {
          100: "#e1e2fe", // Light blue
          200: "#c3c6fd", // Medium light blue
          300: "#a4a9fc", // Medium blue
          400: "#868dfb", // Darker blue
          500: "#6870fa", // Blue
          600: "#535ac8", // Darker blue
          700: "#3e4396", // Deep blue
          800: "#2a2d64", // Very dark blue
          900: "#151632", // Blackish blue
        },
      }
    : {
        grey: {
          100: "#141414", // Black
          200: "#292929", // Dark grey
          300: "#3d3d3d", // Darker grey
          400: "#545454", // Text grey
          500: "#666666", // Medium dark grey
          600: "#858585", // Medium grey
          700: "#a3a3a3", // Medium light grey
          800: "#c2c2c2", // Light grey
          900: "#e0e0e0", // Very light grey
        },
        primary: {
          100: "#e0e0e0", // Light grey
          200: "#d0d1d5", // Medium light grey
          300: "#a1a4ab", // Medium grey
          400: "#f2f0f0", // Very light grey
          500: "#1B447E", // Dark Blue for light mode
          600: "#434957", // Darker shade
          700: "#727681", // Medium shade
          800: "#a1a4ab", // Light shade
          900: "#d0d1d5", // Very light shade
        },
        greenAccent: {
          100: "#dbf5ee", // Very light green
          200: "#b7ebde", // Light green
          300: "#94e2cd", // Medium light green
          400: "#70d8bd", // Medium green
          500: "#8EC342", // Green Accent
          600: "#6db534", // Darker accent green
          700: "#4f8830", // Dark green
          800: "#2e7c24", // Even darker green
          900: "#0f2922", // Deep forest green
        },
        redAccent: {
          100: "#2c100f", // Dark red
          200: "#58201e", // Very dark red
          300: "#832f2c", // Deep red
          400: "#af3f3b", // Darker red
          500: "#db4f4a", // Red
          600: "#e2726e", // Darker red
          700: "#e99592", // Medium red
          800: "#f1b9b7", // Light red
          900: "#f8dcdb", // Very light red
        },
        blueAccent: {
          100: "#151632", // Blackish blue
          200: "#2a2d64", // Dark blue
          300: "#3e4396", // Medium blue
          400: "#535ac8", // Darker blue
          500: "#6870fa", // Blue
          600: "#868dfb", // Light blue
          700: "#a4a9fc", // Medium light blue
          800: "#c3c6fd", // Light blue
          900: "#e1e2fe", // Very light blue
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
