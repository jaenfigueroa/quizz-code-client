import React from 'react'
import './Admin.css'
import { InputOption } from '../../components/InputOption/InputOption'

//////////////////////////////////////////
export const Admin = () => {


  //////////////////////////////////////////
  return (
    <section className='section-admin'>
      <form className='section-admin__form'>

        <div className='section-admin__block'><span className='section-admin__title'>Pregunta</span>
          <textarea className='section-admin__textarea' type="text" placeholder='pregunta general' />
        </div>

        <div className='section-admin__block' ><span className='section-admin__title'>Codigo</span>
          <textarea className='section-admin__textarea' type="text" placeholder='codigo que acompaña a la pregunta (opcional)' />
        </div>

        {/* 5 OPCIONES */}
        <div className='section-admin__block'><span className='section-admin__title'>5 posibles respuestas</span>
          <InputOption number='1'/><hr/>
          <InputOption number='2'/><hr/>
          <InputOption number='3'/><hr/>
          <InputOption number='4'/><hr/>
          <InputOption number='5'/>
        </div>

        <div className='section-admin__block'><span className='section-admin__title'>Opcion Correcta</span>
          <input className='section-admin__textarea' type="number" min={1} max={5} placeholder='numero de la opcion correcta' />
        </div>

        <input className='section-admin__submit' type="submit" value="Guardar" />
      </form>
    </section>
  )
}
