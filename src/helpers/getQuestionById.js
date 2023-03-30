import { global } from './global'
import { getUser } from './log/getUser'

export const getQuestionById = async (questionId) => {
//   const { _id } = getUser()

  try {
    const response = await fetch(`${global.urlServer}/questions/${questionId}`)
    const data = await response.json()
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
}
