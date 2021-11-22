import SortingVisualizer from "./components/SortingVisualizer";
import classes from "./App.module.css";
import "./utils.css";
import "./variables.css";
import Header from "./components/Header/Header";
import Sortheader from "./components/Header/SortHeader";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Sortheader />
      </Header>
      <div className={classes.app}>
        <SortingVisualizer />
      </div>
    </Router>
  );
}

export default App;
