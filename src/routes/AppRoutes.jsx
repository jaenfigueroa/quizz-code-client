import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Category } from '../pages/Category/Category'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { AppContext } from '../context/AppContext'
import { Challenge } from '../pages/Challenge/Challenge'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Page404 } from '../pages/Page404/Page404'
import { Profile } from '../pages/Profile/Profile'
import { Ranking } from '../pages/Ranking/Ranking'
import { Register } from '../pages/Register/Register'
import { Quizz } from '../pages/Quizz/QUizz'

/////////////////////////////////////////////
export const AppRoutes = () => {

  const {isAuthenticated} = useContext(AppContext)


  /////////////////////////////////////////////
  return (
    <BrowserRouter>

      {/* HEADER Y NAV */}
      <Header/>

      {/* CUERPO */}
      <Routes>
        <Route path='/' element={<Navigate to={!isAuthenticated ? '/login' : '/home'}/>}/>
        <Route path='/ranking' element={<Ranking/>}/> {/* RANKING DE PUNTAJES */}

        {
          !isAuthenticated ? (
            <>
              <Route path='/login' element={<Login/>}/> {/* INICIAR SESION */}
              <Route path='/register' element={<Register/>}/> {/* REGISTRARME */}
            </>
          ): (
            <>
              <Route path='/home' element={<Home/>}/> {/* SELECTOR DEL AREA DE PREGUNTAS */}
              <Route path='/challenge/:category/:number' element={<Challenge/>}/> {/* EJERCICIO UNICO */}
              <Route path='/profile' element={<Profile/>}/> {/* EDITAR PERFIL */}
              <Route path='/category/:category' element={<Category/>}/> {/* VER LOS EJERCICIOS CON EDITOR */}
              <Route path='/practice/:category' element={<Quizz/>}/> {/* VER LOS QUIZZ CON OPCIONES*/}
            </>
          )
        }

        <Route path='*' element={<Page404/>}/>
      </Routes>

      {/* FOOTER */}
        <Footer/>
    </BrowserRouter>
  )
}
