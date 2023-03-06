import React from 'react'
import './Contributors.css'

//////////////////////////////////////////////
export const Contributors = () => {



  //////////////////////////////////////////////
  return (
    <section className='section-contributors'>
      <h4 className='section-contributors__title'>Contribuidores</h4>
      <div className='section-contributors__container'>
        <div className='section-contributors__card'>
          <article className='section-contributors__img-mask'>
            <img className='section-contributors__img' src={`https://randomuser.me/api/portraits/men/${ Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
          </article>
          <p className='section-contributors__name'>@userName</p>
        </div>

        <div className='section-contributors__card'>
          <article className='section-contributors__img-mask'>
            <img className='section-contributors__img' src={`https://randomuser.me/api/portraits/men/${ Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
          </article>
          <p className='section-contributors__name'>@userName</p>
        </div>

        <div className='section-contributors__card'>
          <article className='section-contributors__img-mask'>
            <img className='section-contributors__img' src={`https://randomuser.me/api/portraits/men/${ Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
          </article>
          <p className='section-contributors__name'>@userName</p>
        </div>

        <div className='section-contributors__card'>
          <article className='section-contributors__img-mask'>
            <img className='section-contributors__img' src={`https://randomuser.me/api/portraits/men/${ Math.floor(Math.random() * 99) + 1}.jpg`} alt="" />
          </article>
          <p className='section-contributors__name'>@userName</p>
        </div>
      </div>
    </section>
  )
}
