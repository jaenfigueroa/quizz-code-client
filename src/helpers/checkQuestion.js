import { global } from './global'
import { getUser } from './log/getUser'

export const checkQuestion = async (questionId, chosenOption) => {
  const { _id } = getUser()

  // console.log(questionId, chosenOption)

  try {
    const response = await fetch(`${global.urlServer}/questions/check?userId=${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ questionId, chosenOption })
    })
    const data = await response.json()
    // console.log(data)

    return data
  } catch (error) {
    console.log(error)
  }
}
