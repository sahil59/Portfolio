import React from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link';


export default function Sidebar(props){
    return (
        <>
            <div className={props.open ? "sidebar collapsed" : "sidebar"}>
                <div className='close-icon' onClick={props.close}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </div>
                <div className="sidebar-wrapper">
                    <ul>
                        <li>
                            <Link smooth to="#" className='slide-nav-links'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#about" className='slide-nav-links'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#skills" className='slide-nav-links'>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#projects" className='slide-nav-links'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#contact" className='slide-nav-links'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
