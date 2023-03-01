import React from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import './Login.css'
import imgLogin from '../../assets/login.svg'
import { getLogin } from '../../helpers/getLogin'

//////////////////////////////////////////
export const Login = () => {


  //////////////////////////////////////////
  return (
    <div className='login'>
      <FormLog
        title={'Inicia Sesion'}
        otherUrl={{text1: '¿Aun no tienes una cuenta?', text2: 'registrate', url: '/register'}}
        img={imgLogin}
        action={getLogin}/>
    </div>
  )
}
