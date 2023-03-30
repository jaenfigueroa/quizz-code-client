import React from "react";
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
      <QuestionsGridTitle />
      <CategorySelect />
    </div>
  );
};

export default QuestionsGridHeader;
