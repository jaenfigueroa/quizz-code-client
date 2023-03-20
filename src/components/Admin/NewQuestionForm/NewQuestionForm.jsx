import React, { useState } from "react";
import NewQuestionFormInputField from "./NewQuestionFormInputField";
import QuestionChoicesField from "./QuestionChoicesField";
import NewQuestionFormSubmitButton from "./NewQuestionFormSubmitButton";

const NewQuestionForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    "optional-code": "",
    "option-1-text-type": "texto",
    "option-1-language": "html",
    "option-1": "",
    "option-2-text-type": "texto",
    "option-2-language": "html",
    "option-2": "",
    "option-3-text-type": "texto",
    "option-3-language": "html",
    "option-3": "",
    "option-4-text-type": "texto",
    "option-4-language": "html",
    "option-4": "",
    "option-5-text-type": "texto",
    "option-5-language": "html",
    "option-5": "",
    "correct-answer": "",
  });
  const getValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form className="section-admin__form" onChange={getValues}>
      <NewQuestionFormInputField
        title="Pregunta"
        name="question"
        type="text"
        placeholder="Pregunta General"
      />
      <NewQuestionFormInputField
        title="Código (opcional)"
        name="optional-code"
        type="text"
        placeholder="Código que acompaña la pregunta"
      />
      <QuestionChoicesField />
      <NewQuestionFormInputField
        title="Opción Correcta"
        name="correct-answer"
        type="number"
        placeholder="Número de la opción correcta"
      />
      <NewQuestionFormSubmitButton />
    </form>
  );
};

export default NewQuestionForm;
