import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMemesThunk } from "../store/memes";
import './Meme.css'
// import './SplashPage.css'


const Meme = ({meme}) => {
    // console.log(meme)

    const [num, setNum] = useState(1)

    return (
        <div className='meme'>
            <div className='meme-title' >
                {meme.name}
            </div>
            <div className='meme-img'>
                <img src={`${meme.src}`}></img>
            </div>
            <div className='price-stock'>
                <span>
                    Price: ${meme.price}
                </span>
                <span>
                    In Stock: {meme.quantityAvailable}
                </span>
            </div>
            <div className='add-to-cart'>
                <button>Add To Cart</button>
                <div className='meme-quantity'>
                    <button>-</button>
                    <span>{num}</span>
                    <button>+</button>
                </div>
            </div>
            <div>
                <button>See More Details</button>
            </div>
        </div>
    )
}

export default Meme;