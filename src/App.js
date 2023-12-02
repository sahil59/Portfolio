import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import GitHubIcon from '@mui/icons-material/GitHub';
import {
    BrowserRouter as Router,
    // Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Router>
                <Navbar click={openSidebar} />
                <Sidebar open={isOpen} close={closeSidebar} />
                {/* <aside>
                    <Link to="https://www.linkedin.com/in/sahil-kumar14/" target='blank' className='social-icon'>
                        <LinkedInIcon/>
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sahil.kumar@somaiya.edu" target='blank' className='social-icon'>
                        <EmailOutlinedIcon/>
                    </Link>
                    <Link to="https://github.com/sahil59" target='blank' className='social-icon'>
                        <GitHubIcon/>
                    </Link>
                </aside> */}
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </Router>
        </>
    );
}

export default App;