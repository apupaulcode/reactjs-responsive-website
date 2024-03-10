import React from 'react'
import './Hero.css';
import darkArrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsum totam quam quae. Tempore, odit.</p>
        <button className='btn'>Explore more <img src={darkArrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
