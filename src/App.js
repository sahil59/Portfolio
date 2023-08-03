import React, { useState } from 'react';
import './App.css';
import Blob1 from './assets/blob1.svg';
import Blob2 from './assets/blob2.svg';
import Blob3 from './assets/blob3.svg';
import Blob4 from './assets/blob4.svg';
import Blob5 from './assets/blob5.svg';
import Blob6 from './assets/blob6.svg';
// import Blob7 from './assets/blob7.svg';
// import Blob8 from './assets/blob8.svg';
import Navbar from './components/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    BrowserRouter as Router,
    Link
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
                <aside>
                    <Link to="https://www.linkedin.com/in/sahil-kumar14/" target='blank' className='social-icon'>
                        <LinkedInIcon/>
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sahil.kumar@somaiya.edu" target='blank' className='social-icon'>
                        <EmailOutlinedIcon/>
                    </Link>
                    <Link to="https://github.com/sahil59" target='blank' className='social-icon'>
                        <GitHubIcon/>
                    </Link>
                </aside>
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
                <img src={Blob1} alt="" className='blob1' />
                <img src={Blob2} alt="" className='blob2' />
                <img src={Blob3} alt="" className='blob3' />
                <img src={Blob4} alt="" className='blob4' />
                <img src={Blob5} alt="" className='blob5' />
                <img src={Blob6} alt="" className='blob6' />
                {/* <img src={Blob7} alt="" className='blob7' /> */}
                {/* <img src={Blob8} alt="" className='blob8' /> */}
            </Router>
        </>
    );
}

export default App;