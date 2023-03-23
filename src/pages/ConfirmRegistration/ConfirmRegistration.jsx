import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import confirmUserEmail from "../../helpers/confirmUserEmail.js";
import './ConfirmRegistration.css'

///////////////////////////////////////////////////////////////
const ConfirmRegistration = () => {
  const { confirmationToken } = useParams();
  // console.log(confirmationToken)

  const [user, setUser] = useState()

  useEffect(() => {

    const getUser = async() => {
      const confirmedUser = await confirmUserEmail(confirmationToken);
      // console.log(confirmedUser)
      if (confirmedUser) {
        setUser(confirmedUser)
      }
    }

    getUser()
  }, [])


  ///////////////////////////////////////////////////////////////
  return (
    <section className='section-welcome'>
      <article className='section-welcome__article'>
        <div className="section-welcome__article-mask">
          <img src={user?.avatar} alt="" />
        </div>
        <h4 className='section-welcome__article-title'>¡Felicitaciones <span>{user?.name}</span>!</h4>
        <p className='section-welcome__article-text'>Tu dirección de correo electrónico ha sido verificada con éxito.</p>
        <Link to='/login' className='section-welcome__article-button'>Iniciar sesion</Link>
      </article>
    </section>
  )
}

export default ConfirmRegistration;