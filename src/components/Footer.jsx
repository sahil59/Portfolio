import React from 'react';

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <footer>
                <p>
                    &copy; {year} Sahil Kumar
                </p>
            </footer>
        </>
    )
}
