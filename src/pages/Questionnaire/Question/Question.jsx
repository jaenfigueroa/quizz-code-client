import React from 'react'
import { OptionCode } from '../OptionCode/OptionCode'
import { OptionText } from '../OptionText/OptionText'
import './Question.css'

/// ////////////////////////////////////////
export const Question = ({ question, setProcessStatus, optionUser, setOptionUser, category }) => {
  /// ////////////////////////////////////////
  return (
    <div className='section-question__main'>
      <h2 className='section-quizz__main-ask'>{question.question}</h2>

      {/* CONTENEDOR DE OPCIONES */}
      <div className='section-quizz__main-options-container'>
        {
          question.options.map((option, index) => (
            option.contentType === 'texto'
              ? (
                <OptionText
                  key={index}
                  numberOption={index + 1}
                  optionUser={optionUser}
                  setOptionUser={setOptionUser}
                  text={option.answer}
                />
                )
              : (
                <OptionCode
                  key={index}
                  numberOption={index + 1}
                  optionUser={optionUser}
                  setOptionUser={setOptionUser}
                  code={option.answer}

                  category={category}
                />
                )
          ))
        }
      </div>

      {/* BOTON CONFIRMA RESPUESTA */}
      <button className='section-quizz__main-button-submit' onClick={() => setProcessStatus('validation')}>
        <i className='fa-solid fa-paper-plane' />
        Enviar Respuesta
      </button>
    </div>
  )
}
