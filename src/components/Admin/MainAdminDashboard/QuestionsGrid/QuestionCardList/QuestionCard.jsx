import React from "react";
import QuestionText from "./QuestionText";
import DeleteQuestionButton from "./DeleteQuestionButton";
import EditQuestionButton from "./EditQuestionButton";

const QuestionCard = ({ questionId, questionText }) => {
  return (
    <article
      style={{
        padding: "10px",
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: '#1a1a1d',
      }}
    >
      <QuestionText questionText={questionText} />

      <aside
        style={{
          width: "8%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <EditQuestionButton questionId={questionId} />
        <DeleteQuestionButton questionId={questionId} />
      </aside>
    </article>
  );
};

export default QuestionCard;
