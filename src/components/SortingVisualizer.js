import React, { Component } from "react";

import { getBubbleSortAnimations } from "../algorithms/sorting/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/sorting/mergeSort";
import { getInsertionSortAnimations } from "../algorithms/sorting/insertionSort";
import { getQuickSortAnimations } from "../algorithms/sorting/quickSort";

import * as constants from "../helpers/constants";
import ArrayBars from "./ArrayBars";
import Header from "../components/Header/Header";
import Sortheader from "../components/Header/SortHeader";

import { Button } from "@mui/material";
import { connect } from "react-redux";
import buttonStyles from "./ButtonStyle";
import sortIcon from "../Assets/sort.svg";

import "./SortingVisualizer.css";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.props.size; i++) {
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
    const { array } = this.state;
    let animations = [];

    switch (this.props.sortMethod) {
      case "merge":
        animations = getMergeSortAnimations(array);
        break;
      case "insertion":
        animations = getInsertionSortAnimations(array);
        break;
      case "bubble":
        animations = getBubbleSortAnimations(array);
        break;
      case "quick":
        animations = getQuickSortAnimations(array);
        break;
      default:
        break;
    }

    this.sortingAnimationsHandler(animations);
  }

  sortingAnimationsHandler(animations) {
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
      } else if (type === "sort") {
        setTimeout(() => {
          const {
            data: [barId, newBarHeight],
          } = animation;
          const barStyle = arrayBars[barId].style;
          barStyle.height = `${newBarHeight}px`;
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
        <div className="sorting-visualizer">
          <Button
            style={buttonStyles}
            className="float"
            variant="contained"
            color="secondary"
            onClick={this.onSortHandler.bind(this)}
          >
            Sort
            <img style={{ marginLeft: 10 }} src={sortIcon} alt="sort-logo" />
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
    size: state.sort.size,
  };
};
export default connect(mapStateToProps)(SortingVisualizer);
