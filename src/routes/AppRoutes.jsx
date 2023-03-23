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
import { Challenges } from '../pages/Languagex/Challenges'
import { Questionnaire } from '../pages/Questionnaire/Questionnaire'
import { Admin } from '../pages/Admin/Admin'
import ConfirmRegistration from '../pages/ConfirmRegistration/ConfirmRegistration'

/////////////////////////////////////////////
export const AppRoutes = () => {

  const { isAuthenticated, isAdmin } = useContext(AppContext)

  /////////////////////////////////////////////
  return (
    <BrowserRouter>

      {/* HEADER Y NAV */}
      <Header />

      {/* CUERPO */}
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/ranking' element={<Ranking />} /> {/* RANKING DE PUNTAJES */}
        <Route path='/home' element={<Home />} /> {/* SELECTOR DEL AREA DE PREGUNTAS */}
        <Route path="/confirm-registration/:confirmationToken" element={<ConfirmRegistration />} /> {/* VERIFICAR CORREO */}

        {
          !isAuthenticated ? (
            <>
              <Route path='/login' element={<Login />} /> {/* INICIAR SESION */}
              <Route path='/register' element={<Register />} /> {/* REGISTRARME */}
            </>
          ) : (
            <>
              <Route path='/profile' element={<Profile />} /> {/* EDITAR PERFIL */}
              <Route path='/practice/:category' element={<Questionnaire />} />{/* QUIZZ CON OPCIONES*/}
              <Route path='/challenges/:category' element={<Challenges />} />{/* VER LOS EJERCICIOS CON EDITOR */}
              <Route path='/challenge/:category/:number' element={<Challenge />} />{/* EJERCICIO UNICO CONE EDITOR*/}
            </>
          )
        }
        {
          isAdmin && <Route path="/admin" element={<Admin />} />
        }

        <Route path='*' element={<Page404 />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  )
}
