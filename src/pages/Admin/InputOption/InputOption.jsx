import React from 'react'

//////////////////////////////////////////////
export const InputOption = ({number}) => {



  //////////////////////////////////////////////
  return (
    <div className='section-admin__block-2'>
      <div className='section-admin__container-option'>
        <span className='section-admin__option-number'>{number}</span>

        <select className='section-admin__select'>
          <option value="texto">Texto</option>
          <option value="Codigo">Codigo</option>
        </select>

        <select className='section-admin__select'>
          <option value="texto">Html</option>
          <option value="Codigo">CSS</option>
          <option value="Codigo">Javascript</option>
        </select>

      </div>
      <textarea className='section-admin__textarea' type="text" placeholder={`opcion ${number}`} />
    </div>
  )
}
