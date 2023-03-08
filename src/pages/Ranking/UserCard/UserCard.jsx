import React from 'react'
import './UserCard.css'

///////////////////////////////////////////
export const UserCard = () => {


  ///////////////////////////////////////////
  return (
    <article className='user-card'>
      <h4 className='user-card__title'>Tus resultados</h4>
      <main className='user-card__main'>
        <div className='user-card__main-mask'>
          <img src="https://avatars.githubusercontent.com/u/69079292?v=4" alt="" />
        </div>
        <div>
          <p>458</p>
          <p>Puntos</p>
        </div>
        <div>
          <p>1657°</p>
          <p>Posicion</p>
        </div>
      </main>
    </article>
  )
}
