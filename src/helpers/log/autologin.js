import {sendForm} from '../sendForm'
// import {getUser} from './getUser'

export const autologin = async (user) => {
  //traer email y token del local storage
  // const user = getUser()

  if (user) {
    // console.log(user)
    const {email = '', password = ''} = user

    //realizar la peticion
    const data = await sendForm({email, password}, '/users/login')
    return data

  } else {
    return {
      status: 'error'
    }
  }
}
