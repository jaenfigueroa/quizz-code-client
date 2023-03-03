import React, { useState } from 'react'
import { listUser } from './ListUser'
import './Ranking.css'

///////////////////////////////////////////
export const Ranking = () => {

  const [usersList, setUserlist] = useState(listUser)

  ///////////////////////////////////////////
  return (
    <section className='section-ranking'>

      {/* TABLA DE INFORMACION EN EL RANKING DEL USUARIO */}
      <article className='section-ranking__user'>
        <h4 className='section-ranking__user-title'>Tus resultados</h4>
        <main className='section-ranking__user-main'>
          <div className='section-ranking__user-main-mask'>
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

      {/* TABLA DE TODOS LOS USUARIOS DEL RANKING */}
      <section className='section-ranking__table'>

        <header>
          <span>Usuario</span>
          <span>Puntos</span>
          <span>Retos</span>
        </header>

        <main>
          {
            usersList && usersList.map((user, index) => (
              <article key={index}>
                <span>
                  <img src={`https://randomuser.me/api/portraits/men/${ Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
                  <p>{user.name}</p>
                </span>
                <p>{user.points}</p>
                <p>{user.challenges}</p>
              </article>
            ))
          }
        </main>
      </section>

    </section>
  )
}
