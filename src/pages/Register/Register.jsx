import React from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/FormLog/InputForm/InputForm'
import { testName } from '../../helpers/test/testName'
import { testEmail } from '../../helpers/test/testEmail'
import { testPassword } from '../../helpers/test/testPassword'

/////////////////////////////////////////
export const Register = () => {


  /////////////////////////////////////////
  return (
    <FormLog
      title='Registrarme'

      inputs={
        <>
          <InputForm label='Nombre y Apellido' type='text' name='name' validator={testName}/>
          <InputForm label='Correo Electronico' type='email' name='email' validator={testEmail}/>
          <InputForm label='Contraseña' type='password' name='password' validator={testPassword}/>
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
