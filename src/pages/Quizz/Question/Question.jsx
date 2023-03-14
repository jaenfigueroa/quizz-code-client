import React from 'react'
import { OptionCode } from '../OptionCode/OptionCode'
import { OptionText } from '../OptionText/OptionText'
import './Question.css'

///////////////////////////////////////////
export const Question = ({ question, setProcessStatus, optionUser, setOptionUser, category }) => {



  ///////////////////////////////////////////
  return (
    <div className='section-question__main'>
      <h2 className="section-quizz__main-ask">{question.questionText}</h2>

      {/* CONTENEDOR DE OPCIONES */}
      <div className="section-quizz__main-options-container">
        {
          question.options.map((option, index) => (
            option.typeContent === 'text' ? (
              <OptionText
                numberOption={index + 1}
                text={option.content}
                key={index}
                optionUser={optionUser}
                setOptionUser={setOptionUser} />
            ) : (
              <OptionCode
                numberOption={index + 1}
                code={option.content}
                key={index}
                optionUser={optionUser}
                setOptionUser={setOptionUser}
                category={category} />
            )
          ))
        }
      </div>

      {/* BOTON CONFIRMA RESPUESTA */}
      <button className="section-quizz__main-button-submit" onClick={() => setProcessStatus('validation')}>Comprobar</button>
    </div>
  )
}
