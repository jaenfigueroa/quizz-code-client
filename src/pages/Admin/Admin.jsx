import React from 'react'
import './Admin.css'
import NewQuestionForm from '../../components/Admin/NewQuestionForm/NewQuestionForm'

/// ///////////////////////////////////////
export const Admin = () => {
  /// ///////////////////////////////////////
  return (
    <section className='section-admin'>
      <NewQuestionForm />
    </section>
  )
}
