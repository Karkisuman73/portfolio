import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Project'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
  )
}

export default App
