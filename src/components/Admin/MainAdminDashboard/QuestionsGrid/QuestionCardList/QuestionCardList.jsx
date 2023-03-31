import React from "react";
import QuestionCard from "./QuestionCard/QuestionCard";

const QuestionCardList = ({ questions }) => {
  return (
    <>
      {questions?.map((question) => (
        <QuestionCard key={question._id} questionId={question._id} questionText={question.question} />
      ))}
    </>
  );
};

export default QuestionCardList;
