import React, { useEffect, useState } from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/FormLog/InputForm/InputForm'
import { testEmail } from '../../helpers/test/testEmail'
import { testForm } from '../../helpers/test/testForm'
import { testPassword } from '../../helpers/test/testPassword'

const totalInputs = 2

/// ///////////////////////////////////////
export const Login = () => {
  const [results, setResults] = useState({})
  const [submitEnabled, setSubmitEnabled] = useState(false)

  /// VERIFICAR SI EL FORMULARIO SE PUEDE O NO PUEDE ENVIAR AUN
  useEffect(() => {
    setSubmitEnabled(testForm(results, totalInputs))
  }, [results])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /// ///////////////////////////////////////
  return (
    <FormLog
      title='Iniciar Sesion'
      inputs={
        <>
          <InputForm
            label='Correo Electronico'
            type='email'
            name='email'
            validator={testEmail}
            minLength={5}
            setResults={setResults}
          />
          <InputForm
            label='Contraseña'
            type='password'
            name='password'
            minLength={8}
            validator={testPassword}
            setResults={setResults}
          />
        </>
      }
      other={
        <p className='form-log__ask'>
          ¿Aun no tienes una cuenta? <Link to='/register'>Registrate</Link>
        </p>
      }
      sendText='Ingresar'
      route='/users/login'
      submitEnabled={submitEnabled}
    />
  )
}

/// ////////////////////////////////////////////////
