import React, { useEffect, useState } from 'react'
import './OptionCode.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { tomorrow, gruvboxDark, oneDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// import {  dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {  okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {  darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {  duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/// //////////////////////////////////////
export const OptionCode = ({ code, optionUser, setOptionUser, numberOption, category }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (optionUser === numberOption) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [optionUser])

  /// //////////////////////////////////////
  return (
    <SyntaxHighlighter
      className={`section-quizz__option-code ${active ? 'section-quizz__option-code--selected' : ''}`} onClick={() => setOptionUser(numberOption)}
      language={category.toLowerCase()}
      style={oneDark}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  )
}
