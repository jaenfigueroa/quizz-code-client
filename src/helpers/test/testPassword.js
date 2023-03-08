var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

///////////////////////////////////////////////////
export function testPassword(contrasena) {

  // Verificar que la contraseña tenga al menos 8 caracteres
  if (contrasena.length < 8) {
    return {
      result: false,
      message: 'Debe tener minimo 8 caracteres.'
    }
  }

  // Verificar que la contraseña tenga al menos una letra, un número y un carácter especial
  if (regex.test(contrasena)) {
    return {
      result: true,
      message: 'Contraseña valida.'
    }
  } else{
    return {
      result: false,
      message: 'Debe contener almenos una letra, un número y un carácter especial (@$!%*?&).'
    }
  }
}