import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Category.css'

///////////////////////////////////////
export const Category = () => {

  const {category} = useParams()


  /////////////////////////////////////
  return (
    <section className='section-category'>
      <h2>{category}</h2>
      
      <div className='section-category__container'>
        <article>
          Challenge 1
          <Link className='button-pb' to={`/challenge/${category}/1`}>Entrar</Link>
        </article>
        <article>
          Challenge 2
          <Link className='button-pb' to={`/challenge/${category}/2`}>Entrar</Link>
        </article>
        <article>
          Challenge 3
          <Link className='button-pb' to={`/challenge/${category}/3`}>Entrar</Link>
        </article>
        <article>
          Challenge 4
          <Link className='button-pb' to={`/challenge/${category}/4`}>Entrar</Link>
        </article>
        <article>
          Challenge 5
          <Link className='button-pb' to={`/challenge/${category}/5`}>Entrar</Link>
        </article>
        <article>
          Challenge 6
          <Link className='button-pb' to={`/challenge/${category}/6`}>Entrar</Link>
        </article>
        <article>
          Challenge 7
          <Link className='button-pb' to={`/challenge/${category}/7`}>Entrar</Link>
        </article>
        <article>
          Challenge 8
          <Link className='button-pb' to={`/challenge/${category}/8`}>Entrar</Link>
        </article>
        <article>
          Challenge 9
          <Link className='button-pb' to={`/challenge/${category}/9`}>Entrar</Link>
        </article>
        <article>
          Challenge 10
          <Link className='button-pb' to={`/challenge/${category}/10`}>Entrar</Link>
        </article>
        <article>
          Challenge 11
          <Link className='button-pb' to={`/challenge/${category}/11`}>Entrar</Link>
        </article>
        <article>
          Challenge 12
          <Link className='button-pb' to={`/challenge/${category}/12`}>Entrar</Link>
        </article>
      </div>
    </section>
  )
}
