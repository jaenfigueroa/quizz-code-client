import React from "react";
import QuestionCardList from "./QuestionCardList/QuestionCardList";
import { QuestionsGridPagination } from "./QuestionsGridPagination/QuestionsGridPagination";
import QuestionsGridHeader from "./QuestionsGridHeader/QuestionsGridHeader";

export const QuestionsGrid = ({ questions }) => {
  return (
    <section
      style={{
        display: "grid",
        gap: "10px",
        backgroundColor: "rgb(83, 81, 99)",
        padding: "20px",
        width: "60vw",
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: "40px",
        padding: "30px",
        paddingBottom: "10px",
      }}
    >
      <QuestionsGridHeader />
      <QuestionCardList questions={questions} />     
      <QuestionsGridPagination />
    </section>
  );
};
