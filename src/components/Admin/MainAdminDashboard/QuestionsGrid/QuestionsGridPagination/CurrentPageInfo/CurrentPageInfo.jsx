import React, { useContext } from 'react'
import AdminContext from '../../../../../../context/AdminContext'

export const CurrentPageInfo = () => {
  const { currentPage, totalQuestionsCount } = useContext(AdminContext)
  const pageRangeMin = currentPage * 10 - 9
  const pageRangeMax = totalQuestionsCount < currentPage * 10 ? totalQuestionsCount : currentPage * 10

  return (
    <p className='questions-pagination-info'>{`${pageRangeMin} - ${pageRangeMax} / total: ${totalQuestionsCount}`}</p>
  )
}
