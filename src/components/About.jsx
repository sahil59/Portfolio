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
                        Hello, I am Sahil Kumar from final year student from K. J. Somaiya Institute of Technology pursuing my BTech. Degree. I have been working day and night to achieve my goal to become a MERN stack developer.
                            <br />
                            <br />
                        I have been through various Hackathons which not only helped me to strengthen my skills and knowledge but also helped  me to improve teamwork and co-ordinations.                         I have been working on various projects which helped me to improve my skills and knowledge. I have been working on various projects which helped me to improve my skills and knowledge.
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