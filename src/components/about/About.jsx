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
                        {/* <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <p>컴퓨터</p><p>정보통신공학</p>
                        </article> */}

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>학술제</h5>
                            <p>최우수상
                            </p>
                            <strong>이미지 트래킹 AI를 통한 포트홀 탐지</strong>
                        </article>


                        <article className='about__card'>
                            <GrCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <p>정보처리기사 </p>
                        </article>

                    </div>
                    <p> <span>개발자</span></p>
                    <p> 일상에서 불편함을 찾아내어 기술을 통해 해결하려 노력하는 사람</p>
                    <p>
                        다양한 <span>라이브러리</span> 및 <span>API</span>사용
                    </p>
                    <p>
                        기대하지 않는 신입보다는 <span>기대할 수 있는 신입 개발자</span>가 되려 합니다.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default About