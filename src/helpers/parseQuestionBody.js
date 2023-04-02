export const parseQuestionBody = (body) => {
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
    optionalCode: body["optional-code"],
    options,
    correctAnswer: body["correct-answer"],
  };
  return requestBody;
};
