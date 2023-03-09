import React from 'react'
import './TargetState.css'

//////////////////////////////////////////
export const TargetState = ({ targetState, setTargetState  }) => {

  const {status ='loading', message ='Estamos procesando su solicitud, espere unos momentos.', targetVisible=false} =  targetState


  const closeTarget = () => {
    setTargetState((currentState) => {
      return {...currentState, targetVisible: false }
    })
  }

  //////////////////////////////////////////
  if(targetState && targetVisible){
    return (
      <div className='target-state'>
  
        {status==='loading' && <i className="fa-solid fa-spinner target-state__icon target-state__icon--animate"></i>}
        {status==='sucess' && <i className="fa-solid fa-circle-check target-state__icon"></i>}
        {status==='error' && <i className="fa-solid fa-triangle-exclamation target-state__icon"></i>}
        
        <p className='target-state__text'>{message}</p>
  
        <button className='target-state__button' onClick={closeTarget}>Cerrar</button>
  
      </div>
    )
  }
}
