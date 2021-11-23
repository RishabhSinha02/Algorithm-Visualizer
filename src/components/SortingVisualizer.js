import React, { Component } from "react";
import classes from "./SortingVisualizer.module.css";

import { getBubbleSortAnimations } from "../algorithms/sorting/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/sorting/mergeSort";
import { getInsertionSortAnimations } from "../algorithms/sorting/insertionSort";
import * as constants from "../helpers/constants";
import ArrayBars from "./ArrayBars";
import Header from "../components/Header/Header";
import Sortheader from "../components/Header/SortHeader";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import buttonStyles from "./ButtonStyle";

// const getSortMethod = () => {
//   return useSelector((state) => state.sort.sortMethod);
// };
class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  // sortMethod = useSelector((state) => state.sort.sortMethod);

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    console.log("clicked");
    const array = [];
    for (let i = 0; i < constants.ARRAY_MAX_LENGTH; i++) {
      array.push(
        this.getRandomFromRange(
          constants.ARRAY_MIN_VALUE,
          constants.ARRAY_MAX_VALUE
        )
      );
    }

    this.setState({ array });
  }

  getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  onSortHandler() {
    console.log(this.props);
    switch (this.props.sortMethod) {
      case "merge":
        this.mergeSortWrapper(this);
        break;
      case "insertion":
        this.insertionSortWrapper(this);
        break;
      case "bubble":
        this.bubbleSortWrapper(this);
        break;
      case "quick":
        break;
      default:
        break;
    }
  }

  bubbleSortWrapper() {
    const { array } = this.state;
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const { type } = animation;
      if (type === "comparison") {
        setTimeout(() => {
          const {
            data: [barOneId, barTwoId],
          } = animation;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.backgroundColor = animation.color;
          barTwoStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "swap") {
        setTimeout(() => {
          const {
            data: [barOneData, barTwoData],
          } = animation;
          const [barOneId, barOneNewHeight] = barOneData;
          const [barTwoId, barTwoNewHeight] = barTwoData;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.height = `${barOneNewHeight}px`;
          barTwoStyle.height = `${barTwoNewHeight}px`;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "done") {
        setTimeout(() => {
          const {
            data: [barId],
          } = animation;
          const barStyle = arrayBars[barId].style;

          barStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      }
    }
  }

  mergeSortWrapper() {
    const { array } = this.state;
    const animations = getMergeSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const { type } = animation;
      if (type === "comparison") {
        setTimeout(() => {
          const {
            data: [barOneId, barTwoId],
          } = animation;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.backgroundColor = animation.color;
          barTwoStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "sort") {
        setTimeout(() => {
          const {
            data: [barId, barNewHeight],
          } = animation;

          const barStyle = arrayBars[barId].style;
          barStyle.height = `${barNewHeight}px`;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "done") {
        setTimeout(() => {
          const {
            data: [barId],
          } = animation;

          const barStyle = arrayBars[barId].style;
          barStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      }
    }
  }

  insertionSortWrapper() {
    const { array } = this.state;
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const { type } = animation;

      if (type === "comparison") {
        setTimeout(() => {
          const {
            data: [barOneId, barTwoId],
          } = animation;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.backgroundColor = animation.color;
          barTwoStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "swap") {
        setTimeout(() => {
          const {
            data: [barOneData, barTwoData],
          } = animation;

          const [barOneId, barOneNewHeight] = barOneData;
          const [barTwoId, barTwoNewHeight] = barTwoData;

          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;

          barOneStyle.height = `${barOneNewHeight}px`;
          barTwoStyle.height = `${barTwoNewHeight}px`;
        }, i * constants.ANIMATION_SPEED);
      } else if (type === "done") {
        setTimeout(() => {
          const {
            data: [barId],
          } = animation;
          const barStyle = arrayBars[barId].style;

          barStyle.backgroundColor = animation.color;
        }, i * constants.ANIMATION_SPEED);
      }
    }
  }

  render() {
    console.log(this.props.sortMethod);

    const { array } = this.state;
    return (
      <>
        <Header>
          <Sortheader generateArray={this.resetArray.bind(this)} />
        </Header>
        <div className={classes.sortingVisualizer}>
          <Button
            size="large"
            style={buttonStyles}
            className="float"
            variant="contained"
            color="secondary"
            onClick={this.onSortHandler.bind(this)}
          >
            Sort
          </Button>
          <ArrayBars data={array} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortMethod: state.sort.sortMethod,
  };
};

export default connect(mapStateToProps)(SortingVisualizer);
