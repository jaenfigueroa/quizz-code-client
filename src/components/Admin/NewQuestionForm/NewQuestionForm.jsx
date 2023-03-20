import React, { useState } from "react";
import NewQuestionFormInputField from "./NewQuestionFormInputField";
import QuestionChoicesField from "./QuestionChoicesField";
import NewQuestionFormSubmitButton from "./NewQuestionFormSubmitButton";
import { getUser } from "../../../helpers/log/getUser";
import { sendNewQuestionForm } from "../../../helpers/sendNewQuestionForm";
import { NewQuestionCategorySelect } from "./NewQuestionCategorySelect";

const NewQuestionForm = () => {
  const user = getUser();
  const [formData, setFormData] = useState({
    category: "",
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
  console.log(formData)
  const onSubmit = async () => {
    const { status, data } = await sendNewQuestionForm(formData, user._id);
    if (status !== "error") {
      // redirect to success page
      console.log("redirect to success page");
    }
  };
  const getValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form
      className="section-admin__form"
      onChange={getValues}
      onSubmit={onSubmit}
    >
      <NewQuestionCategorySelect />
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
