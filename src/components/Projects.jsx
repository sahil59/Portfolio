import React from 'react';
import Cards from './Cards';
import Resume from '../assets/Sahil Kumar Resume.pdf';
import cardData from "../cardDetails"

function createCards(cardData){
    return <Cards
        id={cardData.id}
        key={cardData.id}
        title={cardData.title}
        img={cardData.imgSrc}
        description={cardData.description}
    />
}

export default function Projects(){
    return(
        <>
            <section id='projects' className='project-sec'>
                <h2 data-aos="fade-left">PROJECTS</h2>
                {cardData.map(createCards)}
                <a href={Resume} download="Resume.pdf" role='button' className='download-resume'>Download Resume</a>
            </section>
        </>
    )
}