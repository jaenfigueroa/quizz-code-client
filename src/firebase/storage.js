// PARA PODER GUARDAR ARCHIVOS, IMAGENES

/// //////////////////////////////////////////////////////////////////////////////
import { firebaseApp } from './config'
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from 'firebase/storage'

const storageRef = getStorage(firebaseApp)

/// //////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////
export const subirImagenAlStorage = async (file, fileName) => {
  const fileRef = ref(storageRef, `fotos/${fileName}`)
  await uploadBytes(fileRef, file)

  const fileUrl = await getDownloadURL(fileRef)
  return fileUrl
}

/// //////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////
export const obtenerImagenesDeStorage = async () => {
  const storageFolderRef = ref(storageRef, 'fotos')
  const { items } = await listAll(storageFolderRef)

  const imagesUrls = await Promise.all(items.map(async (itemRef) => await getDownloadURL(itemRef)))

  return imagesUrls
}
