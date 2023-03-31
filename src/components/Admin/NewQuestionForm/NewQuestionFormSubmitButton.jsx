import React, { useContext } from 'react'
import AdminPageContext from '../../../context/AdminPageContext'

const NewQuestionFormSubmitButton = () => {
  const { userCurrentAction } = useContext(AdminPageContext);
  const value = userCurrentAction === "adding" ? "Guardar" : "Actualizar";
  return (
    <input
      className='section-admin__submit'
      type='submit'
      value={value}
    />
  )
}

export default NewQuestionFormSubmitButton
