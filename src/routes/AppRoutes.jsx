import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Home } from '../pages/Home/Home'
import { Page404 } from '../pages/Page404/Page404'


export const AppRoutes = () => {
  return (
    <BrowserRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='*' element={<Page404/>}/>
        </Routes>

      </main>

      {/* FOOTER */}
      <Footer/>

    </BrowserRouter>
  )
}
