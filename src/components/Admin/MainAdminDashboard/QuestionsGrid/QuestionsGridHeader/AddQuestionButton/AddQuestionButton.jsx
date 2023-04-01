import React, { useContext } from 'react'
import AdminPageContext from '../../../../../../context/AdminPageContext'

export const AddQuestionButton = () => {
  const { setUserCurrentAction } = useContext(AdminPageContext)
  return (
    <input
      className='add-question-button'
      type='submit'
      value='Agregar pregunta'
      onClick={() => setUserCurrentAction('adding')}
    />
  )
}
