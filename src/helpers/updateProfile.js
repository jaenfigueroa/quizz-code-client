import { global } from "./global"
import { getUser } from "./log/getUser"

export const updateProfile = async (typeValue, newValue, password) => {

  console.log(typeValue, newValue, password)

  const {_id} = getUser()

  const response = await fetch(`${global.urlServer}/users/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
      typeValue,
      newValue,
      password
    })
  })

  const data = response.json()

  return data
}
