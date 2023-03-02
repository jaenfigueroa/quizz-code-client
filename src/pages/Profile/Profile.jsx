import React from 'react'
import './Profile.css'

////////////////////////////////////////
export const Profile = () => {



  ////////////////////////////////////////
  return (
    <section className='section-profile'>

      <form>
        <div></div>
        <input type="text" placeholder='Nombre' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Contraseña' />
        <button type='submit'>Actualizar Perfil</button>
      </form>

    </section>
  )
}
