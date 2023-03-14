import React, { useEffect } from 'react'
import { OptionCode } from '../OptionCode/OptionCode'
import { OptionText } from '../OptionText/OptionText'
import { Pomodoro } from '../Pomodoro/Pomodoro'
import './Question.css'

///////////////////////////////////////////
export const Question = ({ question, processStatus, setProcessStatus, setResults, setOptionUser }) => {




  ///////////////////////////////////////////
  return (
    <>
      <Pomodoro setProcessStatus={setProcessStatus}/>
      <div className='section-question'>
        <h2 className="section-quizz__ask">{question.questionText}</h2>

        {/* CONTENEDOR DE OPCIONES */}
        <div className="section-quizz__options-container">
          {
            question.options.map((option, index) => (
              option.typeContent === 'text' ? (
                <OptionText
                  numberOption={index + 1}
                  text={option.content}
                  key={index}
                  setOptionUser={setOptionUser}/>
              ) : (
                <OptionCode
                  numberOption={index + 1}
                  code={option.content}
                  key={index}
                  setOptionUser={setOptionUser}/>
              )
            ))
          }
        </div>

        {/* BOTON CONFIRMA RESPUESTA */}
        <button className="section-quizz__submit">Comprobar</button>
      </div>
    </>
  )
}
