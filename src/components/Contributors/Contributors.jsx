import React, { memo } from 'react'
import './Contributors.css'
import { TargetGithub } from './targetGithub/TargetGithub'

/// ///////////////////////////////////////////
export const Contributors = memo(() => {
  const list = ['jaenfigueroa', 'ragomez7', 'LuisAAngel', 'SamVilorioA']

  /// ///////////////////////////////////////////
  return (
    <section className='section-contributors'>

      <h4 className='component-title'>Contribuidores</h4>

      <div className='section-contributors__container'>
        {
          list.map((user, index) => (
            <a href={`https://github.com/${user}`} key={index} target='_blank' rel='noreferrer'>
              <TargetGithub userName={user} />
            </a>
          ))
        }
      </div>
    </section>
  )
})
