import SortingVisualizer from "./components/SortingVisualizer";
import "./utils.css";
import "./variables.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import Pathheader from "./components/Header/PathHeader";
import Header from "./components/Header/Header";
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

  const sortData = [
    {
      title: "Bubble Sort",
      list: [
        "Bubble Sort is a simple sorting algorithm which compares the adjacent elements",
        "If the numbers are not in a proper order , then the numbers will be swapped",
      ],
    },
    {
      title: "Merge Sort",
      list: [
        "Merge sort uses the divide and conquer approach to sort the elements",
        "It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves",
        "The sub-lists are divided again and again into halves until the list cannot be divided further",
        "Then combine the pair of one element lists into two-element lists, sorting them in the process",
        "The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.",
      ],
    },
    {
      title: "Insertion Sort",
      list: [
        "Insertion sort is a sorting algorithm that works similar to the way you sort playing cards in your hands",
        "The array is virtually split into a sorted and an unsorted part",
        "Values from the unsorted part are picked and placed at the correct position in the sorted part",
      ],
    },
    {
      title: "Quick Sort",
      list: [
        "Quick Sort is a Divide and Conquer algorithm",
        "It picks an element as pivot and partitions the given array around the picked pivot",
        "Pivot is a centre point or the mid point",
      ],
    },
  ];

  const pathData = [
    {
      title: "Bubble Sort",
      list: [
        "Bubble Sort is a simple sorting algorithm which compares the adjacent elements",
        "If the numbers are not in a proper order , then the numbers will be swapped",
      ],
    },
    {
      title: "Merge Sort",
      list: [
        "Merge sort uses the divide and conquer approach to sort the elements",
        "It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves",
        "The sub-lists are divided again and again into halves until the list cannot be divided further",
        "Then combine the pair of one element lists into two-element lists, sorting them in the process",
        "The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.",
      ],
    },
    {
      title: "Insertion Sort",
      list: [
        "Insertion sort is a sorting algorithm that works similar to the way you sort playing cards in your hands",
        "The array is virtually split into a sorted and an unsorted part",
        "Values from the unsorted part are picked and placed at the correct position in the sorted part",
      ],
    },
    {
      title: "Quick Sort",
      list: [
        "Quick Sort is a Divide and Conquer algorithm",
        "It picks an element as pivot and partitions the given array around the picked pivot",
        "Pivot is a centre point or the mid point",
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact>
          <div className={"App"}>
            <SortingVisualizer showModel={(boolean) => setShowModel(boolean)}>
              <Model
                show={showModel}
                showModel={(boolean) => setShowModel(boolean)}
                modelData={sortData}
              />
            </SortingVisualizer>
          </div>
        </Route>
        <Route path="/path-finding-algos">
          <Header>
            <Pathheader />
          </Header>
          <PathfindingVisualizer showModel={(boolean) => setShowModel(boolean)}>
            <Model
              show={showModel}
              showModel={(boolean) => setShowModel(boolean)}
              modelData={pathData}
            />
          </PathfindingVisualizer>
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
