import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppContext } from '../../../context/AppContext'
import { updateUser } from '../../../helpers/log/updateUser'
import { updateProfile } from '../../../helpers/updateProfile'
import './SettingOption.css'

//////////////////////////////////////////////
export const SettingOption = ({ label,  name, value, type, editable }) => {

  const { updateState } = useContext(AppContext)

  const [active, setActive] = useState(false)
  const [alertVisible, setAlertVisible] = useState({ visible: false, status: 'loading', text: 'Espera unos segundos...' })

  const [formData, setFormData] = useState({})

  //OBTENER VALORES DEL INPUT DINAMICAMENTE
  const getValues = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
    // console.log(formData)
  }

  //ENVIAR EL FORMULARIO Y LA PETICION
  const getSubmit = async (e) => {
    e.preventDefault()

    setAlertVisible({ visible: true, text: 'Espera unos segundos...', status: 'loading' })

    const data = await updateProfile(type, formData[name] || value, formData['password'])

    setAlertVisible({ visible: true, text: data.message, status: data.status })

    //cerrar el formulario
    //actualizar el local storageusuario
    //actualizar el stado
    //ocultar el aviso 4 segundos despues
    if (data.status === 'success') {
      setActive(false)
      updateUser(data.user)
      updateState()

      setTimeout(() => {
        setAlertVisible({ visible: false, status: 'loading', text: 'Espera unos segundos...' })
      }, 4000)
    }
  }

  //////////////////////////////////////////////
  return (
    <section className="setting-card">
      {/* TITULO */}
      <p className="setting-card__title">{label}</p>

      {
        !active ? (
          <>
            <p className='setting-card__value'>{value}</p>
            {
              editable && <button type="button" className="setting-card__button" onClick={() => setActive(true)}>Editar</button>
            }

          </>
        ) : (
          <form onSubmit={getSubmit}>
            <input
              type={type}
              name={name}
              className=' setting-card__input'
              defaultValue={value}
              placeholder={`${label} ${type === 'password' ? 'Nueva' : ''}`}
              onChange={getValues}
              required />
            <input
              type='password'
              name='password'
              className={`setting-card__input`}
              placeholder={`contraseña ${type === 'password' ? 'Antigua' : ''}`}
              onChange={getValues}
              required />

            <div className="setting-card__container">
              <button
                type="submit"
                className="setting-card__button">Actualizar</button>
              <button
                type="button"
                className="setting-card__button"
                onClick={() => setActive(false)}>Cancelar</button>
            </div>
          </form>
        )
      }

      {
        alertVisible.visible && <span className={`setting-card__alert ${alertVisible.status === 'error' ? 'setting-card__alert--red' : ''}`}>{alertVisible.text}</span>
      }

    </section>
  )
}
