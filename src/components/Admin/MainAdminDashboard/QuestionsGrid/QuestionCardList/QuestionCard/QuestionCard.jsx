import React from 'react'
import './QuestionCard.css'
import DeleteQuestionButton from '../Buttons/DeleteQuestionButton'
import EditQuestionButton from '../Buttons/EditQuestionButton'

const QuestionCard = ({ questionId, questionText }) => {
  return (
    <article className='question-card'>
      {/* TEXTO */}
      <p className='question-text'>{questionText}</p>

      <aside className='question-card-btn-container'>
        <EditQuestionButton questionId={questionId} />
        <DeleteQuestionButton questionId={questionId} />
      </aside>
    </article>
  )
}

export default QuestionCard
