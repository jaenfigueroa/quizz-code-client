import { global } from "./global"
import { getUser } from "./log/getUser"

export const uploadImage = async (body, route) => {

  const user = getUser()

  try {
    const response = await fetch(`${global.urlServer}${route}/${user['_id']}`, {
      method: 'PUT',
      body: body
    })

    const data = await response.json()
    console.log(data)
    // return data

  } catch (error) {
    console.log(error)
  }
}
