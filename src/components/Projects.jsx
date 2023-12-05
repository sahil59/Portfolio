import React from 'react';
import cardData from '../cardDetails';

export default function Projects(){
    return(
        <>
            <section id='projects' className='project-sec'>
                <h2>Projects</h2>
                <div className='cards-div'>
                    {
                        cardData.map((card, index) => {
                            return (
                                <div className='project-card'>
                                    <div className='card-img-div'>
                                        <img src={card.imgSrc} alt="" />
                                    </div>
                                    <div className='card-content-div'>
                                        <h3>{card.title}</h3>
                                        {/* <p>{card.description}</p> */}
                                        <div className='tech-used'>
                                            {card.tech.map((tech, index) => {
                                                return (
                                                    <span className='tech-badge'>{tech}</span>
                                                )
                                            })}
                                        </div>
                                        <div className='card-links'>
                                            <a href={card.liveLink} target='_blank' rel="noreferrer" title='Coming soon'> 
                                                <span class="material-symbols-outlined link-to-open">
                                                    open_in_new
                                                </span>Live
                                            </a>
                                            <a href={card.githubLink} target='_blank' rel="noreferrer" title='Comming soon'>
                                                <span class="material-symbols-outlined link-to-open">
                                                    open_in_new
                                                </span>
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}