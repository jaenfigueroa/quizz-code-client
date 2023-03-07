import React, { useContext } from 'react'
import './Home.css'
import Category from '../../components/Category/Category'
import { Contributors } from '../../components/Contributors/Contributors';
import { AppContext } from '../../context/AppContext';
import { Hero } from '../../components/Hero/Hero';


//////////////////////////////////////////////
export const Home = () => {

  const {isAuthenticated} = useContext(AppContext)


  //////////////////////////////////////////////
  return (
    <main className='section-home'>

      {/* SECTION HERO */}
      <Hero/>

      {/* SECCION DE CATEGORIAS DE LENGUAGES DISPONIBLES*/}
      {
        isAuthenticated && <Category/>
      }

      {/* SECCION DE CONTRIBUIDORES */}
      <Contributors/>

    </main>
  )
}
