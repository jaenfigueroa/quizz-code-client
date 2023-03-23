import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerTags, Tag } from '../../../components/ContainerTags/ContainerTags'
import './Header.css'

/// ////////////////////////////////////
export const Header = () => {
  const { category, number } = useParams()

  /// ////////////////////////////////////
  return (
    <header className='challenge-header'>
      <h4>Reto #{number}: Aqui va el titulo del challenge de {category} correspondiente</h4>
      {/* <div>
        <span>{category}</span>
        <span>Facil</span>
      </div> */}

      <ContainerTags tags={
        <>
          <Tag text={category} color='orange-solid' />
          <Tag text='facil' color='green' />
          <Tag text='completado' color='blue' />
        </>
        }
      />
    </header>
  )
}
