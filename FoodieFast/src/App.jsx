import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import HomePage from "./customer/pages/HomePage/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage></HomePage>
    </ThemeProvider>
  );
};

export default App;
