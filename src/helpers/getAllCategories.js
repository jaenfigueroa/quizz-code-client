import { global } from './global'

export const getAllCategories = async () => {
  try {
    const categories = await fetch(`${global.urlServer}/categories`)
    const categoriesJson = await categories.json()
    return categoriesJson
  } catch (err) {
    return {
      status: 'error',
      message: 'Error desconocido al buscar las categorías.'
    }
  }
}
