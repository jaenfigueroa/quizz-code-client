import React from "react";
import "./QuestionsGrid.css";
import QuestionCardList from "./QuestionCardList/QuestionCardList";
import { QuestionsGridPagination } from "./QuestionsGridPagination/QuestionsGridPagination";
import QuestionsGridHeader from "./QuestionsGridHeader/QuestionsGridHeader";

export const QuestionsGrid = ({ questions }) => {
  return (
    <section className="questions-grid">
      <QuestionsGridHeader />
      <QuestionCardList questions={questions} />
      <QuestionsGridPagination />
    </section>
  );
};
