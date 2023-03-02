import React from 'react'
import './Home.css'
import heroImg from '../../assets/hero.svg'
import { Link } from 'react-router-dom'

//////////////////////////////////////////////
export const Home = () => {



  //////////////////////////////////////////////
  return (
    <main className='section-home'>

      {/* SECTION HERO */}
      <section className='section-home__hero'>

        <div className='section-home-1'>
          <p>¡Acepta el reto y lleva tus habilidades de CSS, HTML y JavaScript al siguiente nivel!</p>
        </div>

        <div className='section-home-2'>
          <div className='section-home__mask'>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>

      {/* SECTION CATEGORIAS */}
      <section className='section-home__categories'>
        <h5>Categorias</h5>
        
        <div>
          <article>
            html
            <Link className='button-pb' to='/category/html'>Entrar</Link>
          </article>
          <article>
            css
            <Link className='button-pb' to='/category/css'>Entrar</Link>
          </article>
          <article>
            javascript
            <Link className='button-pb' to='/category/javascript'>Entrar</Link>
          </article>
        </div>
      </section>

    </main>
  )
}
