import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdBook } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiMessage2Fill } from "react-icons/ri";

import { useState } from 'react';



function Nav() {

    const [activeNav, setActiveNav] = useState("#");


    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdBook /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><RiMessage2Fill /></a>
        </nav>
    )
}

export default Nav