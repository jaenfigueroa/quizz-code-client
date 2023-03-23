import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

/////////////////////////////////////////////////////
export const Welcome = () => {

  const user = {
    name: 'Jaen Figueroa'
  }

  /////////////////////////////////////////////////////
  return (
    <section className='section-welcome'>

      <article className='section-welcome__article'>
        <h4 className='section-welcome__article-title'>¡Felicitaciones <span>{user.name}</span>!</h4>
        <p className='section-welcome__article-text'>Tu dirección de correo electrónico ha sido verificada con éxito.</p>
        <Link to='/login' className='section-welcome__article-button'>Iniciar sesion</Link>
      </article>

    </section>
  )
}
