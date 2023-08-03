import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Sidebar(props){
    return (
        <>
            <div className={props.open ? "sidebar collapsed" : "sidebar"}>
                <div className='close-icon' onClick={props.close}>
                    <CloseIcon/>
                </div>
                <div className="sidebar-wrapper">
                    <ul>
                        <li>
                            <Link smooth to="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#skills">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='sidebar-social'>
                    <Link to="https://www.linkedin.com/in/sahil-kumar14/" target='blank' className='social-icon'>
                        <LinkedInIcon/>
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sahil.kumar@somaiya.edu" target='blank' className='social-icon'>
                        <EmailOutlinedIcon/>
                    </Link>
                    <Link to="https://github.com/sahil59" target='blank' className='social-icon'>
                        <GitHubIcon/>
                    </Link>
                </div>
            </div>
        </>
    )
}
