import React from 'react'
import './About.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About-Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>4 Years Computer Science major</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Award</h5>
                            <small>Graduation project no.3 winner</small>
                        </article>


                        <article className='about__card'>
                            <GrCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <small>정보처리기사 </small>
                        </article>

                    </div>
                    <p> 제가 생각하는 <span>개발자</span>란</p>
                    <p> client의 경험을 개선하기 위해 요구를 이해하고 최적화된 솔루션을 개발하는 사람</p>
                    <p>
                        새로운 기술에 두려움없이 빠르게 적응할 수 있는 <span>개발자</span>
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Meet</a>
                </div>

            </div>
        </section>
    )
}

export default About