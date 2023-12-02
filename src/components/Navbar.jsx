import React, {useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar(props){
    useEffect(() => { 
        AOS.init({duration: 1000});
    }, [])

    // const [theme, setTheme] = useState('light');
    // const [icon, setIcon] = useState('light_mode');

    // const toggleTheme = () => {
    //     if(theme === 'light'){
    //         setTheme('dark');
    //         setIcon('dark_mode');
    //     } else {
    //         setTheme('light');
    //         setIcon('light_mode');
    //     }
    // }

    return (
        <>
            <nav>
                {/* <div className="nav-wrapper"> */}
                <ul className="nav-items">
                        <li>
                            <Link smooth to="#" className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li>
                        <Link smooth to="#about" className='nav-links'>
                                About
                            </Link>
                        </li>
                        <li>
                        <Link smooth to="#skills" className='nav-links'>
                                Skills
                            </Link>
                        </li>
                        <li>
                        <Link smooth to="#projects" className='nav-links'>
                                Projects
                            </Link>
                        </li>
                        <li>
                        <Link smooth to="#contact" className='nav-links'>
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                    <div className='menu-icon' onClick={props.click}>
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                    {/* <span className="material-symbols-outlined theme-icon" onClick={toggleTheme}>
                        {icon}
                    </span> */}
                {/* </div> */}
            </nav>
        </>
    );
}