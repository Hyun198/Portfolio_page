import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
    return (
        <section id="experience">
            <h5>What skills i have?</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>HTML</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>CSS</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>Java script</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>React</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>Nodejs</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>MongoDB</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>Flask</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h3>MySQL</h3>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience