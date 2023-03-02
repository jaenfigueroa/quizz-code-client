import React from 'react'
import './Ranking.css'

///////////////////////////////////////////
export const Ranking = () => {


  ///////////////////////////////////////////
  return (
    <section className='section-ranking'>

      {/* TABLA DE INFORMACION EN EL RANKING DEL USUARIO */}
      <section className='section-ranking__user'>
        <h4 className='section-ranking__user-title'>Tus resultados</h4>
        <main className='section-ranking__user-main'>
          <div className='section-ranking__user-main-mask'>
            <img src="" alt="" />
          </div>
          <div>
            <p>458</p>
            <p>Puntos</p>
          </div>
          <div>
            <p>1657.°</p>
            <p>Posicion</p>
          </div>
        </main>
      </section>

      {/* TABLA DE TODOS LOS USUARIOS DEL RANKING */}
      <section className='section-ranking__table'>

        <header>
          <span>Usuario</span>
          <span>Puntos</span>
          <span>Retos</span>
        </header>

        <main>
          {/* USER 1 */}
          <article>
            <span className=''>
              <img src="" alt="" />
              <p>Paul Javaloyes</p>
            </span>
            <p>15455</p>
            <p>24</p>
          </article>

          {/* USER 2 */}
          <article>
            <span className=''>
              <img src="" alt="" />
              <p>Paul Javaloyes</p>
            </span>
            <p>15455</p>
            <p>24</p>
          </article>

          {/* USER 3 */}
          <article>
            <span className=''>
              <img src="" alt="" />
              <p>Paul Javaloyes</p>
            </span>
            <p>15455</p>
            <p>24</p>
          </article>
        </main>
      </section>

    </section>
  )
}
