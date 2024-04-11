import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h1>친근하고 기대 받고 싶은</h1>
                <h3> 신입 원동현 입니다.</h3>
                <h5 className='text-light'>FrontEnd Developer</h5>
                <CTA />
                <HeaderSocials />


                <div className="me">
                    <img src={Me} alt="" />
                </div>


                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header