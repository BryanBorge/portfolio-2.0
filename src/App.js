import ContentLayout from "./contentLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GRAY, TEAL } from "./constants";

function App() {
  const theme = createTheme({
    palette: { primary: { main: GRAY }, secondary: { main: TEAL } },
    typography: {
      h1: {
        fontFamily: "Poppins",
      },
      h2: {
        fontFamily: "Poppins",
      },
      h3: {
        fontFamily: "Poppins",
      },
      h4: {
        fontFamily: "Poppins",
      },
      h5: {
        fontFamily: "Poppins",
      },
      h6: {
        fontFamily: "Poppins",
      },
      p: {
        fontFamily: "Poppins",
        fontSize: "16px",
      },
      subtitle1: {
        fontFamily: "Poppins",
      },
      subtitle2: {
        fontFamily: "Poppins",
      },
      body1: {
        fontFamily: "Poppins",
      },
      body2: {
        fontFamily: "Poppins",
      },
      button: {
        fontFamily: "Poppins",
      },
      caption: {
        fontFamily: "Poppins",
      },
      overline: {
        fontFamily: "Poppins",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContentLayout />
    </ThemeProvider>
  );
}

export default App;
