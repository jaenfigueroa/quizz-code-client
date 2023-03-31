import React from "react";
import "./QuestionsGridHeader.css";
import { AddQuestionButton } from "./AddQuestionButton/AddQuestionButton";
import CategorySelect from "./CategorySelect/CategorySelect";
import QuestionsGridTitle from "./QuestionsGridTitle/QuestionsGridTitle";

const QuestionsGridHeader = () => {
  return (
    <div
      className="questions-grid-header"
    >
      <div
        className="questions-grid-header-subcontainer"
      >
        <QuestionsGridTitle />
        <AddQuestionButton />
      </div>
      <CategorySelect />
    </div>
  );
};

export default QuestionsGridHeader;
