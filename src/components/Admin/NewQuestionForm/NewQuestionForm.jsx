import React, { useContext, useEffect, useState } from 'react'
import NewQuestionFormInputField from './NewQuestionFormInputField'
import QuestionChoicesField from './QuestionChoicesField'
import NewQuestionFormSubmitButton from './NewQuestionFormSubmitButton'
import { getUser } from '../../../helpers/log/getUser'
import { sendNewQuestionForm } from '../../../helpers/sendNewQuestionForm'
import { NewQuestionCategorySelect } from './NewQuestionCategorySelect'
import { GoBackButton } from './GoBackButton/GoBackButton'
import AdminPageContext from '../../../context/AdminPageContext'
import { getQuestionById } from '../../../helpers/getQuestionById'
import { parseQuestionFormResponse } from '../../../helpers/parseQuestionFormResponse'
import { sendQuestionUpdateForm } from '../../../helpers/sendQuestionUpdateForm'

const NewQuestionForm = () => {
  const user = getUser()
  const [formData, setFormData] = useState({
    category: '',
    question: '',
    'optional-code': '',
    'option-1-content-type': 'text',
    'option-1-content-language': null,
    'option-1': '',
    'option-2-content-type': 'text',
    'option-2-content-language': null,
    'option-2': '',
    'option-3-content-type': 'text',
    'option-3-content-language': null,
    'option-3': '',
    'option-4-content-type': 'text',
    'option-4-content-language': null,
    'option-4': '',
    'option-5-content-type': 'text',
    'option-5-content-language': null,
    'option-5': '',
    'correct-answer': ''
  })
  console.log(formData)
  const onSubmit = async (e) => {
    e.preventDefault()
    let status
    if (userCurrentAction === 'adding') {
      status = await sendNewQuestionForm(formData, user._id).status
    } else if (userCurrentAction === 'editing') {
      status = await sendQuestionUpdateForm(formData, questionInEditionId).status
    }

    // console.log(status)
    if (status === 'error' || status >= 400) {
      console.log('render error')
    } else {
      // redirect to success page
      console.log('redirect to success page')
    }
  }

  const getValues = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })  
  }

  const { questionInEditionId, userCurrentAction } = useContext(AdminPageContext)

  console.log(questionInEditionId)
  useEffect(() => {
    const fetchQuestionById = async () => {
      const response = await getQuestionById(questionInEditionId)
      const newFormData = parseQuestionFormResponse(response.question)
      setFormData(newFormData)
    }
    if (questionInEditionId) {
      fetchQuestionById()
    }
  }, [])

  useEffect(() => {
    const numberOfAnswers = 5;
    for (let number = 1; number <= numberOfAnswers; number++) {
      if (formData[`option-${number}-content-language`] === null && formData[`option-${number}-content-type`] === "code") {
        setFormData({
          ...formData,
          [`option-${number}-content-language`]: "html"
        })
      }
      if (formData[`option-${number}-content-type`] === "text" && formData[`option-${number}-content-language`] !== null) {
        setFormData({
          ...formData,
          [`option-${number}-content-language`]: null
        })
      }
    }
    
  }, [formData])
  return (
    <form
      className='section-admin__form'
      onChange={getValues}
      onSubmit={onSubmit}
    >
      <GoBackButton setFormData={setFormData} />
      <NewQuestionCategorySelect />
      <NewQuestionFormInputField
        title='Pregunta'
        name='question'
        type='text'
        placeholder='Pregunta General'
        value={formData.question}
      />
      <NewQuestionFormInputField
        title='Código (opcional)'
        name='optional-code'
        type='code'
        placeholder='Código que acompaña la pregunta'
        value={formData['optional-code']}
      />
      <QuestionChoicesField formData={formData} />
      <NewQuestionFormInputField
        title='Opción Correcta'
        name='correct-answer'
        type='number'
        placeholder='Número de la opción correcta'
        value={formData['correct-answer']}
      />
      <NewQuestionFormSubmitButton />
    </form>
  )
}

export default NewQuestionForm
