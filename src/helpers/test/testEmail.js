const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

///////////////////////////////////////////////////////
export const testEmail = (email = 'juan.perez@example.com') => {

  if(regex.test(email)){
    return {
      result: true,
      message: 'El correo electrónico es válido'
    }
  } else{
    return {
      result: false,
      message: 'El correo electrónico no es válido'
    }
  }
}
