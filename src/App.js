import SortingVisualizer from "./components/SortingVisualizer";
import "./utils.css";
import "./variables.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import Pathheader from "./components/Header/PathHeader";
import Header from "./components/Header/Header";

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
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact>
          <div className={"App"}>
            <SortingVisualizer />
          </div>
          {/* <Redirect to="/sorting-algos" />
          <Route path="/sorting-algos" exact>
            <div className={classes.app}>
              <SortingVisualizer />
            </div>
          </Route> */}
        </Route>
        <Route path="/path-finding-algos">
          <Header>
            <Pathheader />
          </Header>
          <h1 className="header-logo">Yet to be designed</h1>
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
