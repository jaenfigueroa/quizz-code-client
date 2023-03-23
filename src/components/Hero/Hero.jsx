import React from 'react'
import { GlowButton } from './GlowButton/GlowButton'
import './Hero.css'

/// ///////////////////////////////
export const Hero = () => {
  /// ///////////////////////////////
  return (
    <section className='section-hero'>

      <div className='section-hero__container'>

        <p className='section-hero__text'>¡Acepta los retos y lleva tus habilidades de <span>HTML, CSS y JavaScript</span> al siguiente nivel!</p>

        <GlowButton />
      </div>
    </section>
  )
}
