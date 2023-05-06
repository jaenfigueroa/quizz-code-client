import { global } from './global'
import { getUser } from './log/getUser'

export const resetPassword = () => {

  const { _id } = getUser()
  const url = `${global.urlServer}/users/resetPassword/${_id}`

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}