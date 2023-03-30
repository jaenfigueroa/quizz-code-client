import React from 'react'

const NewQuestionFormInputField = ({ title, name, type, placeholder, value }) => {
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
            value={value}
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
            value={value}
          />
          )}
    </div>
  )
}

export default NewQuestionFormInputField
