import React from "react";
import "./QuestionText.css";

const QuestionText = ({ questionText }) => {
  return (
    <p
      className="question-text"
    >
      {questionText}
    </p>
  );
};

export default QuestionText;
