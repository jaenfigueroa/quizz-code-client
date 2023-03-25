// PARA PODER USAR LA BASE DE DATOS DE FIREBASE - JSON

/// //////////////////////////////////////////////////////////////////////////////
import { firebaseApp } from './config'
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore'

const firestoreDB = getFirestore(firebaseApp)

/// //////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////
export const guardarUsuario = async (data) => {
  try {
    if (!data.nombre || !data.edad) {
      throw new Error('El objeto data no contiene los campos necesarios.')
    }
    const docRef = await addDoc(collection(firestoreDB, 'usuariosGuardados'), data)
    console.log('Documento guardado con id: ', docRef.id)
  } catch (error) {
    console.error('Error al agregar documento: ', error.message)
    throw error
  }
}

/// //////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////
export const obtenerTodosLosUsuarios = async () => {
  const items = []
  const querySnapshot = await getDocs(collection(firestoreDB, 'usuariosGuardados'))
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, data: doc.data() })
  })
  return items
}
