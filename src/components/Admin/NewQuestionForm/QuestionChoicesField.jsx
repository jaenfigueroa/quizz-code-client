import React from "react";
import { InputOption } from "../InputOption/InputOption";

const QuestionChoicesField = () => {
  return (
    <div className="section-admin__block">
      <span className="section-admin__title">5 posibles respuestas</span>
      <InputOption number="1" />
      <hr />
      <InputOption number="2" />
      <hr />
      <InputOption number="3" />
      <hr />
      <InputOption number="4" />
      <hr />
      <InputOption number="5" />
    </div>
  );
};

export default QuestionChoicesField;
