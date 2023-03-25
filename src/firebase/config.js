// INICIALIZAR LA APLICAION DE FIREBASE - REALIZAR LA CONEXION CON FIREBASE
/// /////////////////////////////////////////////////////////////////////////////

// 1. importar la funcion "initializeApp" de firebase
import { initializeApp } from 'firebase/app'

// 2. inicializamos la aplicacion de Firebase, con los datos configuración de la aplicación de Firebase que se van a utilizar, desde el archivo .env (dotenv)
export const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
})
