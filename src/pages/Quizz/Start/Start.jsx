import React from 'react'
import './Start.css'

///////////////////////////////////////////
export const Start = ({getQuestion}) => {



  ///////////////////////////////////////////
  return (
    <div className='section-question__start'>
      <button className='section-question__start-button' onClick={getQuestion}>Empezar preguntas</button>
    </div>
  )
}
