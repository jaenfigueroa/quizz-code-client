import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import "./Profile.css";

////////////////////////////////////////
export const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  ////////////////////////////////////////
  return (
    <section className="section-profile">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section-profile__display-image"></div>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            {...register("name", {
              required: {
                value: true,
                message: "Ingresa tu nombre",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => {
              return message ? (
                <p className="section-profile__form-error">{message}</p>
              ) : null;
            }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Ingresa tu email",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Ingresa un email valido",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => {
              return message ? (
                <p className="section-profile__form-error">{message}</p>
              ) : null;
            }}
          />
        </div>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: true,
          })}
        />
        <div>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Tus contraseñas no coinciden";
                }
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="confirm_password"
            render={({ message }) => {
              return message ? (
                <p className="section-profile__form-error">{message}</p>
              ) : null;
            }}
          />
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </section>
  );
};
