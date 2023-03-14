import React, { useEffect, useState } from 'react'
import './OptionCode.css'

/////////////////////////////////////////
export const OptionCode = ({code, optionUser,setOptionUser, numberOption}) => {

  const [active, setActive] = useState(false)

  useEffect(()=> {
    if (optionUser === numberOption) {
      setActive(true)
    }else{
      setActive(false)
    }
  }, [optionUser])

  /////////////////////////////////////////
  return (
    <button className={`section-quizz__option-code ${active ? 'section-quizz__option-code--selected':''}`} onClick={() => setOptionUser(numberOption)}>
      {code}
    </button>
  )
}
