import React from 'react'
import { InputOption } from '../InputOption/InputOption'

const QuestionChoicesField = ({ formData }) => {
  return (
    <div className='section-admin__block'>
      <span className='section-admin__title'>5 posibles respuestas</span>
      <InputOption number='1' formData={formData}  />
      <hr />
      <InputOption number='2' formData={formData}  />
      <hr />
      <InputOption number='3' formData={formData}  />
      <hr />
      <InputOption number='4' formData={formData}  />
      <hr />
      <InputOption number='5' formData={formData}  />
    </div>
  )
}

export default QuestionChoicesField
