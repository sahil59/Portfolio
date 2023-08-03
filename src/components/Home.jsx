import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HashLink as Link } from 'react-router-hash-link';

export default function Home(){
    return(
        <>
            <header>
                <h1 className='load-hidden' data-aos="fade-down">SAHIL KUMAR</h1>
                {/* <p className='welcome-mess'>
                    <b>
                        Welcome to SK Portfolio website.
                    </b>
                </p> */}
                <hr/>
                <p className="small-desc">Full Stack Developer | UI/UX Designer</p>
                <hr/>
                {/* <Link to="#about" smooth role='button' className='explore'>EXPLORE</Link> */}
                <Link to="#about" ><ExpandMoreIcon className='expand-icon' sx={{ fontSize: 50 }}/></Link> 
            </header>
        </>
    )
}
