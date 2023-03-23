import React, { useEffect, useState } from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/FormLog/InputForm/InputForm'
import { testName } from '../../helpers/test/testName'
import { testEmail } from '../../helpers/test/testEmail'
import { testPassword } from '../../helpers/test/testPassword'
import { testForm } from '../../helpers/test/testForm'

const totalInputs = 3

/// //////////////////////////////////////
export const Register = () => {
  const [results, setResults] = useState({})
  const [submitEnabled, setSubmitEnabled] = useState(false)

  // useEffect(() => {
  //   console.log(results)
  // }, [results])

  /// VERIFICAR SI EL FORMULARIO SE PUEDE O NO PUEDE ENVIAR AUN
  useEffect(() => {
    setSubmitEnabled(testForm(results, totalInputs))
  }, [results])

  /// ///////////////////////
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /// //////////////////////////////////////
  return (
    <FormLog
      title='Registrarme'
      inputs={
        <>
          <InputForm
            label='Nombre y Apellido'
            type='text'
            name='name'
            validator={testName}
            minLength={3}
            setResults={setResults}
          />
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
            validator={testPassword}
            minLength={8}
            setResults={setResults}
          />
        </>
      }
      other={
        <p className='form-log__ask'>
          ¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesion</Link>
        </p>
      }
      sendText='Registrarme'
      route='/users/register'
      submitEnabled={submitEnabled}
    />
  )
}
