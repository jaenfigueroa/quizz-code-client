import React from 'react'
import './Home.css'
import heroImg from '../../assets/hero2.svg'
import { Link } from 'react-router-dom'
import CategoryList from '../../components/CategoryList'

//////////////////////////////////////////////
const categories = [
  {
    name: "HTML"
  },
  {
    name: "CSS"
  },
  {
    name: "JavaScript"
  }
];

export const Home = () => {
  //////////////////////////////////////////////
  return (
    <main className='section-home'>

      {/* SECTION HERO */}
      <section className='section-home__hero'>

        <div className='section-home-1'>
          <p>¡Acepta el reto y lleva tus habilidades de <span>HTML, CSS y JavaScript</span> al siguiente nivel!</p>
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
          <CategoryList categories={categories} />
      </section>

    </main>
  )
}
