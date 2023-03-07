import React, { useEffect, useState } from "react";
import "./Profile.css";

////////////////////////////////////////
export const Profile = () => {

  const [options, setOptions] = useState([
    {
      _id: 1,
      type: 'Nombres y Apellidos',
      defaultValue: 'Jaen Figueroa',
      value: 'Jaen Figueroa',
      active: false,
      placeholder: 'Nombre y Apellido',
      textConfirm: 'Contraseña'
    },
    {
      _id: 2,
      type: 'Correo Electronico',
      defaultValue: 'jaenfigueroa@hotmail.com',
      value: 'jaenfigueroa@hotmail.com',
      active: false,
      placeholder: 'Correo Electronico',
      textConfirm: 'Contraseña'
    },
    {
      _id: 3,
      type: 'Contraseña',
      defaultValue: '************',
      value: '',
      active: false,
      placeholder: 'Contraseña nueva',
      textConfirm: 'Contraseña actual'
    },
  ])


  const changeState = (index, newValue) => {
    // console.log(index, newValue)

    setOptions(() =>{
      let newArray = options.map(x => {
        if (x['_id'] === index) {
          x.active = newValue
        }

        return x
      })

      return [...newArray]
    })

  }

  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

  ////////////////////////////////////////
  return (
    <section className="section-profile">
      <div className="section-profile__block">
        <h5 className="section-profile__title">Configuración general de la cuenta</h5>

        <section className="section-profile__table">
          {
            options && options.map((element, index) => (
              <form className="section-profile__table-line" key={index}>
                {/* TITULO */}
                <span className="section-profile__table-title">{element.type}</span>
                {/* VALOR PREVISUALIZADO */}
                {
                  !element.active ? (
                    <input className={`section-profile__table-value ${element.active && 'section-profile__table-value--active'}`} defaultValue={element.defaultValue} disabled={element.active? 0 : 1} placeholder={element.placeholder}/>
                    ):(
                      <>
                      {/* INPUT CON EL VALOR */}
                      <input className={`section-profile__table-value section-profile__table-value--active`} defaultValue={element.value} disabled={element.active? 0 : 1} placeholder={element.placeholder}/>
                      {/* INPUT PARA PONER LA CONTRASEÑA*/}
                      <input type='password' className={`section-profile__table-value ${element.active && 'section-profile__table-value--active'}`} placeholder={element.textConfirm}/>
                    </>
                  )
                }
                {/* CONTENEDOR DE BOTONES */}
                <div className="section-profile__table-button-container">
                  {
                    !element.active ? (
                        <button type="button" className="section-profile__table-button-edit" onClick={(e) => {e.preventDefault();changeState(element['_id'], true)}}>Editar</button>
                    ):(
                      <>
                        <button type="submit" className="section-profile__table-button-edit section-profile__table-button-edit--green">Actualizar</button>
                        <button type="button" className="section-profile__table-button-edit section-profile__table-button-edit--red" onClick={() => changeState(element['_id'], false)}>Cancelar</button>
                      </>
                    )
                  }
                </div>
              </form>
            ))
          }
        </section>
      </div>

    </section>
  )
}
