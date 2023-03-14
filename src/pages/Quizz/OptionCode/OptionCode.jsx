import React from 'react'
import './OptionCode.css'

/////////////////////////////////////////
export const OptionCode = ({code, setOptionUser, numberOption}) => {



  /////////////////////////////////////////
  return (
    <button className='section-quizz__option-code' onClick={() => setOptionUser(numberOption)}>
      {code}
    </button>
  )
}
