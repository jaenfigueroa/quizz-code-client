import React from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'
import img from '../../assets/img404.svg'

//////////////////////////////////////////
export const Page404 = () => {


  //////////////////////////////////////////
  return (
    <div className='section-page404'>

      <div className='section-page404__mask'>
        <img src={img} alt="imagen 404 de un gato jugando con una lana" />
      </div>

      <p className='section-page404__text'>Esta pagina no existe o no tienes acceso</p>

      <div className='section-page404__container'>
        <Link className='section-page404__button' to='/login'>Iniciar Sesion</Link>
        <Link className='section-page404__button' to='/register'>Registrate</Link>
      </div>
    </div>
  )
}
