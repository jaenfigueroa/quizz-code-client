import React from 'react'

/////////////////////////////////////////////
export const InputForm = ({label, type, name }) => {


  /////////////////////////////////////////////
  return (
    <label>{label}
      <input type={type} name={name} />
    </label>
  )
}