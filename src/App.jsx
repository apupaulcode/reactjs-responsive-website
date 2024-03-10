import React from 'react';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What we offer'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Students say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
