import {sendForm} from '../sendForm'
import {getUser} from './getUser'
// import { updateUser } from './updateUser'

export const login = async () => {
  //traer email y token del local storage
  const user = getUser()

  if (user) {
    // console.log(user)
    const {email = '', password = ''} = user

    //realizar la peticion
    const data = await sendForm({email, password}, '/users/login')
    // console.log(data)
    // if (data.status === 'sucess') {
    //   updateUser(data.user)
    // }

    return data

  } else {
    return {
      status: 'error'
    }
  }
}
