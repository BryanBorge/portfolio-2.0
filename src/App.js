import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Navigation/Header/Header";
import ContentLayout from "./ContentLayout";
import { theme } from "./theme/theme";

function App() {
  const customTheme = createTheme(theme);

  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <ContentLayout />
    </ThemeProvider>
  );
}

export default App;

