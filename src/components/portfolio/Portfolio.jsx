import React from 'react'
import './Portfolio.css'
import SKY_img from '../../assets/sky.jpg'
import Music_img from '../../assets/music.png'
import Shop_img from '../../assets/shopping.jpg'
import Work_img from '../../assets/work.jpg'
import ticket_img from '../../assets/ticket.jpg'
const data = [
    {
        id: 1,
        image: SKY_img,
        title: 'Weathering with u',
        github: 'https://github.com/Hyun198/Weathring-u',
        demo: 'https://weatheringu.netlify.app',
    },
    {
        id: 2,
        image: Work_img,
        title: 'PartTime ',
        github: 'https://github.com/Hyun198/portfolio_partTime',
        demo: 'https://cgvparttime.netlify.app',
    },
    {
        id: 3,
        image: Shop_img,
        title: 'Shopping_mall',
        github: '#',
        demo: '#',
    },
    {
        id: 4,
        image: ticket_img,
        title: 'Shopping_mall',
        github: 'https://github.com/Hyun198/TDMB',
        demo: 'https://moviemaru.netlify.app',
    },

]



function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>


            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt="weather_portfolio" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn btn-primary' target='__blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='__blank'>Demo</a>
                                </div>
                            </article>
                        )
                    })
                }



            </div>
        </section>
    )
}

export default Portfolio