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
  });
  const onSubmit = async (e) => {
    e.preventDefault()
    const { status, data } = await sendNewQuestionForm(formData, user._id);
    // console.log(status)
    if (status === "error" || status >= 400) {
      console.log("render error")
    } else {
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
        type="code"
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
