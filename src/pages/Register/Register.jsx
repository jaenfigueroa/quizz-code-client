import React from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/FormLog/InputForm/InputForm'

/////////////////////////////////////////
export const Register = () => {


  /////////////////////////////////////////
  return (
    <FormLog
      title='Registrarme'

      inputs={
        <>
          <InputForm label='Nombre y Apellido' type='text' name='name'/>
          <InputForm label='Correo Electronico' type='email' name='email'/>
          <InputForm label='Contraseña' type='password' name='passwword'/>
        </>
      }

      other={
        <p className='form-log__ask'>
          ¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesion</Link>
        </p>
      }

      sendText='Registrarme'

      route='/register' />
  )

}
