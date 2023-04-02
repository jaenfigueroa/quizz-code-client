import { global } from './global'
import { getUser } from './log/getUser'

export const getAllCategoryQuestions = async (categoryId, currentPage) => {
  const { _id } = getUser()

  try {
    const response = await fetch(`${global.urlServer}/questions/category/${categoryId}?current-page=${currentPage}`)
    const data = await response.json()

    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
