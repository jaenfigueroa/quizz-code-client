import { global } from "./global"

export const getRanking = async() => {

  try {
    const response = await fetch(`${global.urlServer}/users/ranking`)
    const data = await response.json()

    return data.topFiftyUsers

  } catch (error) {
    console.log(error)
  }
}