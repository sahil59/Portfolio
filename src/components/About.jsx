import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import myImg from '../assets/1690804412682.jpg'
import Resume from '../assets/Sahil Kumar Resume.pdf';

export default function About(){
    // useEffect(() => { 
    //     AOS.init({duration: 1000});
    // }, [])
    
    return(
        <>
            <section id='about'>
                <h2>About Me</h2>
                <div className='about-content'>
                    <div className='about-text'>
                        <p className='about-para'>
                            I am Sahil Kumar, an enthusiastic MERN stack developer in the making. Currently pursuing my final year of BTech at K. J. Somaiya Institute of Technology, I am driven by an unwavering passion for web development.
                            <br /> <br /> My journey into the world of coding has been fueled by a passion for problem-solving and a knack for navigating complex challenges. Through active participation in hackathons and diverse projects, I have continuously honed my skills and expanded my knowledge base.
                            <br /> <br /> Driven by an insatiable thirst for learning and a deep-rooted belief in the power of teamwork, I am committed to making meaningful contributions to the ever-evolving realm of web development.
                        </p>
                        <a href={Resume} download="Resume.pdf" role='button' className='download-resume'>
                            <span class="material-symbols-outlined">
                                download
                            </span>
                            Download Resume
                        </a>
                    </div>
                    <div className='my-img-div'>
                        <img src={myImg} alt="my img" className='my-img'/>
                    </div>
                </div>
            </section>
        </>
    )
}