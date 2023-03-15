import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
// import { deleteUser } from '../../helpers/log/deleteUser'
import './Modal.css'

///////////////////////////////////////////////////
export const Modal = ({ modal, setModal }) => {

  const { setIsAuthenticated } = useContext(AppContext)

  ///////////////////////////////////////////////////
  return (
    <div className='App__modal'>
      <article className='App__modal-card'>
        {
          modal.status === 'registered' ? (
            <>
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <p className='App__modal-card-title'>¡Bienvenido nuevamente!</p>
                <p className='App__modal-card-text'>Haz Iniciado correctamente como: <span>{modal.name}</span></p>
              </div>
              <button className='App__modal-close' onClick={() => {setModal({...modal, visible: false})}}>Genial</button>
            </>
          ) : (
            <>
              <i className="fa-solid fa-spinner fa-spinner--animated"></i>
              <p className='App__modal-card-text'>Iniciando sesion como: <span>{modal.name}</span></p>
              <button className='App__modal-close' onClick={() => {
                setIsAuthenticated(false)
                setModal({...modal, visible: false})
                // deleteUser()
              }}>Cancelar</button>
            </>
          )
        }
      </article>
    </div>
  )
}
