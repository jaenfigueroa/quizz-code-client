import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ChallengeList from '../../components/ChallengeList'
import './Category.css'

///////////////////////////////////////
const challenges = [
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
export const Category = () => {

  const {category} = useParams()


  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

  /////////////////////////////////////
  return (
    <section className='section-category'>
      <h2>Categoria: {category}</h2>
      <ChallengeList challenges={challenges} category={category}/>
    </section>
  )
}
