import React, { useEffect, useState } from 'react'
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


  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
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
                <p className='exercise__text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <Code content={`const gifts = ['cat', 'game', 'socks']\nconst wrapped = wrapping(gifts)\n\nconsole.log(wrapped)\n\n/* [\n\t"******\\ncat\\n******",\n\t"*******\\ngame\\n*******",\n\t"********\\nsocks\\n********"\n] */`}/>
                <p className='exercise__text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
