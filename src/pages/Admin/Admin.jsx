import React from "react";
import "./Admin.css";
import { InputOption } from "../../components/Admin/InputOption/InputOption";
import NewQuestionFormInputField from "../../components/Admin/NewQuestionForm/NewQuestionFormInputField";
import NewQuestionFormSubmitButton from "../../components/Admin/NewQuestionForm/NewQuestionFormSubmitButton";
import QuestionChoicesField from "../../components/Admin/NewQuestionForm/QuestionChoicesField";

//////////////////////////////////////////
export const Admin = () => {
  //////////////////////////////////////////
  return (
    <section className="section-admin">
      <form className="section-admin__form">
        <NewQuestionFormInputField
          title="Pregunta"
          type="text"
          placeholder="Pregunta General"
        />
        <NewQuestionFormInputField
          title="Código (opcional)"
          type="text"
          placeholder="Código que acompaña la pregunta"
        />
        <QuestionChoicesField />
        <NewQuestionFormInputField
          title="Opción Correcta"
          type="number"
          placeholder="Número de la opción correcta"
        />
        <NewQuestionFormSubmitButton />
      </form>
    </section>
  );
};
