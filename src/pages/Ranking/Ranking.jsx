import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import './Ranking.css'
import { GlobalTable } from './GlobalTable/GlobalTable'
import { UserCard } from './UserCard/UserCard'

///////////////////////////////////////////
export const Ranking = () => {

  const { isAuthenticated } = useContext(AppContext)

  ///////////////////////////////////////////
  return (
    <section className='section-ranking'>

      {/* TABLA DE INFORMACION DEL USUARIO */}
      {
        isAuthenticated && <UserCard/>
      }

      {/* TABLA DE TODOS LOS USUARIOS DEL RANKING */}
      <GlobalTable />

    </section>
  )
}
