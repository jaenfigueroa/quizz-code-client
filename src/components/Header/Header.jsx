import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { deleteUser } from '../../helpers/log/deleteUser'
import './Header.css'
import { User } from './User/User'

///////////////////////////////////////////////////////
export const Header = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)
  const [headerActive, setHeaderActive] = useState(false)

  const navigate = useNavigate()
  const closeNav = () => {
    setHeaderActive(!headerActive)
  }

  ///////////////////////////////////////////////////////
  return (
    <header className='header'>
      {/* LOGO */}
      <Link to={!isAuthenticated ? '/login' : '/home'} className="header__link" >
        <span className='header__logo'>QuizzCode</span>
      </Link>
      {/* ICONO SANDWICH */}
      <div className='header__sandwich' onClick={closeNav}>
        {
          !headerActive ? <i className="fa-solid fa-bars"></i> : <i className="fa-regular fa-circle-xmark"></i>
        }
      </div>
      {/* NAV */}
      <nav className={`header__nav ${headerActive && 'header__nav--active'}`}>
        <ul className='header__nav-list'>
          <NavLink className={({ isActive }) => isActive ? 'header__item--active' : 'header__item'} to='/home' onClick={closeNav}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'header__item--active' : 'header__item'} to='/ranking' onClick={closeNav}>Ranking</NavLink>
          {
            !isAuthenticated && (
              <>
                <NavLink className={({ isActive }) => isActive ? 'header__item--active' : 'header__item'} to='/login' onClick={closeNav}>Iniciar</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header__item--active' : 'header__item'} to='/register' onClick={closeNav}>Registrar</NavLink>
              </>
            )
          }
        </ul>
        {
          isAuthenticated && (
            <User />
          )
        }

        {/* BOTONES DE ABAJO EN MOBILE */}
        {
          isAuthenticated && (
            <div className='header-nav__settings'>
              <Link className='header-nav__settings-button' to='/profile' onClick={closeNav}>Editar Perfil</Link>
              <button className='header-nav__settings-button' onClick={() => {
                deleteUser() //eliminar datos del uusario del local storage
                setIsAuthenticated(false)
                navigate('/home')
                closeNav()
              }}>Cerrar sesion</button>
            </div>
          )
        }
      </nav>

    </header>
  )
}
