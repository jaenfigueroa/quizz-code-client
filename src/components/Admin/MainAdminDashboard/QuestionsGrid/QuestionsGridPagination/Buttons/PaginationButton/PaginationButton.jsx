import React, { useContext } from 'react'
import AdminContext from '../../../../../../../context/AdminContext'

export const PaginationButton = ({ action, pathDefinition }) => {
  const { handlePageChange } = useContext(AdminContext)
  return (
    <span
      className='pagination-button-container'
      onClick={() => handlePageChange(action)}
    >
      <svg
        className='pagination-button-content'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        width='25px'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d={pathDefinition} />
      </svg>
    </span>
  )
}
