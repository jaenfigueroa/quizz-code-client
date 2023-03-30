import React from "react";
import { NextButton } from "./Buttons/NextButton";
import { PreviousButton } from "./Buttons/PreviousButton";
import { CurrentPageInfo } from "./CurrentPageInfo";

export const QuestionsGridPagination = () => {
  
  return (
    <article
      style={{
        display: "flex",
      }}
    >
      <CurrentPageInfo />
      <PreviousButton />
      <NextButton />
    </article>
  );
};
