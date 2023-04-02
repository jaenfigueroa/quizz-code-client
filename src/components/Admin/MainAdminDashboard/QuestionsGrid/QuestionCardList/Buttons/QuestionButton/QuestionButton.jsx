import React from 'react'
import './QuestionButton.css'
import 'react-tooltip/dist/react-tooltip.css'

const QuestionButton = ({ pathDefinition, tooltipText, handleOnClick }) => {
  return (
    <>
      <span onClick={handleOnClick} data-text={tooltipText}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='button-icon'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d={pathDefinition}
          />
        </svg>
      </span>
    </>
  )
}

export default QuestionButton
