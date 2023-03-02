import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import './Challenge.css'
import { Header } from './Header/Header';
import pointerImg from '../../assets/pointer.png'
import { Code } from '../../components/Code/Code';
import { EditorTR } from '../../components/EditorTR/EditorTR';

////////////////////////////////////
export const Challenge = () => {

  // const { number } = useParams()

  const [viewResults, setViewResults] = useState(false)

  ////////////////////////////////////
  return (
    <section className='section-exercise'>
      {/* HEADER */}
      <Header/>
    
      {/* MAIN */}
      <main className='exercise'>

        {/* SECTION CODE */}
        <section className='exercise__container-code'>
          <EditorTR/>

          <div className='exercise__container-button'>
            <button className='exercise__container-code-button'>Enviar Solucion</button>
            <img src={pointerImg} alt="cursor blanco" className='pointerImg'/>
          </div>
        </section>


        {/* SECTION PROBLEM */}
        <section className='exercise__container-problem'>
          <div className='exercise__container-header'>
            <button className={`exercise-button ${!viewResults && 'exercise-button--active'}`} onClick={() => setViewResults(false)}>Instrucciones</button>
            <button className={`exercise-button ${viewResults && 'exercise-button--active'}`} onClick={() => setViewResults(true)}>Resultados</button>
          </div>

          {
            !viewResults ? (
              <>
                <p className='exercise__text'>Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea. A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos. El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:</p>
                <Code content={`const gifts = ['cat', 'game', 'socks']\nconst wrapped = wrapping(gifts)\n\nconsole.log(wrapped)\n\n/* [\n\t"******\\ncat\\n******",\n\t"*******\\ngame\\n*******",\n\t"********\\nsocks\\n********"\n] */`}/>
                <p className='exercise__text'>Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo. Nota: El carácter \n representa un salto de línea. ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string. Ah, y no modifiques (mutes) el array original.</p>
                <Code content={`const gifts = ['cat', 'game', 'socks']\nconst wrapped = wrapping(gifts)\n\nconsole.log(wrapped)\n\n/* [\n\t"******\\ncat\\n******",\n\t"*******\\ngame\\n*******",\n\t"********\\nsocks\\n********"\n] */`}/>
              </>
            ):(
              <p className='exercise__text'>Resultados</p>
            )
          }
        </section>

      </main>
    </section>
  )
}
