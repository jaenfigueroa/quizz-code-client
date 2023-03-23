import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

import './Ranking.css'
import { GlobalTable } from './GlobalTable/GlobalTable'
import { UserCard } from './UserCard/UserCard'
import { getRanking } from '../../helpers/getRanking'

/// ////////////////////////////////////////
export const Ranking = () => {
  const { isAuthenticated } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  const [positionUser, setPositionUser] = useState(0)
  const [PointsUser, setPointsUser] = useState(0)
  const [listTable, setListTable] = useState([])

  // TRAER LOS TOP 50 DEL RANKING, PUNTOS, POSICION DEL USUARIO
  useEffect(() => {
    const getData = async () => {
      const data = await getRanking()

      setListTable(data.topFiftyUsers)
      setPositionUser(data.userPosition)
      setPointsUser(data.userPoints)

      setLoading(false)
    }

    getData()
  }, [])

  /// ////////////////////////////////////////
  return (
    <section className='section-ranking'>
      {/* TABLA DE INFORMACION DEL USUARIO */}
      {isAuthenticated && <UserCard positionUser={positionUser} PointsUser={PointsUser} />}

      {/* TABLA DE TODOS LOS USUARIOS DEL RANKING */}
      {!loading
        ? (
          <GlobalTable setLoading={setLoading} listTable={listTable} />
          )
        : (
          <p className='section-ranking__loading'>
            <i className='fa-solid fa-spinner' />
          </p>
          )}
    </section>
  )
}
