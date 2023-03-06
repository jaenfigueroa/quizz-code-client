import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                <NavLink className={({isActive})=>isActive? 'header__item--active':'header__item'} to='/home'>Home</NavLink>
              </>
            ) :(
              <>
                <NavLink className={({isActive})=>isActive? 'header__item--active':'header__item'} to='/login'>Iniciar Sesion</NavLink>
                <NavLink className={({isActive})=>isActive? 'header__item--active':'header__item'} to='/register'>Registrarse</NavLink>
              </>
            )
          }
          <NavLink className={({isActive})=>isActive? 'header__item--active':'header__item'} to='/ranking'>Ranking</NavLink>
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
