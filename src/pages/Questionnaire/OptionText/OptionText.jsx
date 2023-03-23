import React, { useEffect, useState } from 'react'
import './OptionText.css'

/// ///////////////////////////////////////
export const OptionText = ({ text, optionUser, setOptionUser, numberOption }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (optionUser === numberOption) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [optionUser])

  /// ///////////////////////////////////////
  return (
    <button
      className={`section-quizz__option-text ${active && 'section-quizz__option-text--selected'}`}
      onClick={() => setOptionUser(numberOption)}
    >
      {text}
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet maiores. Impedit sapiente eos sed tempora inventore fugit, temporibus adipisci? */}
    </button>
  )
}
