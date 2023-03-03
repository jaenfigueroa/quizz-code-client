import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import './Header.css'
import { User } from './User/User'

///////////////////////////////////////////////////////
export const Header = () => {

  const {isAuthenticated}= useContext(AppContext)


  ///////////////////////////////////////////////////////
  return (
    <header className='header'>
      <Link to={!isAuthenticated ? '/login' : '/home'} className='header__logo'>Quizz Code</Link>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          {
            isAuthenticated ? (
              <>
                <Link className='header__item' to='/home'>Home</Link>
              </>
            ) :(
              <>
                <Link className='header__item' to='/login'>Iniciar Sesion</Link>
                <Link className='header__item' to='/register'>Registrarse</Link>
              </>
            )
          }
          <Link className='header__item' to='/ranking'>Ranking</Link>
        </ul>
        {
          isAuthenticated && (
            <User/>
          )
        }
      </nav>
    </header>
  )
}
