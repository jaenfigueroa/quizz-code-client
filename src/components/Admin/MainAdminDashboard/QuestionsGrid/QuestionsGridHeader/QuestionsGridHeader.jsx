import React from 'react'
import './QuestionsGridHeader.css'
import { AddQuestionButton } from './AddQuestionButton/AddQuestionButton'
import CategorySelect from './CategorySelect/CategorySelect'
import QuestionsGridTitle from './QuestionsGridTitle/QuestionsGridTitle'

const QuestionsGridHeader = () => {
  return (
    <div className='questions-grid-header'>
      <QuestionsGridTitle />
      <AddQuestionButton />
      <CategorySelect />
    </div>
  )
}

export default QuestionsGridHeader
