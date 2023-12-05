import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar(props) {

    return (
        <>
            <nav>
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
            </nav>
        </>
    );
}