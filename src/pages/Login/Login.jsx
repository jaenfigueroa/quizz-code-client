import React from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/FormLog/InputForm/InputForm'

//////////////////////////////////////////
export const Login = () => {


  //////////////////////////////////////////
  return (
    <FormLog
      title='Iniciar Sesion'

      inputs={
        <>
          <InputForm label='Correo Electronico' type='email' name='email'/>
          <InputForm label='Contraseña' type='password' name='password'/>
        </>
      }

      other={
        <p className='form-log__ask'>
          ¿Aun no tienes una cuenta? <Link to='/register'>Registrate</Link>
        </p>
      }

      sendText='Ingresar'

      route='/login' />
  )
}

///////////////////////////////////////////////////
