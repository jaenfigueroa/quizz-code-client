import { global } from './global'
import { parseQuestionBody } from './parseQuestionBody'

export const sendQuestionUpdateForm = async (body, questionId) => {
  const requestBody = parseQuestionBody(body);
  try {
    const response = await fetch(
      `${global.urlServer}/questions/${questionId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }
    )
    const data = await response.json()
    
    return {
      status: response.status,
      data
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'No se pudo enviar la solicitud'
    }
  }
}
