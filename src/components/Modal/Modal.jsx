import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
// import { deleteUser } from '../../helpers/log/deleteUser'
import './Modal.css'

/// ////////////////////////////////////////////////
export const Modal = () => {
  const { modal, setModal, setIsAuthenticated } = useContext(AppContext)

  /// ////////////////////////////////////////////////
  if (modal?.visible) {
    return (
      <div className='App__modal'>
        <article className='App__modal-card'>
          {modal.status === 'registered'
            ? (
              <>
                <i className='fa-solid fa-circle-check' />
                <div>
                  <p className='App__modal-card-title'>¡Bienvenido nuevamente!</p>
                  <p className='App__modal-card-text'>Haz Iniciado sesion correctamente como: <span>{modal.name}</span></p>
                </div>
                <button className='App__modal-close' onClick={() => { setModal({ ...modal, visible: false }) }}>Genial</button>
              </>)
            : (
              <>
                <i className='fa-solid fa-spinner fa-spinner--animated' />
                <div>
                  <p className='App__modal-card-title'>Espere unos segundos</p>
                  <p className='App__modal-card-text'>Iniciando sesion como: <span>{modal.name}</span></p>
                </div>
                <button
                  className='App__modal-close' onClick={() => {
                    setIsAuthenticated(false)
                    setModal({ ...modal, visible: false })
                    // deleteUser()
                  }}
                >Cancelar
                </button>
              </>
              )}
        </article>
      </div>
    )
  }
}
