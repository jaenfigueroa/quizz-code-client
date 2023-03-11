import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

import './Ranking.css'
import { GlobalTable } from './GlobalTable/GlobalTable'
import { UserCard } from './UserCard/UserCard'

///////////////////////////////////////////
export const Ranking = () => {

  const { isAuthenticated } = useContext(AppContext)
  const [loading, setLoading] = useState(true)


  ///////////////////////////////////////////
  return (
    <section className='section-ranking'>

      {/* TABLA DE INFORMACION DEL USUARIO */}
      {
        isAuthenticated && <UserCard />
      }

      {/* TABLA DE TODOS LOS USUARIOS DEL RANKING */}
      <GlobalTable setLoading={setLoading}/>

      {
        loading && (
          <p className='section-ranking__loading'>
            <i className="fa-solid fa-spinner"></i>
          </p>
        )
      }


    </section>
  )
}
