import React, { useContext } from 'react'
import './GlowButton.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

/// ///////////////////////////////////////
export const GlowButton = () => {
  const { isAuthenticated } = useContext(AppContext)

  /// ///////////////////////////////////////
  return (
    <>
      {isAuthenticated
        ? (<a href='#section-categories' className='glow-button'>Aceptar</a>)
        : (<Link to='/login' className='glow-button'>Aceptar</Link>)}
    </>
  )
}
