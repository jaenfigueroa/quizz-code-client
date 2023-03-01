import React from 'react'
import { Link } from 'react-router-dom'
import './FormLog.css'

////////////////////////////////////
export const FormLog = ({title, otherUrl, img, action}) => {

  const getForm = (e) => {
    e.preventDefault()

    let userEmail = e.target.userEmail.value
    let userPassword = e.target.userPassword.value

    if (userEmail && userPassword) {
      let result = action(userEmail, userPassword)
      console.log(result)
    }

  }


  ////////////////////////////////////
  return (
    <div className='formlog'>

      <div className='formlog__mask'>
        <img src={img} alt="" />
      </div>

      <div className='formlog__block'>
        <h3 className='formlog__title'>{title}</h3>

        <form className='formlog__form' onSubmit={getForm}>
          <label>Email
            <input type='email' name='userEmail'/>
          </label>
          <label>Password
            <input type='password' name='userPassword'/>
          </label>

          <p className='form-log__ask'>
            {otherUrl.text1} <Link to={otherUrl.url}>{otherUrl.text2}</Link>
          </p>

          <div>
            <input type="submit" value={'Listo'}/>
          </div>

        </form>
      </div>
      
    </div>
  )
}
