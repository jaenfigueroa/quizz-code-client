import { firebaseApp } from './config'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// 1.La instancia "getAuth" la inicializamos con la instancia de Firebase previamente importada.
const auth = getAuth(firebaseApp)

// 2.creamos una instancia de "GoogleAuthProvider". Esta instancia se utiliza para proveer el método de autenticación de Google.
const provider = new GoogleAuthProvider()

// 3.creamos y exportamos una funcion, que se encargara de realizar la autenticación del usuario mediante un pop-up que muestra un formulario de inicio de sesión con la cuenta de Google
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
