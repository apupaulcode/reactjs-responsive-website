import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>Lorem, ipsum dolor.</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor ipsa, ipsum hic quisquam reprehenderit ab odio dicta repudiandae eaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor ipsa, ipsum hic quisquam reprehenderit ab odio dicta repudiandae eaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor ipsa, ipsum hic quisquam reprehenderit ab odio dicta repudiandae eaque?</p>
      </div>
    </div>
  )
}

export default About
