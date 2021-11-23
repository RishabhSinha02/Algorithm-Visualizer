import SortingVisualizer from "./components/SortingVisualizer";
import classes from "./App.module.css";
import "./utils.css";
import "./variables.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#1d566e",
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <SortingVisualizer />
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
