import React from "react";
import QuestionText from "./QuestionText";
import DeleteQuestionButton from "./DeleteQuestionButton";
import EditQuestionButton from "./EditQuestionButton";

const QuestionCard = ({ questionText }) => {
  return (
    <article
      style={{
        padding: "10px",
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: 'black',
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
        <EditQuestionButton />
        <DeleteQuestionButton />
      </aside>
    </article>
  );
};

export default QuestionCard;
