import React, { useState } from 'react'
import './InputForm.css'

/////////////////////////////////////////////
export const InputForm = ({ label, type, name, validator = null }) => {

  const [test, setTest] = useState({ result: true, message: '' })

  //VALIDAR SI PASA EL TEST, EL VALOR QUE SE ESCRIBE EN EL INPUT
  const getTest = (e) => {

    //solo si tiene un validador asignado
    if (validator !== null) {
      const results = validator(e.target.value)

      setTest(results)
    }

  }

  /////////////////////////////////////////////
  return (
    <label>{label}
      <input type={type} name={name} onChange={getTest} autoComplete='off' required/>
      {
        test.message && (
          <span className={`input-form__message ${!test.result && 'input-form__message--red'}`}>
            {test.message}
          </span>
        )
      }
    </label>
  )
}