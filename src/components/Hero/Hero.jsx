import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import './Hero.css'

//////////////////////////////////
export const Hero = () => {

  const {isAuthenticated} = useContext(AppContext)

  //////////////////////////////////
  return (
    <section className='section-hero'>

      <div className='section-hero__container'>

        <p className='section-hero__text'>¡Acepta los retos y lleva tus habilidades de <span>HTML, CSS y JavaScript</span> al siguiente nivel!</p>
        
        {
          isAuthenticated ? (
            <a href='#section-categories' className='section-hero__button-acept'>Aceptar</a>
          ) : (
            <Link to='/login' className='section-hero__button-acept'>Aceptar</Link>
          )
        }

      </div>
    </section>
  )
}
