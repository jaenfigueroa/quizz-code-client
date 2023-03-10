import React, { useEffect, useState } from 'react'
import './GlobalTable.css'
import { getRanking } from '../../../helpers/getRanking'

//////////////////////////////////////
export const GlobalTable = () => {

  const [usersList, setUserlist] = useState([])


  useEffect(() => {
    const getUsers = async () => {
      const topFiftyUsers = await getRanking()
      setUserlist(topFiftyUsers)
    }

    getUsers()
  }, [])

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
          usersList && usersList.map((user, index) => (
            <article key={index}>
              <span>
                <img src={user.avatar} alt={`foto de ${user.name}`} />
                <p className='ranking-table-name'>{user.name}</p>
              </span>
              <p className='ranking-table-numbers'>{user.points}</p>
              <p className='ranking-table-numbers'>{user.challenges}</p>
            </article>
          ))
        }
      </main>
    </section>
  )
}
