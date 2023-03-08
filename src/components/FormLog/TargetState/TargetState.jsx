import React from 'react'
import './TargetState.css'

//////////////////////////////////////////
export const TargetState = ({ targetState, setTargetState  }) => {

  const {state ='loading', message ='Espera unos segundos', targetVisible=false} =  targetState


  const closeTarget = () => {
    setTargetState((currentState) => {
      return {...currentState, targetVisible: false }
    })
  }

  //////////////////////////////////////////
  if(targetState && targetVisible){
    return (
      <div className='target-state'>
  
        {state==='loading' && <i className="fa-solid fa-spinner target-state__icon target-state__icon--animate"></i>}
        {state==='sucess' && <i className="fa-solid fa-circle-check target-state__icon"></i>}
        {state==='error' && <i className="fa-solid fa-triangle-exclamation target-state__icon"></i>}
        
        <p className='target-state__text'>{message}</p>
  
        <button className='target-state__button' onClick={closeTarget}>Cerrar</button>
  
      </div>
    )
  }
}
