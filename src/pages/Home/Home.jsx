import React, { useContext, useEffect } from 'react'
import './Home.css'
import Category from '../../components/Category/Category'
import { Contributors } from '../../components/Contributors/Contributors';
import { AppContext } from '../../context/AppContext';
import { Hero } from '../../components/Hero/Hero';


//////////////////////////////////////////////
export const Home = () => {

  const { isAuthenticated } = useContext(AppContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //////////////////////////////////////////////
  return (
    <main className='section-home'>
      {/* SECTION HERO */}
      {/* SECCION DE CATEGORIAS DE LENGUAGES DISPONIBLES*/}
      {isAuthenticated ? <Category /> : <Hero />}

      {/* SECCION DE CONTRIBUIDORES */}
      <Contributors />

    </main>
  )
}
