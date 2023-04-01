import React from 'react'
import './QuestionsGridPagination.css'
import { NextButton } from './Buttons/NextButton'
import { PreviousButton } from './Buttons/PreviousButton'
import { CurrentPageInfo } from './CurrentPageInfo/CurrentPageInfo'

export const QuestionsGridPagination = () => {
  return (
    <article className='questions-grid-pagination'>
      <PreviousButton />
      <CurrentPageInfo />
      <NextButton />
    </article>
  )
}
