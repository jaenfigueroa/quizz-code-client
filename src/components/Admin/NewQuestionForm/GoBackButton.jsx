import React, { useContext } from "react";
import AdminPageContext from "../../../context/AdminPageContext";

export const GoBackButton = ({ setFormData }) => {
  const { setUserCurrentAction, setQuestionInEditionId } = useContext(AdminPageContext);
  const handleGoBackButtonClick = () => {
  setUserCurrentAction("viewing"),
  setFormData({
    category: "",
    question: "",
    "optional-code": "",
    "option-1-content-type": "texto",
    "option-1-content-language": "html",
    "option-1": "",
    "option-2-content-type": "texto",
    "option-2-content-language": "html",
    "option-2": "",
    "option-3-content-type": "texto",
    "option-3-content-language": "html",
    "option-3": "",
    "option-4-content-type": "texto",
    "option-4-content-language": "html",
    "option-4": "",
    "option-5-content-type": "texto",
    "option-5-content-language": "html",
    "option-5": "",
    "correct-answer": "",
  })
  setQuestionInEditionId("");
  }
  return (
    <input
      type="submit"
      value="Atras"
      onClick={handleGoBackButtonClick}
      style={{
        height: "30px",
        width: "100px",
        cursor: "pointer",
      }}
    />
  );
};
