import React, {useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar(props){
    useEffect(() => { 
        AOS.init({duration: 1000});
    }, [])
    return (
        <>
            <nav data-aos="fade-down">
                <div className="nav-wrapper">
                    <Link to="#" className="brand-logo">
                        SK
                    </Link>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <Link smooth to="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#about" >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#skills" >
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
                    <div className='menu-icon' onClick={props.click}>
                        <MenuIcon />
                    </div>
                </div>
            </nav>
        </>
    );
}