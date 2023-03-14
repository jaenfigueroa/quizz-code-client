import React from 'react'
import './OptionText.css'

//////////////////////////////////////////
export const OptionText = ({text, setOptionUser, numberOption}) => {


  //////////////////////////////////////////
  return (
    <button className='section-quizz__option-text' onClick={() => setOptionUser(numberOption)}>
      {text}
    </button>
  )
}
