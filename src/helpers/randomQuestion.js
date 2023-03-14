import {global} from './global'
import {getUser} from './log/getUser'

export const randomQuestion = async (category) => {
  const {_id} = getUser()

  try {
    const response = await fetch(`${global.urlServer}/question/${category}/${_id}`)
    const data = await response.json()

    console.log(data)
    return data

  } catch (error) {
    console.log(error)
  }
}
