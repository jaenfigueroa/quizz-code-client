import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import './UserCard.css'

///////////////////////////////////////////
export const UserCard = () => {

  const {user} =  useContext(AppContext)

  ///////////////////////////////////////////
  return (
    <article className='user-card'>
      <h4 className='user-card__title'>Tus resultados</h4>
      <main className='user-card__main'>
        <div className='user-card__main-mask'>
          <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" alt="" />
        </div>
        <div>
          <p>{user.points || 0}</p>
          <p>Puntos</p>
        </div>
        <div>
          <p>{user.position || 200}</p>
          <p>Posicion</p>
        </div>
      </main>
    </article>
  )
}
