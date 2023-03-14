import React from 'react'
import { OptionCode } from '../OptionCode/OptionCode'
import { OptionText } from '../OptionText/OptionText'
import './Question.css'

///////////////////////////////////////////
export const Question = ({ data }) => {


  ///////////////////////////////////////////
  return (
    <div className='section-question'>
      <h2 className="section-quizz__ask">{data.questionText}</h2>

      {/* CONTENEDOR DE OPCIONES */}
      <div className="section-quizz__options-container">
        {
          data.options.map((option, index) => (
            option.typeContent === 'text' ? (
              <OptionText text={option.content} key={index}/>
            ):(
              <OptionCode code={option.content} key={index}/>
            )
          ))
        }
      </div>

      {/* BOTON CONFIRMA RESPUESTA */}
      <button className="section-quizz__submit">Comprobar</button>
    </div>
  )
}
