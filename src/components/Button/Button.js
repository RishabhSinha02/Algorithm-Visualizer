import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn btn-primary">
      {props.children}
      <span>{props.icon}</span>
    </button>
  );
}

export default Button;
