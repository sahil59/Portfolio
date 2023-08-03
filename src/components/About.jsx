import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImg from '../assets/1690804412682.jpg'

export default function About(){
    useEffect(() => { 
        AOS.init({duration: 1000});
    }, [])
    
    return(
        <>
            <section id='about'>
                <h2 data-aos="fade-left">ABOUT</h2>
                <div  className='about-me'>
                    <p data-aos="fade-right" className='about-para'>
                        Hello, I'm Sahil Kumar, a final year BTech student at K. J. Somaiya Institute of Technology. My passion is to become a MERN stack developer. I've participated in various Hackathons, enhancing my skills, knowledge, and teamwork. Through working on diverse projects, I've honed my abilities as a developer. I'm excited to continue my journey, grow further, and contribute to the world of web development.
                    </p>
                    <div data-aos="fade-left">
                        <img src={myImg} alt=""/>
                        <div className='img_bg'></div>
                    </div>
                </div>
            </section>
        </>
    )
}