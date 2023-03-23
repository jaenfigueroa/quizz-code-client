import React from 'react'
import './Admin.css'
import { InputOption } from '../../components/Admin/InputOption/InputOption'
import NewQuestionFormInputField from '../../components/Admin/NewQuestionForm/NewQuestionFormInputField'
import NewQuestionFormSubmitButton from '../../components/Admin/NewQuestionForm/NewQuestionFormSubmitButton'
import QuestionChoicesField from '../../components/Admin/NewQuestionForm/QuestionChoicesField'
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
