import React from 'react'
import './Footer.css';
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>HYUN</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/luvmir_maru/"><BsInstagram /></a>
                <a href="https://t.me/hyun9807"><FaTelegramPlane /></a>

            </div>

            <div className="footer__copyright">
                <small>&copy; HYUN Portfolio. All rights reserved. </small>
            </div>
        </footer>
    )
}

export default Footer