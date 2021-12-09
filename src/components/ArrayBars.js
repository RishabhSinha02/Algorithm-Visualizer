import React, { Component } from "react";
import ArrayBar from "./ArrayBar";

import "./ArrayBars.css";

class ArrayBars extends Component {
  render() {
    return (
      <div className="array-container">
        {this.props.data.map((value, id) => {
          return <ArrayBar key={id} value={value} />;
        })}
      </div>
    );
  }
}

export default ArrayBars;
