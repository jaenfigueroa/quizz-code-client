import React, { useEffect, useState } from 'react'
import './OptionCode.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';


/////////////////////////////////////////
export const OptionCode = ({code, optionUser,setOptionUser, numberOption, category}) => {

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
    <SyntaxHighlighter
      className={`section-quizz__option-code ${active ? 'section-quizz__option-code--selected':''}`} onClick={() => setOptionUser(numberOption)}
      language={category.toLowerCase()}
      style={materialOceanic}
      showLineNumbers>
      {code}
    </SyntaxHighlighter>
  )
}
