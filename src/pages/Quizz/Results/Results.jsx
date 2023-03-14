import React, { useState } from 'react'

///////////////////////////////////////////
export const Results = ({getQuestion, results}) => {

  ///////////////////////////////////////////
  return (
    <>
      <p>Opcion Elegida: {results.chosenOption}</p>
      <p>Resultados: {results.message}</p>
      <button onClick={() => getQuestion()}>Siguiente</button>
    </>
  )
}
