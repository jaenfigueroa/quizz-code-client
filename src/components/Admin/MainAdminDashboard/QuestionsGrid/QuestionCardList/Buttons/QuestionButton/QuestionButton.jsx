import React, { useState } from "react";
import "./QuestionButton.css";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const QuestionButton = ({ pathDefinition, tooltipText, handleOnClick  }) => {

  return (
    <>
      {/* <Tooltip id={`my-tooltip-${tooltipText}`} anchorSelect={`.button-icon`} place="top">
        {tooltipText}
      </Tooltip> */}
      <span onClick={handleOnClick} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className={`button-icon`}
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
