import React from 'react'
import './Header.css'
import { Fade } from 'react-reveal'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>안녕하세요.</h5>
                <h1>원동현 입니다.</h1>
                <h5 className='text-light'>FrontEnd Developer</h5>
                <CTA />
                <HeaderSocials />

                <Fade duration={1000}>
                    <div className="me">
                        <img src={Me} alt="" />
                    </div>
                </Fade>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header