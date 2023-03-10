import { global } from "./global"
import { getUser } from "./log/getUser"
import { updateUser } from "./log/updateUser"

export const updateProfile = async (typeValue, newValue, password) => {

  console.log(typeValue, newValue, password)

  const {_id} = getUser()
  // console.log(_id)

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

  //actualizar los datos en local storage del usuario
  if (data.status === 'success') {
    updateUser(data.user)
  }

  return data
}
