import React, { useState } from 'react'
import { updateProfile } from '../../../helpers/updateProfile'
import './SettingOption.css'

//////////////////////////////////////////////
export const SettingOption = ({ label, value = '', type, name }) => {

  const [active, setActive] = useState(true)
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

    const response = await updateProfile(type, formData[name] || value, formData['password'])
    const data = await response.json()

    console.log(data)
  }

  //////////////////////////////////////////////
  return (
    <section className="setting-card">
      {/* TITULO */}
      <span className="setting-card__title">{label}</span>

      {
        !active ? (
          <>
            <p className='setting-card__value'>{value}</p>
            <button type="button" className="setting-card__button" onClick={() => setActive(true)}>Editar</button>
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
    </section>
  )
}
