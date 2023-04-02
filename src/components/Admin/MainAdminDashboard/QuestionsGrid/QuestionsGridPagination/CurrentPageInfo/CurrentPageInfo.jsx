import React, { useContext } from 'react'
import AdminContext from '../../../../../../context/AdminContext'

export const CurrentPageInfo = () => {
  const { currentPage, pageSize, totalQuestionsCount } = useContext(AdminContext)
  const pageRangeMin = currentPage * 10 + currentPage - pageSize
  const pageRangeMax = totalQuestionsCount < pageSize ? totalQuestionsCount : currentPage * 10

  return (
    <p className='questions-pagination-info'>{`${pageRangeMin} de ${pageRangeMax} / total: ${totalQuestionsCount}`}</p>
  )
}
