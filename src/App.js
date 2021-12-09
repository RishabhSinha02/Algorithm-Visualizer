import SortingVisualizer from "./components/SortingVisualizer";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./variables.css";
import "./utils.css";

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
        <div className="App">
          <SortingVisualizer />
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
