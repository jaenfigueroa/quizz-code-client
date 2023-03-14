import React from 'react'
import './Result.css'

///////////////////////////////////////////
export const Results = ({ getQuestion, results }) => {

  ///////////////////////////////////////////
  return (
    <div className='section-question__results'>
      {
        results.status === 'success' ? (
          <>
            <p className='section-question__results-result'>{results.message}</p>
            <div className='section-question__results-card'>
              <p><span>+5</span> puntos</p>
              <p><span>+1</span> challenge</p>
            </div>
          </>
        ) : (
          <p className='section-question__results-result section-question__results-result--incorrect'>{results.message}</p>
        )
      }
      <button className='section-question__results-button' onClick={() => getQuestion()}>Siguiente</button>
    </div>
  )
}
