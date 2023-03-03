import React from 'react'
import { useParams } from 'react-router-dom'
import './Header.css'

///////////////////////////////////////
export const Header = () => {

  const {category, number} = useParams()

  ///////////////////////////////////////
  return (
    <header className='challenge-header'>
      <h4>Reto #{number}: Aqui va el titulo del challenge de {category} correspondiente</h4>
      <div>
        <span>{category}</span>
        <span>Facil</span>
      </div>
    </header>
  )
}
