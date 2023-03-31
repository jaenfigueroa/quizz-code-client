import React from "react";
import "./QuestionCard.css";
import QuestionText from "../QuestionText/QuestionText";
import DeleteQuestionButton from "../Buttons/DeleteQuestionButton";
import EditQuestionButton from "../Buttons/EditQuestionButton";

const QuestionCard = ({ questionId, questionText }) => {
  return (
    <article className="question-card">
      <QuestionText questionText={questionText} />

      <aside className="question-card-btn-container">
        <EditQuestionButton questionId={questionId} />
        <DeleteQuestionButton questionId={questionId} />
      </aside>
    </article>
  );
};

export default QuestionCard;
