import { global } from './global'
import { getUser } from './log/getUser'

export const getRanking = async () => {
  const user = getUser()

  try {
    let response
    if (user) {
      response = await fetch(`${global.urlServer}/users/ranking/${user._id}`)
    } else {
      response = await fetch(`${global.urlServer}/users/ranking`)
      window.localStorage.removeItem('user')
    }

    const data = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
