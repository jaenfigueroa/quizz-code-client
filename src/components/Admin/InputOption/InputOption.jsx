import React from 'react'

export const InputOption = ({ number }) => {
  /// ///////////////////////////////////////////
  return (
    <div className='section-admin__block-2'>
      <div className='section-admin__container-option'>
        <span className='section-admin__option-number'>{number}</span>

        <select className='section-admin__select' name={`option-${number}-content-type`}>
          <option value='text'>Texto</option>
          <option value='code'>Codigo</option>
        </select>

        <select className='section-admin__select' name={`option-${number}-content-language`}>
          <option value='html'>HTML</option>
          <option value='css'>CSS</option>
          <option value='javascript'>Javascript</option>
        </select>

      </div>
      <textarea className='section-admin__textarea' type='text' name={`option-${number}`} placeholder={`Opción ${number}`} />
    </div>
  )
}
