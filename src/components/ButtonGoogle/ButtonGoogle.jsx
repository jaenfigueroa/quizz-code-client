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
        <div className='button-google__mask'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='' />
        </div>
        Continuar con Google
      </button>
    </div>
  )
}
