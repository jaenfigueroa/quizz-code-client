import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import "./Profile.css";
import { SettingOption } from "./SettingOption/SettingOption";

////////////////////////////////////////
export const Profile = () => {
  const { user } = useContext(AppContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  ////////////////////////////////////////
  return (
    <section className="section-profile">
      <div className="section-profile__block">
        <h5 className="section-profile__title">Configuración general de la cuenta</h5>

        <section className="section-profile__table">
          <SettingOption
            label='Nombre y Apellido'
            name='name'
            value={user.name}
            type='name'
            editable={true}/>
          <SettingOption
            label='Correo Electronico'
            name='email'
            value={user.email}
            type='email'
            editable={false}/>
          <SettingOption
            label='Contraseña'
            name='newPassword'
            type='password'
            editable={true}/>
        </section>
      </div>

    </section>
  )
}
