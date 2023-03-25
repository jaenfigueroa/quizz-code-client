import React, { useState } from 'react'
import { updateUser } from '../../helpers/log/updateUser'
import { sendForm } from '../../helpers/sendForm'
import { ButtonGoogle } from '../ButtonGoogle/ButtonGoogle'
import './FormLog.css'
import { TargetState } from './TargetState/TargetState'

/// /////////////////////////////////
export const FormLog = ({ title, inputs, sendText, other, route, submitEnabled, redirect }) => {
  const [formData, setFormData] = useState({})

  const [targetState, setTargetState] = useState({ status: 'loading', targetVisible: false })

  // OBTENER VALORES DEL INPUT DINAMICAMENTE
  const getValues = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
    // console.log(formData)
  }

  // ENVIAR EL FORMULARIO Y REALIZAR LA PETICION A LA RUTA CORRESPONDIENTE
  const getForm = async (e) => {
    e.preventDefault()

    // solo se podra si el boton de enviar esta habilitado
    if (submitEnabled) {
      // para que se muestre la tarjeta cargando
      setTargetState(() => {
        return { status: 'loading', message: 'Estamos procesando tu solicitud, espere unos segundos.', targetVisible: true }
      })

      // enviar el formulario y realizar la peticion al back
      const result = await sendForm(formData, route)

      if (result.status === 'sucess') {
        updateUser(result.user) // actualizar usuario el local storage
      }

      // console.log(result)
      // console.log('se envio el formulario')

      // mostrar los resultados del back en la tarjeta
      setTargetState({ ...result, targetVisible: true })
    }
  }

  // PARA REGISTRARSE E INICAR SESION CON GOOGLE
  const getFormGoogle = async () => {
    console.log('se envia los datos de google al back')
    console.log(formData)

    // 1.activar el aviso
    setTargetState(() => {
      return { status: 'loading', message: 'Estamos procesando tu solicitud, espere unos segundos.', targetVisible: true }
    })

    // enviar el formulario y realizar la peticion al back
    const result = await sendForm(formData, route)

    if (result.status === 'sucess') {
      updateUser(result.user) // actualizar usuario el local storage
    }

    // mostrar los resultados del back en la tarjeta
    setTargetState({ ...result, targetVisible: true })
  }

  /// /////////////////////////////////
  return (
    <section className='seccion-log'>

      <article className='formlog'>

        {/* BLOQUE 1 (VACIO) */}
        <div className='formlog__mask' />

        {/* BLOQUE 2 */}
        <div className='formlog__block'>
          <h3 className='formlog__title'>{title}</h3>{/* TITULO */}

          {/* FORMULARIO */}
          <form className='formlog__form' onSubmit={getForm} onChange={getValues}>
            {inputs} {/* INPUTS DEL FORMULARIO */}

            {/* BOTON ENVIAR */}
            <input type='submit' value={sendText} className={`formlog__button-submit ${!submitEnabled && 'formlog__button-submit--disabled'}`} />
          </form>

          <ButtonGoogle setFormData={setFormData} getFormGoogle={getFormGoogle} />

          {other} {/* TEXTO PARA NAVEGAR A LA OTRA SECCION */}

        </div>

        {/* AVISO PAR MOSTRAR EL ESTADO DE LA PETICION */}
        <TargetState targetState={targetState} setTargetState={setTargetState} redirect={redirect} />

      </article>

    </section>
  )
}
