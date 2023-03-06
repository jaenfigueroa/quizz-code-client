import React from 'react'
import './Contributors.css'
import { TargetGithub } from './targetGithub/TargetGithub'

//////////////////////////////////////////////
export const Contributors = () => {

  let list = ['jaenfigueroa', 'ragomez7', 'LuDevvv', 'SamVilorioA']

  //////////////////////////////////////////////
  return (
    <section className='section-contributors'>

      <h4 className='component-title'>Contribuidores</h4>

      <div className='section-contributors__container'>
        {
          list.map((user, index) => (
            <a href={`https://github.com/${user}`} key={index}>
              <TargetGithub userName={user}  />
            </a>
          ))
        }
      </div>
    </section>
  )
}
