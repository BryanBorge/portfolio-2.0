import { PRIMARY_COLOR, SECONDARY_COLOR } from "./contants";

export const theme = {
  palette: { primary: { main: PRIMARY_COLOR }, secondary: { main: SECONDARY_COLOR } },
  typography: {
    h1: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    h3: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    h4: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    h5: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    p: {
      fontFamily: "Poppins",
      fontSize: "18px",
      color: "#FFFFFF",
    },
    subtitle1: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    subtitle2: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "#FFFFFF",
    },
    body2: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    button: {
      fontFamily: "Poppins",
    },
    caption: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
    overline: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
    },
  },
  overrides: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiButtonBase-root.MuiTab-root": {
            fontSize: "20px",
          },
        },
      },
    },
  },
};
