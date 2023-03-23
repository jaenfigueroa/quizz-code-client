const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/// ////////////////////////////////////////////////////
export const testEmail = (email) => {
  // debe tener minimo 5 caracteres, incluir un arroba, un punto y un caracterer despues del punto

  if (email.length > 4 && regex.test(email)) {
    return {
      result: true,
      message: 'El correo electrónico es válido'
    }
  } else {
    return {
      result: false,
      message: 'El correo electrónico no es válido'
    }
  }
}
