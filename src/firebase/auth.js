// AUTENTICACION DE USUARIOS
/// //////////////////////////////////////////////////////////////////////////////

// 1.importamos la instancia de Firebase previamente configurada en el archivo config.js
import { firebaseApp } from './config'

/*
2.importamos:
  - getAuth -> para obtener una instancia de Auth de Firebase, que permite autenticar a los usuarios.
  - GoogleAuthProvider -> se utiliza para proveer el método de autenticación de Google.
  - signInWithPopup -> se encarga de realizar la autenticación del usuario mediante un pop-up que muestra un formulario de inicio de sesión con la cuenta de Google.
*/
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// 3.La instancia "getAuth" la inicializamos con la instancia de Firebase previamente importada.
const auth = getAuth(firebaseApp)

// 4.creamos una instancia de "GoogleAuthProvider". Esta instancia se utiliza para proveer el método de autenticación de Google.
const provider = new GoogleAuthProvider()

// 5.creamos y exportamos una funcion, que se encargara de realizar la autenticación del usuario mediante un pop-up que muestra un formulario de inicio de sesión con la cuenta de Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return user
  } catch (error) {
    console.log(error)
    return null
  }
}
