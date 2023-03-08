import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Challenges from '../../pages/Challenges/Challenges'
import ChallengeCard from './ChallengeCard/ChallengeCard'
import './Languagex.css'

///////////////////////////////////////
const challengesList = [
  {
    id: "1",
    name: "Challenge 1",
  },
  {
    id: "2",
    name: "Challenge 2",
  },
  {
    id: "3",
    name: "Challenge 3",
  },
  {
    id: "4",
    name: "Challenge 4",
  },
  {
    id: "5",
    name: "Challenge 5",
  },
  {
    id: "6",
    name: "Challenge 6",
  },
  {
    id: "7",
    name: "Challenge 7",
  },
  {
    id: "8",
    name: "Challenge 8",
  },
  {
    id: "9",
    name: "Challenge 9",
  },
  {
    id: "10",
    name: "Challenge 10",
  },
  {
    id: "11",
    name: "Challenge 11",
  },
  {
    id: "12",
    name: "Challenge 12",
  },
]

/////////////////////////////////////
export const Languagex = () => {

  const { category } = useParams()


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /////////////////////////////////////
  return (
    <section className='category'>

      <h2 className='component-title'>Categoria: {category}</h2>

      {/* CONTENEDOR DE CHALLENEGES DISPONIBLES */}
      <div className='category__container'>
        {challengesList.map((challenge) => (
          <ChallengeCard challenge={challenge} category={category} key={`${challenge.name}-${challenge.id}`} />
        ))}
      </div>

    </section>
  )
}
