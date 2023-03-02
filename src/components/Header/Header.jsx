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
      <div className='header__logo'>Quizz Code</div>
      <nav className='header__nav'>
        <ul>
          {
            isAuthenticated && (
              <>
                <Link to='/home'>Home</Link>
                {/* <Link to='/home'>Retos</Link> */}
              </>
            )
          }
          <Link to='/ranking'>Ranking</Link>
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
