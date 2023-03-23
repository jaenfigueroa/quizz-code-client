const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/

/// ////////////////////////////////////////////////////
export const testName = (name) => {
  // verificar que alemenos tenga 2 caracteres, y no contenga numeros ni caracteres especiales
  if (name.length > 2 && regex.test(name)) {
    return {
      result: true,
      message: 'El nombre y apellido son válidos.'
    }
  } else {
    return {
      result: false,
      message: 'El nombre y/o apellido no son válidos, no puede contener numeros ni caracteres especiales.'
    }
  }
}
