import React, {  useState } from 'react'
import './InputForm.css'

/////////////////////////////////////////////
export const InputForm = ({ label, type, name, validator = null , minLength, setResults, }) => {

  const [test, setTest] = useState({ result: true, message: '' })

  //VALIDAR SI PASA EL TEST, EL VALOR QUE SE ESCRIBE EN EL INPUT
  const getTest = (e) => {

    //solo si tiene un validador asignado
    if (validator !== null) {
      const results = validator(e.target.value)
      // console.log(results)

      setTest(results)

      //extra, para elegir entre poder o no poder enviar formulario
      setResults((currentState) => {

        return {...currentState, [name]: results.result}
      }) 
    }

  }



  /////////////////////////////////////////////
  return (
    <label>{label}
      <input
        className='formlog__input'
        type={type}
        name={name}
        onChange={getTest}
        autoComplete='off'
        required
        minLength={minLength}
        placeholder={label}/>
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