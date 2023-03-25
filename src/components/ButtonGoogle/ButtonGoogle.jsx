import React from 'react'
import { signInWithGoogle } from '../../firebase/auth'
import './ButtonGoogle.css'

/// ////////////////////////////////////////////////
export const ButtonGoogle = ({ setFormData, getFormGoogle }) => {
  const getLogin = async () => {
    const data = await signInWithGoogle()
    // console.log(data)

    await setFormData({
      name: data.displayName,
      email: data.email,
      avatar: data.photoURL,
      password: data.accessToken
    })

    await getFormGoogle()
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
