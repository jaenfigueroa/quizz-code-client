import React, { useState } from 'react'
import { sendForm } from '../../helpers/sendForm'
import './FormLog.css'
import { TargetState } from './TargetState/TargetState'

////////////////////////////////////
export const FormLog = ({ title, inputs, sendText, other, route, submitEnabled }) => {

  const [formData, setFormData] = useState({})

  const [targetState, setTargetState] = useState({targetVisible: false})

  //OBTENER VALORES DEL INPUT DINAMICAMENTE
  const getValues = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
    // console.log(formData)
  }

  //ENVIAR EL FORMULARIO Y REALIZAR LA PETICION A LA RUTA CORRESPONDIENTE
  const getForm = (e) => {
    e.preventDefault()

    //solo se podra si el boton de enviar esta habilitado
    if (submitEnabled) {
      const result = sendForm(formData, route)

      setTargetState({...result, targetVisible: true})
      // console.log('se envio el formulario')
    }
  }



  ////////////////////////////////////
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
            <input type="submit" value={sendText} className={`formlog__button-submit ${!submitEnabled && 'formlog__button-submit--disabled'}`} />
          </form>

          {other} {/* TEXTO PARA NAVEGAR A LA OTRA SECCION */}
        </div>

        {/* AVISO PAR MOSTRAR EL ESTADO DE LA PETICION */}
        <TargetState targetState={targetState} setTargetState={setTargetState}/>
        

      </article>

    </section>
  )
}
