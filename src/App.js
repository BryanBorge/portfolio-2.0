import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Navigation/Header/Header";
import AboutMe from "./Pages/About";
import Experience from "./Pages/Experience";
import Landing from "./Pages/Landing";
import { theme } from "./theme/theme";

function App() {
  const customTheme = createTheme(theme);

  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <div
        style={{
          height: "100vh",
          minHeight: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Landing />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          minHeight: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <AboutMe />
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Experience />
      </div>
    </ThemeProvider>
  );
}

export default App;
