import { global } from "./global";

export const sendNewQuestionForm = async (body, userId) => {
  const options = [
    {
      contentType: body["option-1-content-type"],
      contentLanguage: body["option-1-content-language"],
      answer: body["option-1"],
    },
    {
      contentType: body["option-2-content-type"],
      contentLanguage: body["option-2-content-language"],
      answer: body["option-2"],
    },
    {
      contentType: body["option-3-content-type"],
      contentLanguage: body["option-3-content-language"],
      answer: body["option-3"],
    },
    {
      contentType: body["option-4-content-type"],
      contentLanguage: body["option-4-content-language"],
      answer: body["option-4"],
    },
    {
      contentType: body["option-5-content-type"],
      contentLanguage: body["option-5-content-language"],
      answer: body["option-5"],
    },
  ];
  const requestBody = {
    category: body.category,
    question: body.question,
    "optional-code": body["optional-code"],
    options,
    correctAnswer: body["correct-answer"],
  };
  try {
    const response = await fetch(
      `${global.urlServer}/questions?user-id=${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      data,
    };
  } catch (error) {
    return {
      status: "error",
      message: "No se pudo enviar la solicitud",
    };
  }
};
