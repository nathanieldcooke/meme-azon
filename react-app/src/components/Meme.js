import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMemesThunk } from "../store/memes";
import './Meme.css'
// import './SplashPage.css'


const Meme = ({meme}) => {
    // console.log(meme)

    const [num, setNum] = useState(1);
    const [seeMore, setSeeMore] = useState(false);

    const getReviews = (reviewsObj) => {
        const reviewArr = []
        for (let rev_key in reviewsObj){
            reviewArr.push(reviewsObj[rev_key])
        }
        return reviewArr
    }

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
                    <button
                    className='pos'
                    onClick={() => { 
                        if (num === 1){
                            setNum(1)
                        } else {
                            setNum(num - 1) 
                        }
                    }}
                    >-</button>
                    <span className='num-avail'>{num}</span>
                    <button
                    className='neg'
                    onClick={() => {
                        if (num === meme.quantityAvailable){
                            setNum(num)
                        } else {
                            setNum(num + 1)}
                        }
                    }
                    >+</button>
                </div>
            </div>
            <div className='meme-show-button'>
                <button
                    onClick={() => {
                        seeMore ? setSeeMore(false) : setSeeMore(true)
                    }}
                >{seeMore ? "Show Less" : "See More Details"}</button>
            </div>
            {
            seeMore ? 
                <>
                    <label>Description:</label>
                    <div>
                        {meme.description}
                    </div>
                    <br></br>
                    <label>Reviews:</label>
                    <div>
                        {getReviews(meme.reviews).map((review, idx) => (
                            <div key={`rev-${idx}`} className='review'>
                                {review.body}
                            </div>
                        ))}
                    </div>
                </>
            :
                null
            }
        </div>
    )
}

export default Meme;