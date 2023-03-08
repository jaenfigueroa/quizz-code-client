import React from 'react'
import './NumberBar.css'

/////////////////////////////////////////
export const Numberbar = ({ percentage }) => {

  /////////////////////////////////////////
  return (
    <div
      className='languageCard__bar'
      style={{ background: `linear-gradient(90deg, var(--blue), var(--green) ${percentage}%, var(--gray-2) 0%)` }} />
  )
}
