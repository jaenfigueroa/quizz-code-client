import React, { useEffect, useContext } from 'react'
import { getUser } from '../../helpers/log/getUser'
import './Profile.css'
import { SettingAvatar } from './SettingAvatar/SettingAvatar'
import { SettingOption } from './SettingOption/SettingOption'
import { resetPassword } from '../../helpers/resetPassword'
import { deleteUser } from '../../helpers/log/deleteUser'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

/// /////////////////////////////////////
export const Profile = () => {
  const user = getUser()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  /// /////////////////////////////////////
  return (
    <section className='section-profile'>
      <div className='section-profile__block'>
        <h5 className='section-profile__title'>Configuración general de la cuenta</h5>

        <section className='section-profile__table'>
          <SettingAvatar value={user.avatar} idUser={user._id} />
          <button className='button-edit-avatar' onClick={() => document.querySelector('#imageAvatar').click()}>Editar foto de perfil</button>
          <SettingOption
            label='Descripción'
            type='description'
            name='description'
            value={user.description}
            editable
          />
          <SettingOption
            label='Nombre y Apellido'
            type='name'
            name='name'
            value={user.name}
            editable
          />
          <SettingOption
            label='Correo Electronico'
            type='email'
            name='email'
            value={user.email}
            editable={false}
          />

          {/* RESETEAR CONTRASEÑA */}
          <section className='setting-card'>
            <p className='setting-card__title'>Contraseña</p>
            <button
              type='submit'
              className='setting-card__button'
              onClick={() => {
                resetPassword()
                deleteUser() // eliminar datos del usario del local storage
                setIsAuthenticated(false)
                navigate('/login')
              }}
            >Resetear Contraseña
            </button>
          </section>
        </section>

      </div>

    </section>
  )
}
