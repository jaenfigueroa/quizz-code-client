import React from 'react'

const NewQuestionFormInputField = ({ title, name, type, placeholder }) => {
  const min = type === 'number' ? 1 : null
  const max = type === 'number' ? 5 : null

  return (
    <div className='section-admin__block'>
      <span className='section-admin__title'>{title}</span>
      {type === 'number'
        ? (
          <input
            className='section-admin__textarea'
            name={name}
            type={type}
            min={min}
            max={max}
            placeholder={placeholder}
          />
          )
        : (
          <textarea
            className='section-admin__textarea'
            name={name}
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
          />
          )}
    </div>
  )
}

export default NewQuestionFormInputField
