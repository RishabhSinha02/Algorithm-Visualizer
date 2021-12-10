import React, { useState } from "react";
import "./Model.css";
import { Button } from "@mui/material";

const Model = (props) => {
  const modelData = [
    {
      title: "Lorem Ipsum dolar sit",
      list: [
        "loream ipsum sit dolar fit never mind lorem ipsum sit got this for keep mine",
        "loream ipsum sit mind lorem ipsum sit got this for keep mine",
        "loream ipsum sit dolar fit neverm sit got this for keep mine",
        "loream ipsum sit dolar fit never mind lorem ipsum sit  for keep mine",
      ],
    },
    {
      title: "Title dolar sit",
      list: [
        "loream ipsum sit dolar fit never mind lorem ipsum sit got this for keep mine",
        "loream ipsum sit mind lorem ipsum sit got this for keep mine",
        "loream ipsum sit dolar fit neverm sit got this for keep mine",
        "loream ipsum sit dolar fit never mind lorem ipsum sit got this for keep mine",
        "loream ipsum sit dolar fit never mind lorem ipsum sit  for keep mine",
      ],
    },
  ];
  const [index, setIndex] = useState(0);

  let backdropClass = ["backdrop"];
  let modelClass = ["model"];

  if (!props.show) {
    backdropClass.push("hide");
    modelClass.push("hide");
  }

  const next = () => {
    if (index < modelData.length - 1) {
      setIndex(index + 1);
    } else {
      props.showModel(false);
    }
  };

  return (
    <>
      <div
        className={backdropClass.join(" ")}
        onClick={() => props.showModel(false)}
      />
      <div className={modelClass.join(" ")}>
        <p className="model-title">{modelData[index].title}</p>
        <ul>
          {modelData[index].list.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <div className="button-container">
          <Button
            className="btn-secondary"
            disabled={index <= 0}
            onClick={() => setIndex(index - 1)}
          >
            Prev
          </Button>
          <Button className="btn-secondary" onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Model;
