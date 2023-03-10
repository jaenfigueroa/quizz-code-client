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
    console.log(data)

    if (data.status === 'success') {
      updateUser(data.user)
    }

    return data

  } catch (error) {
    console.log(error)
  }
}
