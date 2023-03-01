import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h4 className='header__logo'>Quizz Code</h4>

      <div className='header__content'>
        <h4>Reto #1: Automatizando envolver regalos de navidad</h4>
        <span>Dificultad: Facil</span>
      </div>
    </header>
  )
}
