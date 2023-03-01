export const getRegister = (email, password) => {



  return {
    message: 'Se ha Registrado un usuario',
    body: {email, password}
  }
}