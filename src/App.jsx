import React from 'react'
import { Fade, Slide } from "react-reveal"

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>

      <Header />
      <Nav />
      <Slide left duration={1500}>
        <About />
      </Slide>

      <Fade duration={1500}>
        <Experience />
      </Fade>


      <Fade bottom duration={1500}>
        <Portfolio />
      </Fade>
      <Slide bottom duration={2500}>
        <Contact />
      </Slide>

      <Footer />
    </>
  )
}

export default App