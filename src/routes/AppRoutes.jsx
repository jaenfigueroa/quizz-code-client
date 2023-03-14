import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import { Quizz } from '../pages/Quizz/Quizz'
import { Challenges } from '../pages/Languagex/Challenges'
import { Admin } from '../pages/Admin/Admin'

/////////////////////////////////////////////
export const AppRoutes = () => {

  const {isAuthenticated, isAdmin} = useContext(AppContext)


  /////////////////////////////////////////////
  return (
    <BrowserRouter>

      {/* HEADER Y NAV */}
      <Header/>

      {/* CUERPO */}
      <Routes>
        {/* <Route path='/' element={<Navigate to={!isAuthenticated ? '/login' : '/home'}/>}/> */}
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/ranking' element={<Ranking/>}/> {/* RANKING DE PUNTAJES */}
        <Route path='/home' element={<Home/>}/> {/* SELECTOR DEL AREA DE PREGUNTAS */}

        {
          !isAuthenticated ? (
            <>
              <Route path='/login' element={<Login/>}/> {/* INICIAR SESION */}
              <Route path='/register' element={<Register/>}/> {/* REGISTRARME */}
            </>
          ): (
            <>
              {/* EDITAR PERFIL */}
              <Route path='/profile' element={<Profile/>}/>

              {/* QUIZZ CON OPCIONES*/}
              <Route path='/practice/:category' element={<Quizz/>}/>

              {/* VER LOS EJERCICIOS CON EDITOR */}
              <Route path='/challenges/:category' element={<Challenges/>}/>
              {/* EJERCICIO UNICO CONE EDITOR*/}
              <Route path='/challenge/:category/:number' element={<Challenge/>}/>
            </>
          )
        }

        {
          isAdmin && <Route path='/admin/' element={<Admin/>}/>
        }

        <Route path='*' element={<Page404/>}/>
      </Routes>

      {/* FOOTER */}
        <Footer/>
    </BrowserRouter>
  )
}
