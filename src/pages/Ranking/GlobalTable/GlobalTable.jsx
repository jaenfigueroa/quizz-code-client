import React from 'react'
import { getUser } from '../../../helpers/log/getUser'
import './GlobalTable.css'

//////////////////////////////////////
export const GlobalTable = ({ listTable }) => {

  const userSaved = getUser()

  //////////////////////////////////////
  return (
    <section className='global-table'>

      <div className='global-table__top-container'>
        <div>
          <i className="fa-solid fa-1"></i>
          <i className="fa-solid fa-shield"></i>
        </div>
        <div>
          <i className="fa-solid fa-2"></i>
          <i className="fa-solid fa-shield"></i>
        </div>
        <div>
          <i className="fa-solid fa-3"></i>
          <i className="fa-solid fa-shield"></i>
        </div>
      </div>

      <header>
        <span>Usuario</span>
        <span>Puntos</span>
        <span>Retos</span>
      </header>

      <main>
        {
          listTable && listTable.map((user, index) => (
            <article key={index} className={userSaved && user.name === userSaved.name ? 'user':''}>
              <span>
                <img src={user.avatar} alt={`foto de ${user.name}`} />
                <p className='ranking-table__name'>{user.name}</p>
              </span>
              <p className='ranking-table__numbers'>{user.points}</p>
              <p className='ranking-table__numbers ranking-table__numbers--2'>{user.challenges}</p>
            </article>
          ))
        }
      </main>
    </section>
  )
}
