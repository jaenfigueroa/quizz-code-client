import React, { useEffect } from "react";
import { getUser } from "../../helpers/log/getUser";
import "./Profile.css";
import { SettingOption } from "./SettingOption/SettingOption";

////////////////////////////////////////
export const Profile = () => {
  const user = getUser()

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
            type='name'
            name='name'
            value={user.name}
            editable={true}/>
          <SettingOption
            label='Correo Electronico'
            type='email'
            name='email'
            value={user.email}
            editable={false}/>
          <SettingOption
            label='Contraseña'
            type='password'
            name='newPassword'
            editable={true}/>
        </section>
      </div>

    </section>
  )
}
