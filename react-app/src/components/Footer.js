import React from "react";

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <span>Nathaniel Cooke</span>
            <span>A Full-Stack Developer For Hire!</span>
            <div>
                <span
                    onClick={() => window.open(`https://github.com/nathanieldcooke`, '_blank', 'noopener noreferrer')}
                ><i className="fab fa-github"></i></span>
                <span
                    onClick={() => window.open(`https://www.linkedin.com/in/nathaniel-cooke-257a1363/`, '_blank', 'noopener noreferrer')}
                ><i className="fab fa-linkedin"></i></span>
            </div>
        </div>
    )
}

export default Footer