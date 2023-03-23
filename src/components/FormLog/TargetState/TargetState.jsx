import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'
// import { updateUser } from '../../../helpers/log/updateUser'
import './TargetState.css'

/// ///////////////////////////////////////
export const TargetState = ({ targetState, setTargetState }) => {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    status = 'loading',
    message = 'Estamos procesando tu solicitud, espere un momento.',
    targetVisible = false,
    data = null
  } = targetState

  // cerrar la tarjeta
  const closeTarget = () => {
    setTargetState((currentState) => {
      return { ...currentState, targetVisible: false }
    })
  }

  /// ///////////////////////////////////////
  if (targetState && targetVisible) {
    return (
      <div className='target-state'>

        {status === 'loading' && <i className='fa-solid fa-spinner target-state__icon target-state__icon--animate' />}
        {status === 'sucess' && <i className='fa-solid fa-circle-check target-state__icon' />}
        {status === 'error' && <i className='fa-solid fa-triangle-exclamation target-state__icon' />}

        <p className='target-state__text'>{message}</p>
        {
          status === 'sucess'
            ? (
              <button
                className='target-state__button' onClick={() => {
                  setIsAuthenticated(true)
                  navigate('/')
                }}
              >Genial
              </button>
              )
            : (
              <button className='target-state__button' onClick={closeTarget}>
                {status === 'loading' && 'Cerrar'}
                {status === 'error' && 'Intentarlo de nuevo'}
              </button>
              )
        }

      </div>
    )
  }
}
