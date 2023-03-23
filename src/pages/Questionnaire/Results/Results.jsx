import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'

/// ////////////////////////////////////////
export const Results = ({ getQuestion, results }) => {
  const navigate = useNavigate()

  /// ////////////////////////////////////////
  return (
    <div className='section-question__results'>
      {
        results.status === 'success'
          ? (
            <>
              <div className='section-question__results-card'>
                <p><span>+5</span> puntos</p>
                <p><span>+1</span> challenge</p>
              </div>
              <p className='section-question__results-result'>{results.message}</p>
            </>)
          : (
            <p className='section-question__results-result section-question__results-result--incorrect'>{results.message}</p>
            )
      }
      <div className='section-quizz__container-button'>
        <button className='section-quizz__main-button-submit red' onClick={() => navigate('/')}>
          Salir
          <i className='fa-solid fa-xmark' />
        </button>
        <button className='section-quizz__main-button-submit' onClick={() => getQuestion()}>
          Siguiente
          <i className='fa-solid fa-arrow-right' />
        </button>
      </div>
    </div>
  )
}
