import React, { useEffect } from "react";
import { getUser } from "../../helpers/log/getUser";
import "./Profile.css";
import { SettingAvatar } from "./SettingAvatar/SettingAvatar";
import { SettingOption } from "./SettingOption/SettingOption";

////////////////////////////////////////
export const Profile = () => {
  const user = getUser()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const inputImagen = document.getElementById('imageAvatar');
  ////////////////////////////////////////
  return (
    <section className="section-profile">
      <div className="section-profile__block">
        <h5 className="section-profile__title">Configuración general de la cuenta</h5>

        <section className="section-profile__table">
          <SettingAvatar value={user.avatar} idUser={user["_id"]}/>
          <button className="button-edit-avatar" onClick={() =>inputImagen.click() }>Editar foto de perfil</button>
          <SettingOption
            label='Descripcion'
            type='description'
            name='description'
            value={user.description}
            editable={true}/>
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
