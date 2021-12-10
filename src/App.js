import SortingVisualizer from "./components/SortingVisualizer";
import "./utils.css";
import "./variables.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import Pathheader from "./components/Header/PathHeader";
import Header from "./components/Header/Header";
import Logo from "./Assets/test.png";
import { useState, useEffect } from "react";

import "./variables.css";
import "./utils.css";
import Model from "./components/Model/Model";
import PathfindingVisualizer from "./components/PathfindingVisualizer";

function App() {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    setShowModel(true);
  }, []);

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#1d566e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact>
          <div className={"App"}>
            <Model
              show={showModel}
              showModel={(boolean) => setShowModel(boolean)}
            />
            <SortingVisualizer />
          </div>
        </Route>
        <Route path="/path-finding-algos">
          <Header>
            <Pathheader />
          </Header>
          <PathfindingVisualizer />
          {/* <div style={{ textAlign: "center" }}> */}
          {/* <img
              style={{ width: "90%", margin: "50px auto" }}
              src={Logo}
              alt="placeholder"
            />
          </div> */}
          {/* <h1 className="header-logo">Yet to be designed</h1> */}
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
