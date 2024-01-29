import React from 'react'

import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {


    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>hwn123h@gmail.com</h5>
                        <a href="mailto:hwn123@gmail.com" target="__blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaTelegram className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Telegram</h5>
                        <a href="https://t.me/hyun9807" target="__blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaInstagram className='contact__option-icon' />
                        <h4>SNS</h4>
                        <h5>Instagram</h5>
                        <a href="https://www.instagram.com/luvmir_maru/" target="__blank">PM me</a>
                    </article>
                </div>

            </div>

        </section>
    )
}

export default Contact