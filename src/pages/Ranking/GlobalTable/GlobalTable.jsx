import React from 'react'
import './GlobalTable.css'

//////////////////////////////////////
export const GlobalTable = ({ listTable }) => {


  //////////////////////////////////////
  return (
    <section className='global-table'>

      <header>
        <span>Usuario</span>
        <span>Puntos</span>
        <span>Retos</span>
      </header>

      <main>
        {
          listTable && listTable.map((user, index) => (
            <article key={index}>
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
