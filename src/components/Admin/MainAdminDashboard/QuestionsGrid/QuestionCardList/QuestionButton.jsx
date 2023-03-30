import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const QuestionButton = ({ pathDefinition, color, tooltipText  }) => {
  const [width, setWidth] = useState("20px");

  const handleMouseEnter = () => {
    setWidth("22px");
  };
  const handleMouseLeave = () => {
    setWidth("20px");
  };
  return (
    <>
      <Tooltip id={`my-tooltip-${tooltipText}`} anchorSelect={`.button-icon-${tooltipText}`} place="top">
        {tooltipText}
      </Tooltip>
      <span >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`button-icon-${tooltipText}`}
          style={{
            width,
            color,
            cursor: "pointer"
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={pathDefinition}
          />
        </svg>
      </span>
    </>
  );
};

export default QuestionButton;
