import React from 'react'
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0, x: -100 }} // 초기 상태 설정
        animate={{ opacity: 1, x: 0 }} // 애니메이션 적용
        transition={{ duration: 2 }} // 애니메이션 지속 시간 설정
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} // 초기 상태 설정
        animate={{ opacity: 1 }} // 애니메이션 적용
        transition={{ duration: 2, delay: 2 }} // 애니메이션 지속 시간 및 딜레이 설정
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // 초기 상태 설정
        animate={{ opacity: 1, y: 0 }} // 애니메이션 적용
        transition={{ duration: 2.5, delay: 3 }} // 애니메이션 지속 시간 및 딜레이 설정
      >
        <Portfolio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // 초기 상태 설정
        animate={{ opacity: 1, y: 0 }} // 애니메이션 적용
        transition={{ duration: 3, delay: 5.5 }} // 애니메이션 지속 시간 및 딜레이 설정
      >
        <Contact />
      </motion.div>



      <Footer />
    </>
  )
}

export default App