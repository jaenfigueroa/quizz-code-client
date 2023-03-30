import React from "react";
import { AddQuestionButton } from "./AddQuestionButton";
import CategorySelect from "./CategorySelect";
import QuestionsGridTitle from "./QuestionsGridTitle";

const QuestionsGridHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "10px",
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <QuestionsGridTitle />
        <AddQuestionButton />
      </div>
      <CategorySelect />
    </div>
  );
};

export default QuestionsGridHeader;
