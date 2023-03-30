import React from "react";
import { PaginationButton } from "./PaginationButton";

export const NextButton = () => {
  return (
    <PaginationButton
      action="next"
      pathDefinition="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  );
};