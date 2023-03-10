import { global } from "./global"
import { getUser } from "./log/getUser"
import { updateUser } from "./log/updateUser"

export const uploadImage = async (body, route) => {

  const user = getUser()

  try {
    const response = await fetch(`${global.urlServer}${route}/${user['_id']}`, {
      method: 'PUT',
      body: body
    })

    const data = await response.json()

    updateUser(data.user)
    // console.log(data)

    return data.user

  } catch (error) {
    console.log(error)
  }
}
