import React, { useContext } from 'react'
import CategorySelect from './CategorySelect'
import AdminPageContext from '../../../../../context/AdminPageContext'

const QuestionsGridHeader = () => {
  const { setUserCurrentAction } = useContext(AdminPageContext)

  return (
    <div className='questions-grid-header'>

      {/* TITULO */}
      <p className='questions-grid-title'>Administra preguntas</p>

      <div>
        {/* SELECTOR DE CATEGORIA-FILTRADO */}
        <CategorySelect />

        {/* AGREGAR NUEVA PREGUNTA */}
        <input
          className='add-question-button'
          type='submit'
          value='Agregar pregunta'
          onClick={() => setUserCurrentAction('adding')}
        />

      </div>
    </div>
  )
}

export default QuestionsGridHeader
