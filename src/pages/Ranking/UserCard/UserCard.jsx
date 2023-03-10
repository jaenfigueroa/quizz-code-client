import React from 'react'
import { getUser } from '../../../helpers/log/getUser'
import './UserCard.css'

///////////////////////////////////////////
export const UserCard = () => {

  const user = getUser()

  ///////////////////////////////////////////
  return (
    <article className='user-card'>
      <h4 className='user-card__title'>Tus resultados</h4>
      <main className='user-card__main'>
        <div className='user-card__main-mask'>
          <img src={user.avatar} alt="" />
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
