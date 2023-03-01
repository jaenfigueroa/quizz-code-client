import React from 'react'
import { FormLog } from '../../components/FormLog/FormLog'
import './Register.css'
import imgRegister from '../../assets/register.svg'
import { getRegister } from '../../helpers/getRegister'

/////////////////////////////////////////
export const Register = () => {



  /////////////////////////////////////////
  return (
    <div className='register'>
      <FormLog
        title={'Registrate'}
        otherUrl={{text1: '¿Ya tienes una cuenta?',text2: 'Inicia Sesion', url: '/login'}}
        img={imgRegister}
        action={getRegister}/>
    </div>
  )
}
