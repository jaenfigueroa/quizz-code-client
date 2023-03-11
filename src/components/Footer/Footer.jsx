import React from 'react'
import './Footer.css'

////////////////////////////////////////////////////
export const Footer = () => {

  const year = new Date().getFullYear()



  ////////////////////////////////////////////////////
  return (
    <footer className='footer'>
      <p className='footer__text'>
        &copy; {year}. Todos los derechos reservados.
      </p>
    </footer>
  )
}
