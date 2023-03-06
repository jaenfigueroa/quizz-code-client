import React, { useEffect, useState } from 'react'
import { formatDate } from '../../../helpers/formatDate'
import './TargetGithub.css'


///////////////////////////////
export const TargetGithub = ({userName}) => {

  const [user, setUser] = useState({})

  useEffect(()=> {

    const getUser = async() => {
      const request = await fetch(`https://api.github.com/users/${userName}`)
      const data = await request.json()

      setUser(data)
    }

    getUser()
  }, [])

  ///////////////////////////////
  return (
    <div className='card-github'>

      {/*CAJA 1 */}
      <div className='card-github__block1'>
        {/* img */}
        <article className='card-github__img-mask'>
          <img className='card-github__img' src={user.avatar_url} alt="" />
        </article>
        
        {/* informacion */}
        <div className='card-github__block1--container'>
          <p className='card-github__name'>{user.name}</p>
          <p className='card-github__user'>@{user.login}</p>
          <p className='card-github__create'>{formatDate(user.created_at)}</p>
        </div>
      </div>

      {/* BIOGRAFIA */}
      {/* <div className='card-github__bio'>{user.bio}</div> */}

      {/* CAJA DE INFORMACION */}
      <div className='card-github__block2'>
        <label>
          <span className='card-github__block2-title'>Repos</span>
          <span className='card-github__block2-number'>{user.public_repos}</span>
        </label>

        <label>
          <span className='card-github__block2-title'>Seguidores</span>
          <span className='card-github__block2-number'>{user.followers}</span>
        </label>

        <label>
          <span className='card-github__block2-title'>Siguiendo</span>
          <span className='card-github__block2-number'>{user.following}</span>
        </label>
      </div>

    </div>
  )
}