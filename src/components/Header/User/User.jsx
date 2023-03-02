import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './User.css'

//////////////////////////////////////
export const User = () => {

  const [componentActive, setComponentActive] = useState(false)

  const alternProfile = () => {
    setComponentActive(!componentActive)
  }


  //////////////////////////////////////
  return (
    <div className='user__container' onClick={alternProfile }>
      <img className='user__img' src="https://avatars.githubusercontent.com/u/69079292?v=4" alt="" />
      {
        componentActive && (
        <ul className='user__information'>
          <li className='user__name'>Jaen Figueroa</li>
          <li className='user__description'>Aqui va una descripcion del usuario</li>
          <Link className='user__button-edit' to='/profile'>Editar Perfil</Link>
        </ul>
        )
      }
    </div>
  )
}
