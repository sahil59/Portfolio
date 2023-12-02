import React from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { HashLink as Link } from 'react-router-hash-link';
// import myImg from '../assets/1690804412682.jpg'
import myGif from '../assets/coworking-male-programmer-writing-program-code.gif';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HashLink as Link } from 'react-router-hash-link';

export default function Home(){
    return(
        <>
            <header>
                <div className='hero-section'>
                    <div className='hero-content'>
                        <h1 className='name'>Sahil Kumar</h1>
                        <p className="small-desc">Full Stack Developer and UI Designer</p>
                        <div className='social-media-acc'>
                            <Link to="https://www.linkedin.com/in/sahil-kumar14/" target='blank' className='social-icon'>
                                <LinkedInIcon />
                            </Link>
                            <Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sahil.kumar@somaiya.edu" target='blank' className='social-icon'>
                                <EmailOutlinedIcon />
                            </Link>
                            <Link to="https://github.com/sahil59" target='blank' className='social-icon'>
                                <GitHubIcon />
                            </Link>
                        </div>
                        <Link to="#about" className='know-more'>
                            Know more
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    <div className='hero-img-div'>
                        <img src={myGif} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
