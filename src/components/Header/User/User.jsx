import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../../context/AppContext"
import { deleteUser } from "../../../helpers/log/deleteUser"
import { getUser } from "../../../helpers/log/getUser"
import "./User.css"

//////////////////////////////////////
export const User = () => {
	const { setIsAuthenticated } = useContext(AppContext)
	const user = getUser()
	const [componentActive, setComponentActive] = useState(false)
	const navigate = useNavigate()

	const alternProfile = () => {
		setComponentActive(!componentActive)
	}

	//////////////////////////////////////
	return (
		<div className='user__container' onClick={alternProfile}>
			<div className="user__mask">
				<img className='user__img' src={user.avatar} alt="foto de perfil del usuario"/>
			</div>
			{
				componentActive && (
				<ul className='user__information'>
					<li className='user__name'>{user.name}</li>
					{/* <li className='user__description'>Aqui va una descripcion del usuario</li> */}
					<li className='user__description'>{user.email}</li>
					<Link className='user__button-edit' to='/profile'>Editar Perfil</Link>
					<Link className='user__button-edit' to='/' onClick={() => {
						deleteUser() //eliminar datos del uusario del local storage
						setIsAuthenticated(false)
            navigate('/')
					}}>Cerrar sesion</Link>
				</ul>
			)}
		</div>
	)
}
