import React, { useEffect, useState } from 'react'
import './GlobalTable.css'
import { sortList } from '../../../helpers/SortList'
import { listUser } from '../ListUser'

//////////////////////////////////////
export const GlobalTable = () => {

  const [usersList, setUserlist] = useState([])


  useEffect(() => {
    let sortedList = sortList(listUser)
    setUserlist(sortedList)
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
                <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
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
