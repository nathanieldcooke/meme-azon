import React from "react";
import './SplashPage.css'


const SplashPage = () => {
    return (
        <>
            <div className='splash-main'>
                <div className='sub-main-container'>
                    <div className='splash-section'>
                        <div className='splash-title'>Welcome to Meme-Azon!</div>
                        <div className='splash-intro'>Meme-Azon is the perfect place to purchase memes that you can find entirely free online... get started purchasing now!!</div>
                    </div>
                    <div className='splash-section'>
                        <div className='splash-title' >Technologies Used To Build Meme-Azon</div>
                        <div className='splash-tech'><i className="fab fa-docker"></i><i className="fab fa-python"></i><i className="fab fa-js"></i><i className="fab fa-html5"></i><i className="fab fa-css3-alt"></i><i className="fas fa-flask"></i></div>
                        <div className='splash-tech'><span>SQLA</span><span>Postgress</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage;