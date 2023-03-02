import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='exercise-header'>
      <h4 className='exercise-header__logo'>Quizz Code</h4>

      <div className='exercise-header__content'>
        <h4>Reto #1: Automatizando envolver regalos de navidad</h4>
        <span>Dificultad: Facil</span>
      </div>
    </header>
  )
}
