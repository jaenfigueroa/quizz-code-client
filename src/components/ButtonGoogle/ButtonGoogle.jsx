import React from 'react'
import { signInWithGoogle } from '../../firebase/auth'
import './ButtonGoogle.css'

/// ////////////////////////////////////////////////
export const ButtonGoogle = ({ getFormGoogle }) => {
  const getLogin = async () => {
    const data = await signInWithGoogle()
    // console.log(data)

    const user = {
      name: data.displayName,
      email: data.email,
      password: data.accessToken,
      avatar: data.photoURL
    }
    // console.log(user)

    getFormGoogle(user)
  }

  /// ////////////////////////////////////////////////
  return (
    <div className='button-google-container'>
      <span>O</span>
      <button className='button-google' onClick={getLogin}>
        <i className='fa-brands fa-google' />
        Continuar con Google
      </button>
    </div>
  )
}
