import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-logo">
        Algo <span className="color-primary">Viz</span>
      </h1>
      {props.children}
    </header>
  );
};

export default Header;
