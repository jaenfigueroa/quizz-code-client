import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Exercise.css'
//REACt SYNTAXT HIGHLIGHTER
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
//MONAKO EDITOR REACT
import Editor from "@monaco-editor/react";
import { Header } from '../../components/Header/Header';

import pointerImg from '../../assets/pointer.png'

////////////////////////////////////
export const Exercise = () => {

  const { number } = useParams()


  const customStyle = {
    fontFamily: 'Consolas, monospace',
    fontSize: 16,
  }


  ////////////////////////////////////
  return (

    <>
      <Header/>
    
      <div className='exercise'>


        {/* CODE */}
        <div className='exercise__container-code'>
          <Editor
            className='exercise__code'
            height="100%"
            defaultLanguage="javascript"
            defaultValue="const sumar = (num1, num2) => {
      return num1 + num2
  }
          
  const suma = sumar(45, 68)
          
  console.log(suma) // 113"
            theme='vs-dark'
            // onChange={(value) => setContent(value)}
          />

          <div className='exercise__container-button'>
            <button className='exercise__container-code-button'>Enviar Solucion</button>
            <img src={pointerImg} alt="" className='pointerImg'/>
          </div>
        </div>


        {/* PROBLEMA */}
        <div className='exercise__container-problem'>
          <p className='exercise__text'>Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea. A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos. El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:</p>

          <SyntaxHighlighter
            className='exercise__code'
            language="javascript"
            style={materialOceanic}
            customStyle={customStyle}
            showLineNumbers>
            {`const gifts = ['cat', 'game', 'socks']\nconst wrapped = wrapping(gifts)\n\nconsole.log(wrapped)\n\n/* [\n\t"******\\ncat\\n******",\n\t"*******\\ngame\\n*******",\n\t"********\\nsocks\\n********"\n] */`}
          </SyntaxHighlighter>

          <p className='exercise__text'>
            Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo. Nota: El carácter \n representa un salto de línea.

            ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

            Ah, y no modifiques (mutes) el array original.
          </p>
        </div>

      </div>
    </>
  )
}