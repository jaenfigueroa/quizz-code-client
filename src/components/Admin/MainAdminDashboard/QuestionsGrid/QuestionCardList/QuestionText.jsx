import React from "react";

const QuestionText = ({ questionText }) => {
  return (
    <p
      style={{
        width: "87%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {questionText}
    </p>
  );
};

export default QuestionText;
