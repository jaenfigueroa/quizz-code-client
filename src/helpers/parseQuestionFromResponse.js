export const parseQuestionFromResponse = (questionObject) => {
    const newFormData = {};
    newFormData.category = questionObject.category;
    newFormData.question = questionObject.question;
    newFormData["optional-code"] = questionObject.optionalCode;
    newFormData["correct-answer"] = questionObject.correctAnswer;
    for (let i = 0; i < 5; i++) {
        newFormData[`option-${i + 1}`] = questionObject.options[i].answer;
        newFormData[`option-${i + 1}-content-type`] = questionObject.options[i].contentType;
        newFormData[`option-${i + 1}-content-language`] = questionObject.options[i].contentLanguage;
    }
    return newFormData;
}