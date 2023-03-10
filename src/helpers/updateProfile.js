import { global } from "./global"
import { getUser } from "./log/getUser"

export const updateProfile = async (typeValue, newValue, password) => {

  console.log(typeValue, newValue, password)

  const {_id} = getUser()
  console.log(_id)

  const url = `${global.urlServer}/users/update/${_id}`
  console.log(url)

  const response = await fetch( url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
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
