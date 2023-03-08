import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import './GlowButton.css'

//////////////////////////////////////////
export const GlowButton = () => {

  const {isAuthenticated} = useContext(AppContext)

  //////////////////////////////////////////
  return (
    <>
      {
        isAuthenticated ? (
          <a href='#section-categories' className='glow-button'>Aceptar</a>
        ) : (
          <Link to='/login' className='glow-button'>Aceptar</Link>
        )
      }
    </>
  )
}
