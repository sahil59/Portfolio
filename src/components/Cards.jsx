import React from 'react';

export default function Cards(props) {
    return (
        <>
            <div className="card" data-aos="flip-left" style={{backgroundImage: `url(${props.img})`}}>
                <div className="card-content">
                    <p className="card-title">{props.title}</p>
                    <span className='card-desc'>{props.description}</span>
                </div>
            </div>
        </>
    );
}
