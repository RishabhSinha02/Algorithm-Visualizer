import React from "react";
import { Box } from "@mui/material";
import "./Footer.css";
import toolIcon from "../../Assets/tool.svg";
import userIcon from "../../Assets/user.svg";

const Footer = () => {
  const technologiesUsed = {
    title: "Technologies used",
    items: ["React.js", "Redux", "Material UI", "Netlify", "GitHub", "CSS"],
  };

  const contributors = {
    title: "Contributors",
    items: [
      "Arpan Bari",
      "Devang Mestry",
      "Sakshi Patil",
      "Omkar Joshi",
      "Rishabh Sinha",
    ],
  };

  return (
    <footer className="flex">
      <Box display="grid" rowGap={3} width={500}>
        <div className="flex">
          <div className="circle flex">
            <h1 className="header-logo text-primary">algo</h1>
            <h1 className="header-logo text-white">visualiser</h1>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8 }}>
          Visualise various type of sorting and path finding algorithms on this
          web page. Eg. Merge sort, Quick sort, Bubble sort etc. and path
          finding algorithms such as Djikstra, A*.
        </p>
      </Box>

      <Box display="flex" alignItems="flex-start" gap={7}>
        <Box display="grid" gap={2}>
          <Box display="flex" gap={2} className="list-title">
            {technologiesUsed.title} <img src={toolIcon} alt="tool-logo" />
          </Box>
          {technologiesUsed.items.map((el) => (
            <p className="list-item">{el}</p>
          ))}
        </Box>
        <Box display="grid" gap={2}>
          <Box display="flex" gap={2} className="list-title">
            {contributors.title} <img src={userIcon} alt="tool-logo" />
          </Box>
          {contributors.items.map((el) => (
            <p className="list-item">{el}</p>
          ))}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
